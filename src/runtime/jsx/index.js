import emptyTags from './empty-tags';
// escape an attribute
let map = { '&': 'amp', '<': 'lt', '>': 'gt', '"': 'quot', "'": 'apos' };
let esc = str => String(str).replace(/[&<>"']/g, s => `&${map[s]};`);
let setInnerHTMLAttr = 'dangerouslySetInnerHTML';
let DOMAttributeNames = {
	className: 'class',
	htmlFor: 'for'
};

let sanitized = {};

/** Hyperscript reviver that constructs a sanitized HTML string. */
export default function (name, attrs) {
	let stack = [], s = '';
	attrs = attrs || {};
	for (let i = arguments.length; i-- > 2;) {
		stack.push(arguments[i]);
	}
	if (name.startsWith("view") || name.startsWith("route")) {
		let [, id] = name.split("-")
		name = "div";
		attrs = { class: ".joy_view__", id };
	}
	if (typeof name === 'function') {
		attrs.children = stack.reverse();
		return name(attrs);
	}
	if (name && typeof name === 'string') {
		s += '<' + name;
		if (attrs) for (let key in attrs) {
			if (attrs[key] !== false && attrs[key] != null && key !== setInnerHTMLAttr) {
				s += ` ${DOMAttributeNames[key] ? DOMAttributeNames[key] : esc(key)}="${esc(attrs[key])}"`;
			};
			if (key.startsWith("on") && typeof attrs[key] === 'function') {
				s += ` ${key.toLocaleLowerCase()}="${attrs[key]}()"`
			};
		}
		s += '>';
	}

	if (emptyTags.indexOf(name) === -1) {
		if (attrs[setInnerHTMLAttr]) {
			s += attrs[setInnerHTMLAttr].__html;
		}
		else while (stack.length) {
			let child = stack.pop();
			if (child) {
				if (child.pop) {
					for (let i = child.length; i--;) stack.push(child[i]);
				}
				else {
					s += sanitized[child] === true ? child : esc(child);
				}
			}
		}

		s += name ? `</${name}>` : '';
	}

	sanitized[s] = true;
	return s;
}

import emptyTags from './empty-tags';
import $ from 'jquery';
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

	if (typeof name === 'function') {
		attrs.children = stack.reverse();
		return name(attrs);
	}
	if (name && typeof name ==='string') {
		s += '<' + name;
		if (attrs) for (let i in attrs) {
			if (attrs[i] !== false && attrs[i] != null && i !== setInnerHTMLAttr) {
				s += ` ${DOMAttributeNames[i] ? DOMAttributeNames[i] : esc(i)}="${esc(attrs[i])}"`;
			};
			if (i.startsWith("on") && i.toLowerCase() in window && typeof attrs[i] === 'function') {
				let elem = attrs['id'] ? $(`#${attrs['id']}`): $(`${name}[${DOMAttributeNames[i] ? DOMAttributeNames[i] : i}="${attrs[i]}"]`);
				elem instanceof Array ? elem = elem[0] : elem = $(elem);
				elem.on(i.toLowerCase().slice(2), attrs[i]);
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

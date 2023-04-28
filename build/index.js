(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/jquery/dist/jquery.js
  var require_jquery = __commonJS({
    "node_modules/jquery/dist/jquery.js"(exports, module) {
      (function(global, factory) {
        "use strict";
        if (typeof module === "object" && typeof module.exports === "object") {
          module.exports = global.document ? factory(global, true) : function(w) {
            if (!w.document) {
              throw new Error("jQuery requires a window with a document");
            }
            return factory(w);
          };
        } else {
          factory(global);
        }
      })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
        "use strict";
        var arr = [];
        var getProto = Object.getPrototypeOf;
        var slice = arr.slice;
        var flat = arr.flat ? function(array) {
          return arr.flat.call(array);
        } : function(array) {
          return arr.concat.apply([], array);
        };
        var push = arr.push;
        var indexOf = arr.indexOf;
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var fnToString = hasOwn.toString;
        var ObjectFunctionString = fnToString.call(Object);
        var support = {};
        var isFunction = function isFunction2(obj) {
          return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
        };
        var isWindow = function isWindow2(obj) {
          return obj != null && obj === obj.window;
        };
        var document2 = window2.document;
        var preservedScriptAttributes = {
          type: true,
          src: true,
          nonce: true,
          noModule: true
        };
        function DOMEval(code, node, doc) {
          doc = doc || document2;
          var i, val, script = doc.createElement("script");
          script.text = code;
          if (node) {
            for (i in preservedScriptAttributes) {
              val = node[i] || node.getAttribute && node.getAttribute(i);
              if (val) {
                script.setAttribute(i, val);
              }
            }
          }
          doc.head.appendChild(script).parentNode.removeChild(script);
        }
        function toType(obj) {
          if (obj == null) {
            return obj + "";
          }
          return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        }
        var version = "3.6.4", jQuery = function(selector, context) {
          return new jQuery.fn.init(selector, context);
        };
        jQuery.fn = jQuery.prototype = {
          // The current version of jQuery being used
          jquery: version,
          constructor: jQuery,
          // The default length of a jQuery object is 0
          length: 0,
          toArray: function() {
            return slice.call(this);
          },
          // Get the Nth element in the matched element set OR
          // Get the whole matched element set as a clean array
          get: function(num) {
            if (num == null) {
              return slice.call(this);
            }
            return num < 0 ? this[num + this.length] : this[num];
          },
          // Take an array of elements and push it onto the stack
          // (returning the new matched element set)
          pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            ret.prevObject = this;
            return ret;
          },
          // Execute a callback for every element in the matched set.
          each: function(callback) {
            return jQuery.each(this, callback);
          },
          map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
              return callback.call(elem, i, elem);
            }));
          },
          slice: function() {
            return this.pushStack(slice.apply(this, arguments));
          },
          first: function() {
            return this.eq(0);
          },
          last: function() {
            return this.eq(-1);
          },
          even: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
              return (i + 1) % 2;
            }));
          },
          odd: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
              return i % 2;
            }));
          },
          eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
          },
          end: function() {
            return this.prevObject || this.constructor();
          },
          // For internal use only.
          // Behaves like an Array's method, not like a jQuery method.
          push,
          sort: arr.sort,
          splice: arr.splice
        };
        jQuery.extend = jQuery.fn.extend = function() {
          var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
          if (typeof target === "boolean") {
            deep = target;
            target = arguments[i] || {};
            i++;
          }
          if (typeof target !== "object" && !isFunction(target)) {
            target = {};
          }
          if (i === length) {
            target = this;
            i--;
          }
          for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
              for (name in options) {
                copy = options[name];
                if (name === "__proto__" || target === copy) {
                  continue;
                }
                if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                  src = target[name];
                  if (copyIsArray && !Array.isArray(src)) {
                    clone = [];
                  } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                    clone = {};
                  } else {
                    clone = src;
                  }
                  copyIsArray = false;
                  target[name] = jQuery.extend(deep, clone, copy);
                } else if (copy !== void 0) {
                  target[name] = copy;
                }
              }
            }
          }
          return target;
        };
        jQuery.extend({
          // Unique for each copy of jQuery on the page
          expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
          // Assume jQuery is ready without the ready module
          isReady: true,
          error: function(msg) {
            throw new Error(msg);
          },
          noop: function() {
          },
          isPlainObject: function(obj) {
            var proto, Ctor;
            if (!obj || toString.call(obj) !== "[object Object]") {
              return false;
            }
            proto = getProto(obj);
            if (!proto) {
              return true;
            }
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
          },
          isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
              return false;
            }
            return true;
          },
          // Evaluates a script in a provided context; falls back to the global one
          // if not specified.
          globalEval: function(code, options, doc) {
            DOMEval(code, { nonce: options && options.nonce }, doc);
          },
          each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) {
              length = obj.length;
              for (; i < length; i++) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            } else {
              for (i in obj) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            }
            return obj;
          },
          // results is for internal usage only
          makeArray: function(arr2, results) {
            var ret = results || [];
            if (arr2 != null) {
              if (isArrayLike(Object(arr2))) {
                jQuery.merge(
                  ret,
                  typeof arr2 === "string" ? [arr2] : arr2
                );
              } else {
                push.call(ret, arr2);
              }
            }
            return ret;
          },
          inArray: function(elem, arr2, i) {
            return arr2 == null ? -1 : indexOf.call(arr2, elem, i);
          },
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          merge: function(first, second) {
            var len = +second.length, j = 0, i = first.length;
            for (; j < len; j++) {
              first[i++] = second[j];
            }
            first.length = i;
            return first;
          },
          grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
            for (; i < length; i++) {
              callbackInverse = !callback(elems[i], i);
              if (callbackInverse !== callbackExpect) {
                matches.push(elems[i]);
              }
            }
            return matches;
          },
          // arg is for internal usage only
          map: function(elems, callback, arg) {
            var length, value, i = 0, ret = [];
            if (isArrayLike(elems)) {
              length = elems.length;
              for (; i < length; i++) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            } else {
              for (i in elems) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            }
            return flat(ret);
          },
          // A global GUID counter for objects
          guid: 1,
          // jQuery.support is not used in Core but other projects attach their
          // properties to it so it needs to exist.
          support
        });
        if (typeof Symbol === "function") {
          jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
        }
        jQuery.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
          function(_i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
          }
        );
        function isArrayLike(obj) {
          var length = !!obj && "length" in obj && obj.length, type = toType(obj);
          if (isFunction(obj) || isWindow(obj)) {
            return false;
          }
          return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
        }
        var Sizzle = (
          /*!
           * Sizzle CSS Selector Engine v2.3.10
           * https://sizzlejs.com/
           *
           * Copyright JS Foundation and other contributors
           * Released under the MIT license
           * https://js.foundation/
           *
           * Date: 2023-02-14
           */
          function(window3) {
            var i, support2, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document3, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * /* @__PURE__ */ new Date(), preferredDoc = window3.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
              if (a === b) {
                hasDuplicate = true;
              }
              return 0;
            }, hasOwn2 = {}.hasOwnProperty, arr2 = [], pop = arr2.pop, pushNative = arr2.push, push2 = arr2.push, slice2 = arr2.slice, indexOf2 = function(list, elem) {
              var i2 = 0, len = list.length;
              for (; i2 < len; i2++) {
                if (list[i2] === elem) {
                  return i2;
                }
              }
              return -1;
            }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace2 = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace2 + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace2 + "*(" + identifier + ")(?:" + whitespace2 + // Operator (capture 2)
            "*([*^$|!~]?=)" + whitespace2 + // "Attribute values must be CSS identifiers [capture 5]
            // or strings [capture 3 or capture 4]"
            `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace2 + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace2 + "+", "g"), rtrim2 = new RegExp("^" + whitespace2 + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace2 + "+$", "g"), rcomma = new RegExp("^" + whitespace2 + "*," + whitespace2 + "*"), rleadingCombinator = new RegExp("^" + whitespace2 + "*([>+~]|" + whitespace2 + ")" + whitespace2 + "*"), rdescend = new RegExp(whitespace2 + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
              "ID": new RegExp("^#(" + identifier + ")"),
              "CLASS": new RegExp("^\\.(" + identifier + ")"),
              "TAG": new RegExp("^(" + identifier + "|[*])"),
              "ATTR": new RegExp("^" + attributes),
              "PSEUDO": new RegExp("^" + pseudos),
              "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace2 + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace2 + "*(?:([+-]|)" + whitespace2 + "*(\\d+)|))" + whitespace2 + "*\\)|)", "i"),
              "bool": new RegExp("^(?:" + booleans + ")$", "i"),
              // For use in libraries implementing .is()
              // We use this for POS matching in `select`
              "needsContext": new RegExp("^" + whitespace2 + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace2 + "*((?:-\\d)?\\d*)" + whitespace2 + "*\\)|)(?=[^-]|$)", "i")
            }, rhtml2 = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace2 + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
              var high = "0x" + escape.slice(1) - 65536;
              return nonHex ? (
                // Strip the backslash prefix from a non-hex escape sequence
                nonHex
              ) : (
                // Replace a hexadecimal escape sequence with the encoded Unicode code point
                // Support: IE <=11+
                // For values outside the Basic Multilingual Plane (BMP), manually construct a
                // surrogate pair
                high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320)
              );
            }, rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
              if (asCodePoint) {
                if (ch === "\0") {
                  return "\uFFFD";
                }
                return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
              }
              return "\\" + ch;
            }, unloadHandler = function() {
              setDocument();
            }, inDisabledFieldset = addCombinator(
              function(elem) {
                return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
              },
              { dir: "parentNode", next: "legend" }
            );
            try {
              push2.apply(
                arr2 = slice2.call(preferredDoc.childNodes),
                preferredDoc.childNodes
              );
              arr2[preferredDoc.childNodes.length].nodeType;
            } catch (e) {
              push2 = {
                apply: arr2.length ? (
                  // Leverage slice if possible
                  function(target, els) {
                    pushNative.apply(target, slice2.call(els));
                  }
                ) : (
                  // Support: IE<9
                  // Otherwise append directly
                  function(target, els) {
                    var j = target.length, i2 = 0;
                    while (target[j++] = els[i2++]) {
                    }
                    target.length = j - 1;
                  }
                )
              };
            }
            function Sizzle2(selector, context, results, seed) {
              var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
              results = results || [];
              if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
                return results;
              }
              if (!seed) {
                setDocument(context);
                context = context || document3;
                if (documentIsHTML) {
                  if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                    if (m = match[1]) {
                      if (nodeType === 9) {
                        if (elem = context.getElementById(m)) {
                          if (elem.id === m) {
                            results.push(elem);
                            return results;
                          }
                        } else {
                          return results;
                        }
                      } else {
                        if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                          results.push(elem);
                          return results;
                        }
                      }
                    } else if (match[2]) {
                      push2.apply(results, context.getElementsByTagName(selector));
                      return results;
                    } else if ((m = match[3]) && support2.getElementsByClassName && context.getElementsByClassName) {
                      push2.apply(results, context.getElementsByClassName(m));
                      return results;
                    }
                  }
                  if (support2.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && // Support: IE 8 only
                  // Exclude object elements
                  (nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
                    newSelector = selector;
                    newContext = context;
                    if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                      newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                      if (newContext !== context || !support2.scope) {
                        if (nid = context.getAttribute("id")) {
                          nid = nid.replace(rcssescape, fcssescape);
                        } else {
                          context.setAttribute("id", nid = expando);
                        }
                      }
                      groups = tokenize(selector);
                      i2 = groups.length;
                      while (i2--) {
                        groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                      }
                      newSelector = groups.join(",");
                    }
                    try {
                      push2.apply(
                        results,
                        newContext.querySelectorAll(newSelector)
                      );
                      return results;
                    } catch (qsaError) {
                      nonnativeSelectorCache(selector, true);
                    } finally {
                      if (nid === expando) {
                        context.removeAttribute("id");
                      }
                    }
                  }
                }
              }
              return select(selector.replace(rtrim2, "$1"), context, results, seed);
            }
            function createCache() {
              var keys = [];
              function cache(key, value) {
                if (keys.push(key + " ") > Expr.cacheLength) {
                  delete cache[keys.shift()];
                }
                return cache[key + " "] = value;
              }
              return cache;
            }
            function markFunction(fn) {
              fn[expando] = true;
              return fn;
            }
            function assert(fn) {
              var el = document3.createElement("fieldset");
              try {
                return !!fn(el);
              } catch (e) {
                return false;
              } finally {
                if (el.parentNode) {
                  el.parentNode.removeChild(el);
                }
                el = null;
              }
            }
            function addHandle(attrs, handler) {
              var arr3 = attrs.split("|"), i2 = arr3.length;
              while (i2--) {
                Expr.attrHandle[arr3[i2]] = handler;
              }
            }
            function siblingCheck(a, b) {
              var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
              if (diff) {
                return diff;
              }
              if (cur) {
                while (cur = cur.nextSibling) {
                  if (cur === b) {
                    return -1;
                  }
                }
              }
              return a ? 1 : -1;
            }
            function createInputPseudo(type) {
              return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === type;
              };
            }
            function createButtonPseudo(type) {
              return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return (name === "input" || name === "button") && elem.type === type;
              };
            }
            function createDisabledPseudo(disabled) {
              return function(elem) {
                if ("form" in elem) {
                  if (elem.parentNode && elem.disabled === false) {
                    if ("label" in elem) {
                      if ("label" in elem.parentNode) {
                        return elem.parentNode.disabled === disabled;
                      } else {
                        return elem.disabled === disabled;
                      }
                    }
                    return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                    /* jshint -W018 */
                    elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                  }
                  return elem.disabled === disabled;
                } else if ("label" in elem) {
                  return elem.disabled === disabled;
                }
                return false;
              };
            }
            function createPositionalPseudo(fn) {
              return markFunction(function(argument) {
                argument = +argument;
                return markFunction(function(seed, matches2) {
                  var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
                  while (i2--) {
                    if (seed[j = matchIndexes[i2]]) {
                      seed[j] = !(matches2[j] = seed[j]);
                    }
                  }
                });
              });
            }
            function testContext(context) {
              return context && typeof context.getElementsByTagName !== "undefined" && context;
            }
            support2 = Sizzle2.support = {};
            isXML = Sizzle2.isXML = function(elem) {
              var namespace = elem && elem.namespaceURI, docElem2 = elem && (elem.ownerDocument || elem).documentElement;
              return !rhtml2.test(namespace || docElem2 && docElem2.nodeName || "HTML");
            };
            setDocument = Sizzle2.setDocument = function(node) {
              var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
              if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
                return document3;
              }
              document3 = doc;
              docElem = document3.documentElement;
              documentIsHTML = !isXML(document3);
              if (preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
                if (subWindow.addEventListener) {
                  subWindow.addEventListener("unload", unloadHandler, false);
                } else if (subWindow.attachEvent) {
                  subWindow.attachEvent("onunload", unloadHandler);
                }
              }
              support2.scope = assert(function(el) {
                docElem.appendChild(el).appendChild(document3.createElement("div"));
                return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
              });
              support2.cssHas = assert(function() {
                try {
                  document3.querySelector(":has(*,:jqfake)");
                  return false;
                } catch (e) {
                  return true;
                }
              });
              support2.attributes = assert(function(el) {
                el.className = "i";
                return !el.getAttribute("className");
              });
              support2.getElementsByTagName = assert(function(el) {
                el.appendChild(document3.createComment(""));
                return !el.getElementsByTagName("*").length;
              });
              support2.getElementsByClassName = rnative.test(document3.getElementsByClassName);
              support2.getById = assert(function(el) {
                docElem.appendChild(el).id = expando;
                return !document3.getElementsByName || !document3.getElementsByName(expando).length;
              });
              if (support2.getById) {
                Expr.filter["ID"] = function(id) {
                  var attrId = id.replace(runescape, funescape);
                  return function(elem) {
                    return elem.getAttribute("id") === attrId;
                  };
                };
                Expr.find["ID"] = function(id, context) {
                  if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                    var elem = context.getElementById(id);
                    return elem ? [elem] : [];
                  }
                };
              } else {
                Expr.filter["ID"] = function(id) {
                  var attrId = id.replace(runescape, funescape);
                  return function(elem) {
                    var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                    return node2 && node2.value === attrId;
                  };
                };
                Expr.find["ID"] = function(id, context) {
                  if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                    var node2, i2, elems, elem = context.getElementById(id);
                    if (elem) {
                      node2 = elem.getAttributeNode("id");
                      if (node2 && node2.value === id) {
                        return [elem];
                      }
                      elems = context.getElementsByName(id);
                      i2 = 0;
                      while (elem = elems[i2++]) {
                        node2 = elem.getAttributeNode("id");
                        if (node2 && node2.value === id) {
                          return [elem];
                        }
                      }
                    }
                    return [];
                  }
                };
              }
              Expr.find["TAG"] = support2.getElementsByTagName ? function(tag, context) {
                if (typeof context.getElementsByTagName !== "undefined") {
                  return context.getElementsByTagName(tag);
                } else if (support2.qsa) {
                  return context.querySelectorAll(tag);
                }
              } : function(tag, context) {
                var elem, tmp = [], i2 = 0, results = context.getElementsByTagName(tag);
                if (tag === "*") {
                  while (elem = results[i2++]) {
                    if (elem.nodeType === 1) {
                      tmp.push(elem);
                    }
                  }
                  return tmp;
                }
                return results;
              };
              Expr.find["CLASS"] = support2.getElementsByClassName && function(className, context) {
                if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                  return context.getElementsByClassName(className);
                }
              };
              rbuggyMatches = [];
              rbuggyQSA = [];
              if (support2.qsa = rnative.test(document3.querySelectorAll)) {
                assert(function(el) {
                  var input;
                  docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                  if (el.querySelectorAll("[msallowcapture^='']").length) {
                    rbuggyQSA.push("[*^$]=" + whitespace2 + `*(?:''|"")`);
                  }
                  if (!el.querySelectorAll("[selected]").length) {
                    rbuggyQSA.push("\\[" + whitespace2 + "*(?:value|" + booleans + ")");
                  }
                  if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                    rbuggyQSA.push("~=");
                  }
                  input = document3.createElement("input");
                  input.setAttribute("name", "");
                  el.appendChild(input);
                  if (!el.querySelectorAll("[name='']").length) {
                    rbuggyQSA.push("\\[" + whitespace2 + "*name" + whitespace2 + "*=" + whitespace2 + `*(?:''|"")`);
                  }
                  if (!el.querySelectorAll(":checked").length) {
                    rbuggyQSA.push(":checked");
                  }
                  if (!el.querySelectorAll("a#" + expando + "+*").length) {
                    rbuggyQSA.push(".#.+[+~]");
                  }
                  el.querySelectorAll("\\\f");
                  rbuggyQSA.push("[\\r\\n\\f]");
                });
                assert(function(el) {
                  el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var input = document3.createElement("input");
                  input.setAttribute("type", "hidden");
                  el.appendChild(input).setAttribute("name", "D");
                  if (el.querySelectorAll("[name=d]").length) {
                    rbuggyQSA.push("name" + whitespace2 + "*[*^$|!~]?=");
                  }
                  if (el.querySelectorAll(":enabled").length !== 2) {
                    rbuggyQSA.push(":enabled", ":disabled");
                  }
                  docElem.appendChild(el).disabled = true;
                  if (el.querySelectorAll(":disabled").length !== 2) {
                    rbuggyQSA.push(":enabled", ":disabled");
                  }
                  el.querySelectorAll("*,:x");
                  rbuggyQSA.push(",.*:");
                });
              }
              if (support2.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
                assert(function(el) {
                  support2.disconnectedMatch = matches.call(el, "*");
                  matches.call(el, "[s!='']:x");
                  rbuggyMatches.push("!=", pseudos);
                });
              }
              if (!support2.cssHas) {
                rbuggyQSA.push(":has");
              }
              rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
              rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
              hasCompare = rnative.test(docElem.compareDocumentPosition);
              contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                var adown = a.nodeType === 9 && a.documentElement || a, bup = b && b.parentNode;
                return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
              } : function(a, b) {
                if (b) {
                  while (b = b.parentNode) {
                    if (b === a) {
                      return true;
                    }
                  }
                }
                return false;
              };
              sortOrder = hasCompare ? function(a, b) {
                if (a === b) {
                  hasDuplicate = true;
                  return 0;
                }
                var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (compare) {
                  return compare;
                }
                compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : (
                  // Otherwise we know they are disconnected
                  1
                );
                if (compare & 1 || !support2.sortDetached && b.compareDocumentPosition(a) === compare) {
                  if (a == document3 || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) {
                    return -1;
                  }
                  if (b == document3 || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) {
                    return 1;
                  }
                  return sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0;
                }
                return compare & 4 ? -1 : 1;
              } : function(a, b) {
                if (a === b) {
                  hasDuplicate = true;
                  return 0;
                }
                var cur, i2 = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
                if (!aup || !bup) {
                  return a == document3 ? -1 : b == document3 ? 1 : (
                    /* eslint-enable eqeqeq */
                    aup ? -1 : bup ? 1 : sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0
                  );
                } else if (aup === bup) {
                  return siblingCheck(a, b);
                }
                cur = a;
                while (cur = cur.parentNode) {
                  ap.unshift(cur);
                }
                cur = b;
                while (cur = cur.parentNode) {
                  bp.unshift(cur);
                }
                while (ap[i2] === bp[i2]) {
                  i2++;
                }
                return i2 ? (
                  // Do a sibling check if the nodes have a common ancestor
                  siblingCheck(ap[i2], bp[i2])
                ) : (
                  // Otherwise nodes in our document sort first
                  // Support: IE 11+, Edge 17 - 18+
                  // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                  // two documents; shallow comparisons work.
                  /* eslint-disable eqeqeq */
                  ap[i2] == preferredDoc ? -1 : bp[i2] == preferredDoc ? 1 : (
                    /* eslint-enable eqeqeq */
                    0
                  )
                );
              };
              return document3;
            };
            Sizzle2.matches = function(expr, elements) {
              return Sizzle2(expr, null, null, elements);
            };
            Sizzle2.matchesSelector = function(elem, expr) {
              setDocument(elem);
              if (support2.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
                try {
                  var ret = matches.call(elem, expr);
                  if (ret || support2.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                  // fragment in IE 9
                  elem.document && elem.document.nodeType !== 11) {
                    return ret;
                  }
                } catch (e) {
                  nonnativeSelectorCache(expr, true);
                }
              }
              return Sizzle2(expr, document3, null, [elem]).length > 0;
            };
            Sizzle2.contains = function(context, elem) {
              if ((context.ownerDocument || context) != document3) {
                setDocument(context);
              }
              return contains(context, elem);
            };
            Sizzle2.attr = function(elem, name) {
              if ((elem.ownerDocument || elem) != document3) {
                setDocument(elem);
              }
              var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn2.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
              return val !== void 0 ? val : support2.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
            };
            Sizzle2.escape = function(sel) {
              return (sel + "").replace(rcssescape, fcssescape);
            };
            Sizzle2.error = function(msg) {
              throw new Error("Syntax error, unrecognized expression: " + msg);
            };
            Sizzle2.uniqueSort = function(results) {
              var elem, duplicates = [], j = 0, i2 = 0;
              hasDuplicate = !support2.detectDuplicates;
              sortInput = !support2.sortStable && results.slice(0);
              results.sort(sortOrder);
              if (hasDuplicate) {
                while (elem = results[i2++]) {
                  if (elem === results[i2]) {
                    j = duplicates.push(i2);
                  }
                }
                while (j--) {
                  results.splice(duplicates[j], 1);
                }
              }
              sortInput = null;
              return results;
            };
            getText = Sizzle2.getText = function(elem) {
              var node, ret = "", i2 = 0, nodeType = elem.nodeType;
              if (!nodeType) {
                while (node = elem[i2++]) {
                  ret += getText(node);
                }
              } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                if (typeof elem.textContent === "string") {
                  return elem.textContent;
                } else {
                  for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                    ret += getText(elem);
                  }
                }
              } else if (nodeType === 3 || nodeType === 4) {
                return elem.nodeValue;
              }
              return ret;
            };
            Expr = Sizzle2.selectors = {
              // Can be adjusted by the user
              cacheLength: 50,
              createPseudo: markFunction,
              match: matchExpr,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: true },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: true },
                "~": { dir: "previousSibling" }
              },
              preFilter: {
                "ATTR": function(match) {
                  match[1] = match[1].replace(runescape, funescape);
                  match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                  if (match[2] === "~=") {
                    match[3] = " " + match[3] + " ";
                  }
                  return match.slice(0, 4);
                },
                "CHILD": function(match) {
                  match[1] = match[1].toLowerCase();
                  if (match[1].slice(0, 3) === "nth") {
                    if (!match[3]) {
                      Sizzle2.error(match[0]);
                    }
                    match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                    match[5] = +(match[7] + match[8] || match[3] === "odd");
                  } else if (match[3]) {
                    Sizzle2.error(match[0]);
                  }
                  return match;
                },
                "PSEUDO": function(match) {
                  var excess, unquoted = !match[6] && match[2];
                  if (matchExpr["CHILD"].test(match[0])) {
                    return null;
                  }
                  if (match[3]) {
                    match[2] = match[4] || match[5] || "";
                  } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
                  (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
                  (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                    match[0] = match[0].slice(0, excess);
                    match[2] = unquoted.slice(0, excess);
                  }
                  return match.slice(0, 3);
                }
              },
              filter: {
                "TAG": function(nodeNameSelector) {
                  var nodeName2 = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                  return nodeNameSelector === "*" ? function() {
                    return true;
                  } : function(elem) {
                    return elem.nodeName && elem.nodeName.toLowerCase() === nodeName2;
                  };
                },
                "CLASS": function(className) {
                  var pattern = classCache[className + " "];
                  return pattern || (pattern = new RegExp("(^|" + whitespace2 + ")" + className + "(" + whitespace2 + "|$)")) && classCache(
                    className,
                    function(elem) {
                      return pattern.test(
                        typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
                      );
                    }
                  );
                },
                "ATTR": function(name, operator, check) {
                  return function(elem) {
                    var result = Sizzle2.attr(elem, name);
                    if (result == null) {
                      return operator === "!=";
                    }
                    if (!operator) {
                      return true;
                    }
                    result += "";
                    return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                  };
                },
                "CHILD": function(type, what, _argument, first, last) {
                  var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                  return first === 1 && last === 0 ? (
                    // Shortcut for :nth-*(n)
                    function(elem) {
                      return !!elem.parentNode;
                    }
                  ) : function(elem, _context, xml) {
                    var cache, uniqueCache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                    if (parent) {
                      if (simple) {
                        while (dir2) {
                          node = elem;
                          while (node = node[dir2]) {
                            if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                              return false;
                            }
                          }
                          start = dir2 = type === "only" && !start && "nextSibling";
                        }
                        return true;
                      }
                      start = [forward ? parent.firstChild : parent.lastChild];
                      if (forward && useCache) {
                        node = parent;
                        outerCache = node[expando] || (node[expando] = {});
                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        cache = uniqueCache[type] || [];
                        nodeIndex = cache[0] === dirruns && cache[1];
                        diff = nodeIndex && cache[2];
                        node = nodeIndex && parent.childNodes[nodeIndex];
                        while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                        (diff = nodeIndex = 0) || start.pop()) {
                          if (node.nodeType === 1 && ++diff && node === elem) {
                            uniqueCache[type] = [dirruns, nodeIndex, diff];
                            break;
                          }
                        }
                      } else {
                        if (useCache) {
                          node = elem;
                          outerCache = node[expando] || (node[expando] = {});
                          uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                          cache = uniqueCache[type] || [];
                          nodeIndex = cache[0] === dirruns && cache[1];
                          diff = nodeIndex;
                        }
                        if (diff === false) {
                          while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                            if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                              if (useCache) {
                                outerCache = node[expando] || (node[expando] = {});
                                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                uniqueCache[type] = [dirruns, diff];
                              }
                              if (node === elem) {
                                break;
                              }
                            }
                          }
                        }
                      }
                      diff -= last;
                      return diff === first || diff % first === 0 && diff / first >= 0;
                    }
                  };
                },
                "PSEUDO": function(pseudo, argument) {
                  var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle2.error("unsupported pseudo: " + pseudo);
                  if (fn[expando]) {
                    return fn(argument);
                  }
                  if (fn.length > 1) {
                    args = [pseudo, pseudo, "", argument];
                    return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                      var idx, matched = fn(seed, argument), i2 = matched.length;
                      while (i2--) {
                        idx = indexOf2(seed, matched[i2]);
                        seed[idx] = !(matches2[idx] = matched[i2]);
                      }
                    }) : function(elem) {
                      return fn(elem, 0, args);
                    };
                  }
                  return fn;
                }
              },
              pseudos: {
                // Potentially complex pseudos
                "not": markFunction(function(selector) {
                  var input = [], results = [], matcher = compile(selector.replace(rtrim2, "$1"));
                  return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                    var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                    while (i2--) {
                      if (elem = unmatched[i2]) {
                        seed[i2] = !(matches2[i2] = elem);
                      }
                    }
                  }) : function(elem, _context, xml) {
                    input[0] = elem;
                    matcher(input, null, xml, results);
                    input[0] = null;
                    return !results.pop();
                  };
                }),
                "has": markFunction(function(selector) {
                  return function(elem) {
                    return Sizzle2(selector, elem).length > 0;
                  };
                }),
                "contains": markFunction(function(text) {
                  text = text.replace(runescape, funescape);
                  return function(elem) {
                    return (elem.textContent || getText(elem)).indexOf(text) > -1;
                  };
                }),
                // "Whether an element is represented by a :lang() selector
                // is based solely on the element's language value
                // being equal to the identifier C,
                // or beginning with the identifier C immediately followed by "-".
                // The matching of C against the element's language value is performed case-insensitively.
                // The identifier C does not have to be a valid language name."
                // http://www.w3.org/TR/selectors/#lang-pseudo
                "lang": markFunction(function(lang) {
                  if (!ridentifier.test(lang || "")) {
                    Sizzle2.error("unsupported lang: " + lang);
                  }
                  lang = lang.replace(runescape, funescape).toLowerCase();
                  return function(elem) {
                    var elemLang;
                    do {
                      if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                        elemLang = elemLang.toLowerCase();
                        return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                      }
                    } while ((elem = elem.parentNode) && elem.nodeType === 1);
                    return false;
                  };
                }),
                // Miscellaneous
                "target": function(elem) {
                  var hash = window3.location && window3.location.hash;
                  return hash && hash.slice(1) === elem.id;
                },
                "root": function(elem) {
                  return elem === docElem;
                },
                "focus": function(elem) {
                  return elem === document3.activeElement && (!document3.hasFocus || document3.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                },
                // Boolean properties
                "enabled": createDisabledPseudo(false),
                "disabled": createDisabledPseudo(true),
                "checked": function(elem) {
                  var nodeName2 = elem.nodeName.toLowerCase();
                  return nodeName2 === "input" && !!elem.checked || nodeName2 === "option" && !!elem.selected;
                },
                "selected": function(elem) {
                  if (elem.parentNode) {
                    elem.parentNode.selectedIndex;
                  }
                  return elem.selected === true;
                },
                // Contents
                "empty": function(elem) {
                  for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                    if (elem.nodeType < 6) {
                      return false;
                    }
                  }
                  return true;
                },
                "parent": function(elem) {
                  return !Expr.pseudos["empty"](elem);
                },
                // Element/input types
                "header": function(elem) {
                  return rheader.test(elem.nodeName);
                },
                "input": function(elem) {
                  return rinputs.test(elem.nodeName);
                },
                "button": function(elem) {
                  var name = elem.nodeName.toLowerCase();
                  return name === "input" && elem.type === "button" || name === "button";
                },
                "text": function(elem) {
                  var attr;
                  return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && // Support: IE <10 only
                  // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                  ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                },
                // Position-in-collection
                "first": createPositionalPseudo(function() {
                  return [0];
                }),
                "last": createPositionalPseudo(function(_matchIndexes, length) {
                  return [length - 1];
                }),
                "eq": createPositionalPseudo(function(_matchIndexes, length, argument) {
                  return [argument < 0 ? argument + length : argument];
                }),
                "even": createPositionalPseudo(function(matchIndexes, length) {
                  var i2 = 0;
                  for (; i2 < length; i2 += 2) {
                    matchIndexes.push(i2);
                  }
                  return matchIndexes;
                }),
                "odd": createPositionalPseudo(function(matchIndexes, length) {
                  var i2 = 1;
                  for (; i2 < length; i2 += 2) {
                    matchIndexes.push(i2);
                  }
                  return matchIndexes;
                }),
                "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                  var i2 = argument < 0 ? argument + length : argument > length ? length : argument;
                  for (; --i2 >= 0; ) {
                    matchIndexes.push(i2);
                  }
                  return matchIndexes;
                }),
                "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                  var i2 = argument < 0 ? argument + length : argument;
                  for (; ++i2 < length; ) {
                    matchIndexes.push(i2);
                  }
                  return matchIndexes;
                })
              }
            };
            Expr.pseudos["nth"] = Expr.pseudos["eq"];
            for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
              Expr.pseudos[i] = createInputPseudo(i);
            }
            for (i in { submit: true, reset: true }) {
              Expr.pseudos[i] = createButtonPseudo(i);
            }
            function setFilters() {
            }
            setFilters.prototype = Expr.filters = Expr.pseudos;
            Expr.setFilters = new setFilters();
            tokenize = Sizzle2.tokenize = function(selector, parseOnly) {
              var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
              if (cached) {
                return parseOnly ? 0 : cached.slice(0);
              }
              soFar = selector;
              groups = [];
              preFilters = Expr.preFilter;
              while (soFar) {
                if (!matched || (match = rcomma.exec(soFar))) {
                  if (match) {
                    soFar = soFar.slice(match[0].length) || soFar;
                  }
                  groups.push(tokens = []);
                }
                matched = false;
                if (match = rleadingCombinator.exec(soFar)) {
                  matched = match.shift();
                  tokens.push({
                    value: matched,
                    // Cast descendant combinators to space
                    type: match[0].replace(rtrim2, " ")
                  });
                  soFar = soFar.slice(matched.length);
                }
                for (type in Expr.filter) {
                  if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                    matched = match.shift();
                    tokens.push({
                      value: matched,
                      type,
                      matches: match
                    });
                    soFar = soFar.slice(matched.length);
                  }
                }
                if (!matched) {
                  break;
                }
              }
              return parseOnly ? soFar.length : soFar ? Sizzle2.error(selector) : (
                // Cache the tokens
                tokenCache(selector, groups).slice(0)
              );
            };
            function toSelector(tokens) {
              var i2 = 0, len = tokens.length, selector = "";
              for (; i2 < len; i2++) {
                selector += tokens[i2].value;
              }
              return selector;
            }
            function addCombinator(matcher, combinator, base) {
              var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
              return combinator.first ? (
                // Check against closest ancestor/preceding element
                function(elem, context, xml) {
                  while (elem = elem[dir2]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      return matcher(elem, context, xml);
                    }
                  }
                  return false;
                }
              ) : (
                // Check against all ancestor/preceding elements
                function(elem, context, xml) {
                  var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
                  if (xml) {
                    while (elem = elem[dir2]) {
                      if (elem.nodeType === 1 || checkNonElements) {
                        if (matcher(elem, context, xml)) {
                          return true;
                        }
                      }
                    }
                  } else {
                    while (elem = elem[dir2]) {
                      if (elem.nodeType === 1 || checkNonElements) {
                        outerCache = elem[expando] || (elem[expando] = {});
                        uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                        if (skip && skip === elem.nodeName.toLowerCase()) {
                          elem = elem[dir2] || elem;
                        } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                          return newCache[2] = oldCache[2];
                        } else {
                          uniqueCache[key] = newCache;
                          if (newCache[2] = matcher(elem, context, xml)) {
                            return true;
                          }
                        }
                      }
                    }
                  }
                  return false;
                }
              );
            }
            function elementMatcher(matchers) {
              return matchers.length > 1 ? function(elem, context, xml) {
                var i2 = matchers.length;
                while (i2--) {
                  if (!matchers[i2](elem, context, xml)) {
                    return false;
                  }
                }
                return true;
              } : matchers[0];
            }
            function multipleContexts(selector, contexts, results) {
              var i2 = 0, len = contexts.length;
              for (; i2 < len; i2++) {
                Sizzle2(selector, contexts[i2], results);
              }
              return results;
            }
            function condense(unmatched, map, filter, context, xml) {
              var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
              for (; i2 < len; i2++) {
                if (elem = unmatched[i2]) {
                  if (!filter || filter(elem, context, xml)) {
                    newUnmatched.push(elem);
                    if (mapped) {
                      map.push(i2);
                    }
                  }
                }
              }
              return newUnmatched;
            }
            function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
              if (postFilter && !postFilter[expando]) {
                postFilter = setMatcher(postFilter);
              }
              if (postFinder && !postFinder[expando]) {
                postFinder = setMatcher(postFinder, postSelector);
              }
              return markFunction(function(seed, results, context, xml) {
                var temp, i2, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
                  selector || "*",
                  context.nodeType ? [context] : context,
                  []
                ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? (
                  // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                  postFinder || (seed ? preFilter : preexisting || postFilter) ? (
                    // ...intermediate processing is necessary
                    []
                  ) : (
                    // ...otherwise use results directly
                    results
                  )
                ) : matcherIn;
                if (matcher) {
                  matcher(matcherIn, matcherOut, context, xml);
                }
                if (postFilter) {
                  temp = condense(matcherOut, postMap);
                  postFilter(temp, [], context, xml);
                  i2 = temp.length;
                  while (i2--) {
                    if (elem = temp[i2]) {
                      matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                    }
                  }
                }
                if (seed) {
                  if (postFinder || preFilter) {
                    if (postFinder) {
                      temp = [];
                      i2 = matcherOut.length;
                      while (i2--) {
                        if (elem = matcherOut[i2]) {
                          temp.push(matcherIn[i2] = elem);
                        }
                      }
                      postFinder(null, matcherOut = [], temp, xml);
                    }
                    i2 = matcherOut.length;
                    while (i2--) {
                      if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf2(seed, elem) : preMap[i2]) > -1) {
                        seed[temp] = !(results[temp] = elem);
                      }
                    }
                  }
                } else {
                  matcherOut = condense(
                    matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
                  );
                  if (postFinder) {
                    postFinder(null, results, matcherOut, xml);
                  } else {
                    push2.apply(results, matcherOut);
                  }
                }
              });
            }
            function matcherFromTokens(tokens) {
              var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                return elem === checkContext;
              }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
                return indexOf2(checkContext, elem) > -1;
              }, implicitRelative, true), matchers = [function(elem, context, xml) {
                var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                checkContext = null;
                return ret;
              }];
              for (; i2 < len; i2++) {
                if (matcher = Expr.relative[tokens[i2].type]) {
                  matchers = [addCombinator(elementMatcher(matchers), matcher)];
                } else {
                  matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
                  if (matcher[expando]) {
                    j = ++i2;
                    for (; j < len; j++) {
                      if (Expr.relative[tokens[j].type]) {
                        break;
                      }
                    }
                    return setMatcher(
                      i2 > 1 && elementMatcher(matchers),
                      i2 > 1 && toSelector(
                        // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                        tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })
                      ).replace(rtrim2, "$1"),
                      matcher,
                      i2 < j && matcherFromTokens(tokens.slice(i2, j)),
                      j < len && matcherFromTokens(tokens = tokens.slice(j)),
                      j < len && toSelector(tokens)
                    );
                  }
                  matchers.push(matcher);
                }
              }
              return elementMatcher(matchers);
            }
            function matcherFromGroupMatchers(elementMatchers, setMatchers) {
              var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
                if (outermost) {
                  outermostContext = context == document3 || context || outermost;
                }
                for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
                  if (byElement && elem) {
                    j = 0;
                    if (!context && elem.ownerDocument != document3) {
                      setDocument(elem);
                      xml = !documentIsHTML;
                    }
                    while (matcher = elementMatchers[j++]) {
                      if (matcher(elem, context || document3, xml)) {
                        results.push(elem);
                        break;
                      }
                    }
                    if (outermost) {
                      dirruns = dirrunsUnique;
                    }
                  }
                  if (bySet) {
                    if (elem = !matcher && elem) {
                      matchedCount--;
                    }
                    if (seed) {
                      unmatched.push(elem);
                    }
                  }
                }
                matchedCount += i2;
                if (bySet && i2 !== matchedCount) {
                  j = 0;
                  while (matcher = setMatchers[j++]) {
                    matcher(unmatched, setMatched, context, xml);
                  }
                  if (seed) {
                    if (matchedCount > 0) {
                      while (i2--) {
                        if (!(unmatched[i2] || setMatched[i2])) {
                          setMatched[i2] = pop.call(results);
                        }
                      }
                    }
                    setMatched = condense(setMatched);
                  }
                  push2.apply(results, setMatched);
                  if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                    Sizzle2.uniqueSort(results);
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                  outermostContext = contextBackup;
                }
                return unmatched;
              };
              return bySet ? markFunction(superMatcher) : superMatcher;
            }
            compile = Sizzle2.compile = function(selector, match) {
              var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
              if (!cached) {
                if (!match) {
                  match = tokenize(selector);
                }
                i2 = match.length;
                while (i2--) {
                  cached = matcherFromTokens(match[i2]);
                  if (cached[expando]) {
                    setMatchers.push(cached);
                  } else {
                    elementMatchers.push(cached);
                  }
                }
                cached = compilerCache(
                  selector,
                  matcherFromGroupMatchers(elementMatchers, setMatchers)
                );
                cached.selector = selector;
              }
              return cached;
            };
            select = Sizzle2.select = function(selector, context, results, seed) {
              var i2, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
              results = results || [];
              if (match.length === 1) {
                tokens = match[0] = match[0].slice(0);
                if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                  context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                  if (!context) {
                    return results;
                  } else if (compiled) {
                    context = context.parentNode;
                  }
                  selector = selector.slice(tokens.shift().value.length);
                }
                i2 = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                while (i2--) {
                  token = tokens[i2];
                  if (Expr.relative[type = token.type]) {
                    break;
                  }
                  if (find = Expr.find[type]) {
                    if (seed = find(
                      token.matches[0].replace(runescape, funescape),
                      rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                    )) {
                      tokens.splice(i2, 1);
                      selector = seed.length && toSelector(tokens);
                      if (!selector) {
                        push2.apply(results, seed);
                        return results;
                      }
                      break;
                    }
                  }
                }
              }
              (compiled || compile(selector, match))(
                seed,
                context,
                !documentIsHTML,
                results,
                !context || rsibling.test(selector) && testContext(context.parentNode) || context
              );
              return results;
            };
            support2.sortStable = expando.split("").sort(sortOrder).join("") === expando;
            support2.detectDuplicates = !!hasDuplicate;
            setDocument();
            support2.sortDetached = assert(function(el) {
              return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
            });
            if (!assert(function(el) {
              el.innerHTML = "<a href='#'></a>";
              return el.firstChild.getAttribute("href") === "#";
            })) {
              addHandle("type|href|height|width", function(elem, name, isXML2) {
                if (!isXML2) {
                  return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
                }
              });
            }
            if (!support2.attributes || !assert(function(el) {
              el.innerHTML = "<input/>";
              el.firstChild.setAttribute("value", "");
              return el.firstChild.getAttribute("value") === "";
            })) {
              addHandle("value", function(elem, _name, isXML2) {
                if (!isXML2 && elem.nodeName.toLowerCase() === "input") {
                  return elem.defaultValue;
                }
              });
            }
            if (!assert(function(el) {
              return el.getAttribute("disabled") == null;
            })) {
              addHandle(booleans, function(elem, name, isXML2) {
                var val;
                if (!isXML2) {
                  return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                }
              });
            }
            return Sizzle2;
          }(window2)
        );
        jQuery.find = Sizzle;
        jQuery.expr = Sizzle.selectors;
        jQuery.expr[":"] = jQuery.expr.pseudos;
        jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
        jQuery.text = Sizzle.getText;
        jQuery.isXMLDoc = Sizzle.isXML;
        jQuery.contains = Sizzle.contains;
        jQuery.escapeSelector = Sizzle.escape;
        var dir = function(elem, dir2, until) {
          var matched = [], truncate = until !== void 0;
          while ((elem = elem[dir2]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
              if (truncate && jQuery(elem).is(until)) {
                break;
              }
              matched.push(elem);
            }
          }
          return matched;
        };
        var siblings = function(n, elem) {
          var matched = [];
          for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== elem) {
              matched.push(n);
            }
          }
          return matched;
        };
        var rneedsContext = jQuery.expr.match.needsContext;
        function nodeName(elem, name) {
          return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        }
        var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function winnow(elements, qualifier, not) {
          if (isFunction(qualifier)) {
            return jQuery.grep(elements, function(elem, i) {
              return !!qualifier.call(elem, i, elem) !== not;
            });
          }
          if (qualifier.nodeType) {
            return jQuery.grep(elements, function(elem) {
              return elem === qualifier !== not;
            });
          }
          if (typeof qualifier !== "string") {
            return jQuery.grep(elements, function(elem) {
              return indexOf.call(qualifier, elem) > -1 !== not;
            });
          }
          return jQuery.filter(qualifier, elements, not);
        }
        jQuery.filter = function(expr, elems, not) {
          var elem = elems[0];
          if (not) {
            expr = ":not(" + expr + ")";
          }
          if (elems.length === 1 && elem.nodeType === 1) {
            return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
          }
          return jQuery.find.matches(expr, jQuery.grep(elems, function(elem2) {
            return elem2.nodeType === 1;
          }));
        };
        jQuery.fn.extend({
          find: function(selector) {
            var i, ret, len = this.length, self = this;
            if (typeof selector !== "string") {
              return this.pushStack(jQuery(selector).filter(function() {
                for (i = 0; i < len; i++) {
                  if (jQuery.contains(self[i], this)) {
                    return true;
                  }
                }
              }));
            }
            ret = this.pushStack([]);
            for (i = 0; i < len; i++) {
              jQuery.find(selector, self[i], ret);
            }
            return len > 1 ? jQuery.uniqueSort(ret) : ret;
          },
          filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
          },
          not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
          },
          is: function(selector) {
            return !!winnow(
              this,
              // If this is a positional/relative selector, check membership in the returned set
              // so $("p:first").is("p:last") won't return true for a doc with two "p".
              typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [],
              false
            ).length;
          }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
          var match, elem;
          if (!selector) {
            return this;
          }
          root = root || rootjQuery;
          if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
              match = [null, selector, null];
            } else {
              match = rquickExpr.exec(selector);
            }
            if (match && (match[1] || !context)) {
              if (match[1]) {
                context = context instanceof jQuery ? context[0] : context;
                jQuery.merge(this, jQuery.parseHTML(
                  match[1],
                  context && context.nodeType ? context.ownerDocument || context : document2,
                  true
                ));
                if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                  for (match in context) {
                    if (isFunction(this[match])) {
                      this[match](context[match]);
                    } else {
                      this.attr(match, context[match]);
                    }
                  }
                }
                return this;
              } else {
                elem = document2.getElementById(match[2]);
                if (elem) {
                  this[0] = elem;
                  this.length = 1;
                }
                return this;
              }
            } else if (!context || context.jquery) {
              return (context || root).find(selector);
            } else {
              return this.constructor(context).find(selector);
            }
          } else if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
          } else if (isFunction(selector)) {
            return root.ready !== void 0 ? root.ready(selector) : (
              // Execute immediately if ready is not present
              selector(jQuery)
            );
          }
          return jQuery.makeArray(selector, this);
        };
        init.prototype = jQuery.fn;
        rootjQuery = jQuery(document2);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
          children: true,
          contents: true,
          next: true,
          prev: true
        };
        jQuery.fn.extend({
          has: function(target) {
            var targets = jQuery(target, this), l = targets.length;
            return this.filter(function() {
              var i = 0;
              for (; i < l; i++) {
                if (jQuery.contains(this, targets[i])) {
                  return true;
                }
              }
            });
          },
          closest: function(selectors, context) {
            var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
            if (!rneedsContext.test(selectors)) {
              for (; i < l; i++) {
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                  if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (
                    // Don't pass non-elements to Sizzle
                    cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors)
                  ))) {
                    matched.push(cur);
                    break;
                  }
                }
              }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
          },
          // Determine the position of an element within the set
          index: function(elem) {
            if (!elem) {
              return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
              return indexOf.call(jQuery(elem), this[0]);
            }
            return indexOf.call(
              this,
              // If it receives a jQuery object, the first element is used
              elem.jquery ? elem[0] : elem
            );
          },
          add: function(selector, context) {
            return this.pushStack(
              jQuery.uniqueSort(
                jQuery.merge(this.get(), jQuery(selector, context))
              )
            );
          },
          addBack: function(selector) {
            return this.add(
              selector == null ? this.prevObject : this.prevObject.filter(selector)
            );
          }
        });
        function sibling(cur, dir2) {
          while ((cur = cur[dir2]) && cur.nodeType !== 1) {
          }
          return cur;
        }
        jQuery.each({
          parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
          },
          parents: function(elem) {
            return dir(elem, "parentNode");
          },
          parentsUntil: function(elem, _i, until) {
            return dir(elem, "parentNode", until);
          },
          next: function(elem) {
            return sibling(elem, "nextSibling");
          },
          prev: function(elem) {
            return sibling(elem, "previousSibling");
          },
          nextAll: function(elem) {
            return dir(elem, "nextSibling");
          },
          prevAll: function(elem) {
            return dir(elem, "previousSibling");
          },
          nextUntil: function(elem, _i, until) {
            return dir(elem, "nextSibling", until);
          },
          prevUntil: function(elem, _i, until) {
            return dir(elem, "previousSibling", until);
          },
          siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
          },
          children: function(elem) {
            return siblings(elem.firstChild);
          },
          contents: function(elem) {
            if (elem.contentDocument != null && // Support: IE 11+
            // <object> elements with no `data` attribute has an object
            // `contentDocument` with a `null` prototype.
            getProto(elem.contentDocument)) {
              return elem.contentDocument;
            }
            if (nodeName(elem, "template")) {
              elem = elem.content || elem;
            }
            return jQuery.merge([], elem.childNodes);
          }
        }, function(name, fn) {
          jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
              selector = until;
            }
            if (selector && typeof selector === "string") {
              matched = jQuery.filter(selector, matched);
            }
            if (this.length > 1) {
              if (!guaranteedUnique[name]) {
                jQuery.uniqueSort(matched);
              }
              if (rparentsprev.test(name)) {
                matched.reverse();
              }
            }
            return this.pushStack(matched);
          };
        });
        var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
        function createOptions(options) {
          var object = {};
          jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
            object[flag] = true;
          });
          return object;
        }
        jQuery.Callbacks = function(options) {
          options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
          var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
            locked = locked || options.once;
            fired = firing = true;
            for (; queue.length; firingIndex = -1) {
              memory = queue.shift();
              while (++firingIndex < list.length) {
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                  firingIndex = list.length;
                  memory = false;
                }
              }
            }
            if (!options.memory) {
              memory = false;
            }
            firing = false;
            if (locked) {
              if (memory) {
                list = [];
              } else {
                list = "";
              }
            }
          }, self = {
            // Add a callback or a collection of callbacks to the list
            add: function() {
              if (list) {
                if (memory && !firing) {
                  firingIndex = list.length - 1;
                  queue.push(memory);
                }
                (function add(args) {
                  jQuery.each(args, function(_, arg) {
                    if (isFunction(arg)) {
                      if (!options.unique || !self.has(arg)) {
                        list.push(arg);
                      }
                    } else if (arg && arg.length && toType(arg) !== "string") {
                      add(arg);
                    }
                  });
                })(arguments);
                if (memory && !firing) {
                  fire();
                }
              }
              return this;
            },
            // Remove a callback from the list
            remove: function() {
              jQuery.each(arguments, function(_, arg) {
                var index;
                while ((index = jQuery.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1);
                  if (index <= firingIndex) {
                    firingIndex--;
                  }
                }
              });
              return this;
            },
            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            has: function(fn) {
              return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
            },
            // Remove all callbacks from the list
            empty: function() {
              if (list) {
                list = [];
              }
              return this;
            },
            // Disable .fire and .add
            // Abort any current/pending executions
            // Clear all callbacks and values
            disable: function() {
              locked = queue = [];
              list = memory = "";
              return this;
            },
            disabled: function() {
              return !list;
            },
            // Disable .fire
            // Also disable .add unless we have memory (since it would have no effect)
            // Abort any pending executions
            lock: function() {
              locked = queue = [];
              if (!memory && !firing) {
                list = memory = "";
              }
              return this;
            },
            locked: function() {
              return !!locked;
            },
            // Call all callbacks with the given context and arguments
            fireWith: function(context, args) {
              if (!locked) {
                args = args || [];
                args = [context, args.slice ? args.slice() : args];
                queue.push(args);
                if (!firing) {
                  fire();
                }
              }
              return this;
            },
            // Call all the callbacks with the given arguments
            fire: function() {
              self.fireWith(this, arguments);
              return this;
            },
            // To know if the callbacks have already been called at least once
            fired: function() {
              return !!fired;
            }
          };
          return self;
        };
        function Identity(v) {
          return v;
        }
        function Thrower(ex) {
          throw ex;
        }
        function adoptValue(value, resolve, reject, noValue) {
          var method;
          try {
            if (value && isFunction(method = value.promise)) {
              method.call(value).done(resolve).fail(reject);
            } else if (value && isFunction(method = value.then)) {
              method.call(value, resolve, reject);
            } else {
              resolve.apply(void 0, [value].slice(noValue));
            }
          } catch (value2) {
            reject.apply(void 0, [value2]);
          }
        }
        jQuery.extend({
          Deferred: function(func) {
            var tuples = [
              // action, add listener, callbacks,
              // ... .then handlers, argument index, [final state]
              [
                "notify",
                "progress",
                jQuery.Callbacks("memory"),
                jQuery.Callbacks("memory"),
                2
              ],
              [
                "resolve",
                "done",
                jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"),
                0,
                "resolved"
              ],
              [
                "reject",
                "fail",
                jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"),
                1,
                "rejected"
              ]
            ], state = "pending", promise = {
              state: function() {
                return state;
              },
              always: function() {
                deferred.done(arguments).fail(arguments);
                return this;
              },
              "catch": function(fn) {
                return promise.then(null, fn);
              },
              // Keep pipe for back-compat
              pipe: function() {
                var fns = arguments;
                return jQuery.Deferred(function(newDefer) {
                  jQuery.each(tuples, function(_i, tuple) {
                    var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                    deferred[tuple[1]](function() {
                      var returned = fn && fn.apply(this, arguments);
                      if (returned && isFunction(returned.promise)) {
                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                      } else {
                        newDefer[tuple[0] + "With"](
                          this,
                          fn ? [returned] : arguments
                        );
                      }
                    });
                  });
                  fns = null;
                }).promise();
              },
              then: function(onFulfilled, onRejected, onProgress) {
                var maxDepth = 0;
                function resolve(depth, deferred2, handler, special) {
                  return function() {
                    var that = this, args = arguments, mightThrow = function() {
                      var returned, then;
                      if (depth < maxDepth) {
                        return;
                      }
                      returned = handler.apply(that, args);
                      if (returned === deferred2.promise()) {
                        throw new TypeError("Thenable self-resolution");
                      }
                      then = returned && // Support: Promises/A+ section 2.3.4
                      // https://promisesaplus.com/#point-64
                      // Only check objects and functions for thenability
                      (typeof returned === "object" || typeof returned === "function") && returned.then;
                      if (isFunction(then)) {
                        if (special) {
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special)
                          );
                        } else {
                          maxDepth++;
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special),
                            resolve(
                              maxDepth,
                              deferred2,
                              Identity,
                              deferred2.notifyWith
                            )
                          );
                        }
                      } else {
                        if (handler !== Identity) {
                          that = void 0;
                          args = [returned];
                        }
                        (special || deferred2.resolveWith)(that, args);
                      }
                    }, process = special ? mightThrow : function() {
                      try {
                        mightThrow();
                      } catch (e) {
                        if (jQuery.Deferred.exceptionHook) {
                          jQuery.Deferred.exceptionHook(
                            e,
                            process.stackTrace
                          );
                        }
                        if (depth + 1 >= maxDepth) {
                          if (handler !== Thrower) {
                            that = void 0;
                            args = [e];
                          }
                          deferred2.rejectWith(that, args);
                        }
                      }
                    };
                    if (depth) {
                      process();
                    } else {
                      if (jQuery.Deferred.getStackHook) {
                        process.stackTrace = jQuery.Deferred.getStackHook();
                      }
                      window2.setTimeout(process);
                    }
                  };
                }
                return jQuery.Deferred(function(newDefer) {
                  tuples[0][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onProgress) ? onProgress : Identity,
                      newDefer.notifyWith
                    )
                  );
                  tuples[1][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onFulfilled) ? onFulfilled : Identity
                    )
                  );
                  tuples[2][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onRejected) ? onRejected : Thrower
                    )
                  );
                }).promise();
              },
              // Get a promise for this deferred
              // If obj is provided, the promise aspect is added to the object
              promise: function(obj) {
                return obj != null ? jQuery.extend(obj, promise) : promise;
              }
            }, deferred = {};
            jQuery.each(tuples, function(i, tuple) {
              var list = tuple[2], stateString = tuple[5];
              promise[tuple[1]] = list.add;
              if (stateString) {
                list.add(
                  function() {
                    state = stateString;
                  },
                  // rejected_callbacks.disable
                  // fulfilled_callbacks.disable
                  tuples[3 - i][2].disable,
                  // rejected_handlers.disable
                  // fulfilled_handlers.disable
                  tuples[3 - i][3].disable,
                  // progress_callbacks.lock
                  tuples[0][2].lock,
                  // progress_handlers.lock
                  tuples[0][3].lock
                );
              }
              list.add(tuple[3].fire);
              deferred[tuple[0]] = function() {
                deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
                return this;
              };
              deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
              func.call(deferred, deferred);
            }
            return deferred;
          },
          // Deferred helper
          when: function(singleValue) {
            var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery.Deferred(), updateFunc = function(i2) {
              return function(value) {
                resolveContexts[i2] = this;
                resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
                if (!--remaining) {
                  primary.resolveWith(resolveContexts, resolveValues);
                }
              };
            };
            if (remaining <= 1) {
              adoptValue(
                singleValue,
                primary.done(updateFunc(i)).resolve,
                primary.reject,
                !remaining
              );
              if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
                return primary.then();
              }
            }
            while (i--) {
              adoptValue(resolveValues[i], updateFunc(i), primary.reject);
            }
            return primary.promise();
          }
        });
        var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        jQuery.Deferred.exceptionHook = function(error, stack) {
          if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
            window2.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
          }
        };
        jQuery.readyException = function(error) {
          window2.setTimeout(function() {
            throw error;
          });
        };
        var readyList = jQuery.Deferred();
        jQuery.fn.ready = function(fn) {
          readyList.then(fn).catch(function(error) {
            jQuery.readyException(error);
          });
          return this;
        };
        jQuery.extend({
          // Is the DOM ready to be used? Set to true once it occurs.
          isReady: false,
          // A counter to track how many items to wait for before
          // the ready event fires. See trac-6781
          readyWait: 1,
          // Handle when the DOM is ready
          ready: function(wait) {
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
              return;
            }
            jQuery.isReady = true;
            if (wait !== true && --jQuery.readyWait > 0) {
              return;
            }
            readyList.resolveWith(document2, [jQuery]);
          }
        });
        jQuery.ready.then = readyList.then;
        function completed() {
          document2.removeEventListener("DOMContentLoaded", completed);
          window2.removeEventListener("load", completed);
          jQuery.ready();
        }
        if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
          window2.setTimeout(jQuery.ready);
        } else {
          document2.addEventListener("DOMContentLoaded", completed);
          window2.addEventListener("load", completed);
        }
        var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
          var i = 0, len = elems.length, bulk = key == null;
          if (toType(key) === "object") {
            chainable = true;
            for (i in key) {
              access(elems, fn, i, key[i], true, emptyGet, raw);
            }
          } else if (value !== void 0) {
            chainable = true;
            if (!isFunction(value)) {
              raw = true;
            }
            if (bulk) {
              if (raw) {
                fn.call(elems, value);
                fn = null;
              } else {
                bulk = fn;
                fn = function(elem, _key, value2) {
                  return bulk.call(jQuery(elem), value2);
                };
              }
            }
            if (fn) {
              for (; i < len; i++) {
                fn(
                  elems[i],
                  key,
                  raw ? value : value.call(elems[i], i, fn(elems[i], key))
                );
              }
            }
          }
          if (chainable) {
            return elems;
          }
          if (bulk) {
            return fn.call(elems);
          }
          return len ? fn(elems[0], key) : emptyGet;
        };
        var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
        function fcamelCase(_all, letter) {
          return letter.toUpperCase();
        }
        function camelCase(string) {
          return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        }
        var acceptData = function(owner) {
          return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
        };
        function Data() {
          this.expando = jQuery.expando + Data.uid++;
        }
        Data.uid = 1;
        Data.prototype = {
          cache: function(owner) {
            var value = owner[this.expando];
            if (!value) {
              value = {};
              if (acceptData(owner)) {
                if (owner.nodeType) {
                  owner[this.expando] = value;
                } else {
                  Object.defineProperty(owner, this.expando, {
                    value,
                    configurable: true
                  });
                }
              }
            }
            return value;
          },
          set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            if (typeof data === "string") {
              cache[camelCase(data)] = value;
            } else {
              for (prop in data) {
                cache[camelCase(prop)] = data[prop];
              }
            }
            return cache;
          },
          get: function(owner, key) {
            return key === void 0 ? this.cache(owner) : (
              // Always use camelCase key (gh-2257)
              owner[this.expando] && owner[this.expando][camelCase(key)]
            );
          },
          access: function(owner, key, value) {
            if (key === void 0 || key && typeof key === "string" && value === void 0) {
              return this.get(owner, key);
            }
            this.set(owner, key, value);
            return value !== void 0 ? value : key;
          },
          remove: function(owner, key) {
            var i, cache = owner[this.expando];
            if (cache === void 0) {
              return;
            }
            if (key !== void 0) {
              if (Array.isArray(key)) {
                key = key.map(camelCase);
              } else {
                key = camelCase(key);
                key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
              }
              i = key.length;
              while (i--) {
                delete cache[key[i]];
              }
            }
            if (key === void 0 || jQuery.isEmptyObject(cache)) {
              if (owner.nodeType) {
                owner[this.expando] = void 0;
              } else {
                delete owner[this.expando];
              }
            }
          },
          hasData: function(owner) {
            var cache = owner[this.expando];
            return cache !== void 0 && !jQuery.isEmptyObject(cache);
          }
        };
        var dataPriv = new Data();
        var dataUser = new Data();
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
        function getData(data) {
          if (data === "true") {
            return true;
          }
          if (data === "false") {
            return false;
          }
          if (data === "null") {
            return null;
          }
          if (data === +data + "") {
            return +data;
          }
          if (rbrace.test(data)) {
            return JSON.parse(data);
          }
          return data;
        }
        function dataAttr(elem, key, data) {
          var name;
          if (data === void 0 && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
              try {
                data = getData(data);
              } catch (e) {
              }
              dataUser.set(elem, key, data);
            } else {
              data = void 0;
            }
          }
          return data;
        }
        jQuery.extend({
          hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
          },
          data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
          },
          removeData: function(elem, name) {
            dataUser.remove(elem, name);
          },
          // TODO: Now that all calls to _data and _removeData have been replaced
          // with direct calls to dataPriv methods, these can be deprecated.
          _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
          },
          _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
          }
        });
        jQuery.fn.extend({
          data: function(key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (key === void 0) {
              if (this.length) {
                data = dataUser.get(elem);
                if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                  i = attrs.length;
                  while (i--) {
                    if (attrs[i]) {
                      name = attrs[i].name;
                      if (name.indexOf("data-") === 0) {
                        name = camelCase(name.slice(5));
                        dataAttr(elem, name, data[name]);
                      }
                    }
                  }
                  dataPriv.set(elem, "hasDataAttrs", true);
                }
              }
              return data;
            }
            if (typeof key === "object") {
              return this.each(function() {
                dataUser.set(this, key);
              });
            }
            return access(this, function(value2) {
              var data2;
              if (elem && value2 === void 0) {
                data2 = dataUser.get(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                data2 = dataAttr(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                return;
              }
              this.each(function() {
                dataUser.set(this, key, value2);
              });
            }, null, value, arguments.length > 1, null, true);
          },
          removeData: function(key) {
            return this.each(function() {
              dataUser.remove(this, key);
            });
          }
        });
        jQuery.extend({
          queue: function(elem, type, data) {
            var queue;
            if (elem) {
              type = (type || "fx") + "queue";
              queue = dataPriv.get(elem, type);
              if (data) {
                if (!queue || Array.isArray(data)) {
                  queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                } else {
                  queue.push(data);
                }
              }
              return queue || [];
            }
          },
          dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
              jQuery.dequeue(elem, type);
            };
            if (fn === "inprogress") {
              fn = queue.shift();
              startLength--;
            }
            if (fn) {
              if (type === "fx") {
                queue.unshift("inprogress");
              }
              delete hooks.stop;
              fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
              hooks.empty.fire();
            }
          },
          // Not public - generate a queueHooks object, or return the current one
          _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
              empty: jQuery.Callbacks("once memory").add(function() {
                dataPriv.remove(elem, [type + "queue", key]);
              })
            });
          }
        });
        jQuery.fn.extend({
          queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
              data = type;
              type = "fx";
              setter--;
            }
            if (arguments.length < setter) {
              return jQuery.queue(this[0], type);
            }
            return data === void 0 ? this : this.each(function() {
              var queue = jQuery.queue(this, type, data);
              jQuery._queueHooks(this, type);
              if (type === "fx" && queue[0] !== "inprogress") {
                jQuery.dequeue(this, type);
              }
            });
          },
          dequeue: function(type) {
            return this.each(function() {
              jQuery.dequeue(this, type);
            });
          },
          clearQueue: function(type) {
            return this.queue(type || "fx", []);
          },
          // Get a promise resolved when queues of a certain type
          // are emptied (fx is the type by default)
          promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
              if (!--count) {
                defer.resolveWith(elements, [elements]);
              }
            };
            if (typeof type !== "string") {
              obj = type;
              type = void 0;
            }
            type = type || "fx";
            while (i--) {
              tmp = dataPriv.get(elements[i], type + "queueHooks");
              if (tmp && tmp.empty) {
                count++;
                tmp.empty.add(resolve);
              }
            }
            resolve();
            return defer.promise(obj);
          }
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
        var cssExpand = ["Top", "Right", "Bottom", "Left"];
        var documentElement = document2.documentElement;
        var isAttached = function(elem) {
          return jQuery.contains(elem.ownerDocument, elem);
        }, composed = { composed: true };
        if (documentElement.getRootNode) {
          isAttached = function(elem) {
            return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
          };
        }
        var isHiddenWithinTree = function(elem, el) {
          elem = el || elem;
          return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
          // Support: Firefox <=43 - 45
          // Disconnected elements can have computed display: none, so first confirm that elem is
          // in the document.
          isAttached(elem) && jQuery.css(elem, "display") === "none";
        };
        function adjustCSS(elem, prop, valueParts, tween) {
          var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
          } : function() {
            return jQuery.css(elem, prop, "");
          }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
          if (initialInUnit && initialInUnit[3] !== unit) {
            initial = initial / 2;
            unit = unit || initialInUnit[3];
            initialInUnit = +initial || 1;
            while (maxIterations--) {
              jQuery.style(elem, prop, initialInUnit + unit);
              if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                maxIterations = 0;
              }
              initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery.style(elem, prop, initialInUnit + unit);
            valueParts = valueParts || [];
          }
          if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
              tween.unit = unit;
              tween.start = initialInUnit;
              tween.end = adjusted;
            }
          }
          return adjusted;
        }
        var defaultDisplayMap = {};
        function getDefaultDisplay(elem) {
          var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
          if (display) {
            return display;
          }
          temp = doc.body.appendChild(doc.createElement(nodeName2));
          display = jQuery.css(temp, "display");
          temp.parentNode.removeChild(temp);
          if (display === "none") {
            display = "block";
          }
          defaultDisplayMap[nodeName2] = display;
          return display;
        }
        function showHide(elements, show) {
          var display, elem, values = [], index = 0, length = elements.length;
          for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
              continue;
            }
            display = elem.style.display;
            if (show) {
              if (display === "none") {
                values[index] = dataPriv.get(elem, "display") || null;
                if (!values[index]) {
                  elem.style.display = "";
                }
              }
              if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                values[index] = getDefaultDisplay(elem);
              }
            } else {
              if (display !== "none") {
                values[index] = "none";
                dataPriv.set(elem, "display", display);
              }
            }
          }
          for (index = 0; index < length; index++) {
            if (values[index] != null) {
              elements[index].style.display = values[index];
            }
          }
          return elements;
        }
        jQuery.fn.extend({
          show: function() {
            return showHide(this, true);
          },
          hide: function() {
            return showHide(this);
          },
          toggle: function(state) {
            if (typeof state === "boolean") {
              return state ? this.show() : this.hide();
            }
            return this.each(function() {
              if (isHiddenWithinTree(this)) {
                jQuery(this).show();
              } else {
                jQuery(this).hide();
              }
            });
          }
        });
        var rcheckableType = /^(?:checkbox|radio)$/i;
        var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
        var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
          var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("checked", "checked");
          input.setAttribute("name", "t");
          div.appendChild(input);
          support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
          div.innerHTML = "<textarea>x</textarea>";
          support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
          div.innerHTML = "<option></option>";
          support.option = !!div.lastChild;
        })();
        var wrapMap = {
          // XHTML parsers do not magically insert elements in the
          // same way that tag soup parsers do. So we cannot shorten
          // this by omitting <tbody> or other required elements.
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;
        if (!support.option) {
          wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
        }
        function getAll(context, tag) {
          var ret;
          if (typeof context.getElementsByTagName !== "undefined") {
            ret = context.getElementsByTagName(tag || "*");
          } else if (typeof context.querySelectorAll !== "undefined") {
            ret = context.querySelectorAll(tag || "*");
          } else {
            ret = [];
          }
          if (tag === void 0 || tag && nodeName(context, tag)) {
            return jQuery.merge([context], ret);
          }
          return ret;
        }
        function setGlobalEval(elems, refElements) {
          var i = 0, l = elems.length;
          for (; i < l; i++) {
            dataPriv.set(
              elems[i],
              "globalEval",
              !refElements || dataPriv.get(refElements[i], "globalEval")
            );
          }
        }
        var rhtml = /<|&#?\w+;/;
        function buildFragment(elems, context, scripts, selection, ignored) {
          var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
          for (; i < l; i++) {
            elem = elems[i];
            if (elem || elem === 0) {
              if (toType(elem) === "object") {
                jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
              } else if (!rhtml.test(elem)) {
                nodes.push(context.createTextNode(elem));
              } else {
                tmp = tmp || fragment.appendChild(context.createElement("div"));
                tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                wrap = wrapMap[tag] || wrapMap._default;
                tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                j = wrap[0];
                while (j--) {
                  tmp = tmp.lastChild;
                }
                jQuery.merge(nodes, tmp.childNodes);
                tmp = fragment.firstChild;
                tmp.textContent = "";
              }
            }
          }
          fragment.textContent = "";
          i = 0;
          while (elem = nodes[i++]) {
            if (selection && jQuery.inArray(elem, selection) > -1) {
              if (ignored) {
                ignored.push(elem);
              }
              continue;
            }
            attached = isAttached(elem);
            tmp = getAll(fragment.appendChild(elem), "script");
            if (attached) {
              setGlobalEval(tmp);
            }
            if (scripts) {
              j = 0;
              while (elem = tmp[j++]) {
                if (rscriptType.test(elem.type || "")) {
                  scripts.push(elem);
                }
              }
            }
          }
          return fragment;
        }
        var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
        function returnTrue() {
          return true;
        }
        function returnFalse() {
          return false;
        }
        function expectSync(elem, type) {
          return elem === safeActiveElement() === (type === "focus");
        }
        function safeActiveElement() {
          try {
            return document2.activeElement;
          } catch (err) {
          }
        }
        function on(elem, types, selector, data, fn, one) {
          var origFn, type;
          if (typeof types === "object") {
            if (typeof selector !== "string") {
              data = data || selector;
              selector = void 0;
            }
            for (type in types) {
              on(elem, type, selector, data, types[type], one);
            }
            return elem;
          }
          if (data == null && fn == null) {
            fn = selector;
            data = selector = void 0;
          } else if (fn == null) {
            if (typeof selector === "string") {
              fn = data;
              data = void 0;
            } else {
              fn = data;
              data = selector;
              selector = void 0;
            }
          }
          if (fn === false) {
            fn = returnFalse;
          } else if (!fn) {
            return elem;
          }
          if (one === 1) {
            origFn = fn;
            fn = function(event) {
              jQuery().off(event);
              return origFn.apply(this, arguments);
            };
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
          }
          return elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector);
          });
        }
        jQuery.event = {
          global: {},
          add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            if (!acceptData(elem)) {
              return;
            }
            if (handler.handler) {
              handleObjIn = handler;
              handler = handleObjIn.handler;
              selector = handleObjIn.selector;
            }
            if (selector) {
              jQuery.find.matchesSelector(documentElement, selector);
            }
            if (!handler.guid) {
              handler.guid = jQuery.guid++;
            }
            if (!(events = elemData.events)) {
              events = elemData.events = /* @__PURE__ */ Object.create(null);
            }
            if (!(eventHandle = elemData.handle)) {
              eventHandle = elemData.handle = function(e) {
                return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
              };
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                continue;
              }
              special = jQuery.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              special = jQuery.event.special[type] || {};
              handleObj = jQuery.extend({
                type,
                origType,
                data,
                handler,
                guid: handler.guid,
                selector,
                needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                namespace: namespaces.join(".")
              }, handleObjIn);
              if (!(handlers = events[type])) {
                handlers = events[type] = [];
                handlers.delegateCount = 0;
                if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                  if (elem.addEventListener) {
                    elem.addEventListener(type, eventHandle);
                  }
                }
              }
              if (special.add) {
                special.add.call(elem, handleObj);
                if (!handleObj.handler.guid) {
                  handleObj.handler.guid = handler.guid;
                }
              }
              if (selector) {
                handlers.splice(handlers.delegateCount++, 0, handleObj);
              } else {
                handlers.push(handleObj);
              }
              jQuery.event.global[type] = true;
            }
          },
          // Detach an event or set of events from an element
          remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) {
              return;
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                for (type in events) {
                  jQuery.event.remove(elem, type + types[t], handler, selector, true);
                }
                continue;
              }
              special = jQuery.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              handlers = events[type] || [];
              tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
              origCount = j = handlers.length;
              while (j--) {
                handleObj = handlers[j];
                if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                  handlers.splice(j, 1);
                  if (handleObj.selector) {
                    handlers.delegateCount--;
                  }
                  if (special.remove) {
                    special.remove.call(elem, handleObj);
                  }
                }
              }
              if (origCount && !handlers.length) {
                if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                  jQuery.removeEvent(elem, type, elemData.handle);
                }
                delete events[type];
              }
            }
            if (jQuery.isEmptyObject(events)) {
              dataPriv.remove(elem, "handle events");
            }
          },
          dispatch: function(nativeEvent) {
            var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
            args[0] = event;
            for (i = 1; i < arguments.length; i++) {
              args[i] = arguments[i];
            }
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
              return;
            }
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
              event.currentTarget = matched.elem;
              j = 0;
              while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                  event.handleObj = handleObj;
                  event.data = handleObj.data;
                  ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                  if (ret !== void 0) {
                    if ((event.result = ret) === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                  }
                }
              }
            }
            if (special.postDispatch) {
              special.postDispatch.call(this, event);
            }
            return event.result;
          },
          handlers: function(event, handlers) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && // Support: IE <=9
            // Black-hole SVG <use> instance trees (trac-13180)
            cur.nodeType && // Support: Firefox <=42
            // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
            // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
            // Support: IE 11 only
            // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
            !(event.type === "click" && event.button >= 1)) {
              for (; cur !== this; cur = cur.parentNode || this) {
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                  matchedHandlers = [];
                  matchedSelectors = {};
                  for (i = 0; i < delegateCount; i++) {
                    handleObj = handlers[i];
                    sel = handleObj.selector + " ";
                    if (matchedSelectors[sel] === void 0) {
                      matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                    }
                    if (matchedSelectors[sel]) {
                      matchedHandlers.push(handleObj);
                    }
                  }
                  if (matchedHandlers.length) {
                    handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                  }
                }
              }
            }
            cur = this;
            if (delegateCount < handlers.length) {
              handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
            }
            return handlerQueue;
          },
          addProp: function(name, hook) {
            Object.defineProperty(jQuery.Event.prototype, name, {
              enumerable: true,
              configurable: true,
              get: isFunction(hook) ? function() {
                if (this.originalEvent) {
                  return hook(this.originalEvent);
                }
              } : function() {
                if (this.originalEvent) {
                  return this.originalEvent[name];
                }
              },
              set: function(value) {
                Object.defineProperty(this, name, {
                  enumerable: true,
                  configurable: true,
                  writable: true,
                  value
                });
              }
            });
          },
          fix: function(originalEvent) {
            return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
          },
          special: {
            load: {
              // Prevent triggered image.load events from bubbling to window.load
              noBubble: true
            },
            click: {
              // Utilize native event to ensure correct state for checkable inputs
              setup: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click", returnTrue);
                }
                return false;
              },
              trigger: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click");
                }
                return true;
              },
              // For cross-browser consistency, suppress native .click() on links
              // Also prevent it if we're currently inside a leveraged native-event stack
              _default: function(event) {
                var target = event.target;
                return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
              }
            },
            beforeunload: {
              postDispatch: function(event) {
                if (event.result !== void 0 && event.originalEvent) {
                  event.originalEvent.returnValue = event.result;
                }
              }
            }
          }
        };
        function leverageNative(el, type, expectSync2) {
          if (!expectSync2) {
            if (dataPriv.get(el, type) === void 0) {
              jQuery.event.add(el, type, returnTrue);
            }
            return;
          }
          dataPriv.set(el, type, false);
          jQuery.event.add(el, type, {
            namespace: false,
            handler: function(event) {
              var notAsync, result, saved = dataPriv.get(this, type);
              if (event.isTrigger & 1 && this[type]) {
                if (!saved.length) {
                  saved = slice.call(arguments);
                  dataPriv.set(this, type, saved);
                  notAsync = expectSync2(this, type);
                  this[type]();
                  result = dataPriv.get(this, type);
                  if (saved !== result || notAsync) {
                    dataPriv.set(this, type, false);
                  } else {
                    result = {};
                  }
                  if (saved !== result) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    return result && result.value;
                  }
                } else if ((jQuery.event.special[type] || {}).delegateType) {
                  event.stopPropagation();
                }
              } else if (saved.length) {
                dataPriv.set(this, type, {
                  value: jQuery.event.trigger(
                    // Support: IE <=9 - 11+
                    // Extend with the prototype to reset the above stopImmediatePropagation()
                    jQuery.extend(saved[0], jQuery.Event.prototype),
                    saved.slice(1),
                    this
                  )
                });
                event.stopImmediatePropagation();
              }
            }
          });
        }
        jQuery.removeEvent = function(elem, type, handle) {
          if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
          }
        };
        jQuery.Event = function(src, props) {
          if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props);
          }
          if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && // Support: Android <=2.3 only
            src.returnValue === false ? returnTrue : returnFalse;
            this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
          } else {
            this.type = src;
          }
          if (props) {
            jQuery.extend(this, props);
          }
          this.timeStamp = src && src.timeStamp || Date.now();
          this[jQuery.expando] = true;
        };
        jQuery.Event.prototype = {
          constructor: jQuery.Event,
          isDefaultPrevented: returnFalse,
          isPropagationStopped: returnFalse,
          isImmediatePropagationStopped: returnFalse,
          isSimulated: false,
          preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && !this.isSimulated) {
              e.preventDefault();
            }
          },
          stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopPropagation();
            }
          },
          stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopImmediatePropagation();
            }
            this.stopPropagation();
          }
        };
        jQuery.each({
          altKey: true,
          bubbles: true,
          cancelable: true,
          changedTouches: true,
          ctrlKey: true,
          detail: true,
          eventPhase: true,
          metaKey: true,
          pageX: true,
          pageY: true,
          shiftKey: true,
          view: true,
          "char": true,
          code: true,
          charCode: true,
          key: true,
          keyCode: true,
          button: true,
          buttons: true,
          clientX: true,
          clientY: true,
          offsetX: true,
          offsetY: true,
          pointerId: true,
          pointerType: true,
          screenX: true,
          screenY: true,
          targetTouches: true,
          toElement: true,
          touches: true,
          which: true
        }, jQuery.event.addProp);
        jQuery.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
          jQuery.event.special[type] = {
            // Utilize native event if possible so blur/focus sequence is correct
            setup: function() {
              leverageNative(this, type, expectSync);
              return false;
            },
            trigger: function() {
              leverageNative(this, type);
              return true;
            },
            // Suppress native focus or blur if we're currently inside
            // a leveraged native-event stack
            _default: function(event) {
              return dataPriv.get(event.target, type);
            },
            delegateType
          };
        });
        jQuery.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        }, function(orig, fix) {
          jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
              var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
              if (!related || related !== target && !jQuery.contains(target, related)) {
                event.type = handleObj.origType;
                ret = handleObj.handler.apply(this, arguments);
                event.type = fix;
              }
              return ret;
            }
          };
        });
        jQuery.fn.extend({
          on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
          },
          one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
          },
          off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
              handleObj = types.handleObj;
              jQuery(types.delegateTarget).off(
                handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
                handleObj.selector,
                handleObj.handler
              );
              return this;
            }
            if (typeof types === "object") {
              for (type in types) {
                this.off(type, selector, types[type]);
              }
              return this;
            }
            if (selector === false || typeof selector === "function") {
              fn = selector;
              selector = void 0;
            }
            if (fn === false) {
              fn = returnFalse;
            }
            return this.each(function() {
              jQuery.event.remove(this, types, fn, selector);
            });
          }
        });
        var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function manipulationTarget(elem, content) {
          if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
            return jQuery(elem).children("tbody")[0] || elem;
          }
          return elem;
        }
        function disableScript(elem) {
          elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
          return elem;
        }
        function restoreScript(elem) {
          if ((elem.type || "").slice(0, 5) === "true/") {
            elem.type = elem.type.slice(5);
          } else {
            elem.removeAttribute("type");
          }
          return elem;
        }
        function cloneCopyEvent(src, dest) {
          var i, l, type, pdataOld, udataOld, udataCur, events;
          if (dest.nodeType !== 1) {
            return;
          }
          if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
              dataPriv.remove(dest, "handle events");
              for (type in events) {
                for (i = 0, l = events[type].length; i < l; i++) {
                  jQuery.event.add(dest, type, events[type][i]);
                }
              }
            }
          }
          if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery.extend({}, udataOld);
            dataUser.set(dest, udataCur);
          }
        }
        function fixInput(src, dest) {
          var nodeName2 = dest.nodeName.toLowerCase();
          if (nodeName2 === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked;
          } else if (nodeName2 === "input" || nodeName2 === "textarea") {
            dest.defaultValue = src.defaultValue;
          }
        }
        function domManip(collection, args, callback, ignored) {
          args = flat(args);
          var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
          if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
            return collection.each(function(index) {
              var self = collection.eq(index);
              if (valueIsFunction) {
                args[0] = value.call(this, index, self.html());
              }
              domManip(self, args, callback, ignored);
            });
          }
          if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) {
              fragment = first;
            }
            if (first || ignored) {
              scripts = jQuery.map(getAll(fragment, "script"), disableScript);
              hasScripts = scripts.length;
              for (; i < l; i++) {
                node = fragment;
                if (i !== iNoClone) {
                  node = jQuery.clone(node, true, true);
                  if (hasScripts) {
                    jQuery.merge(scripts, getAll(node, "script"));
                  }
                }
                callback.call(collection[i], node, i);
              }
              if (hasScripts) {
                doc = scripts[scripts.length - 1].ownerDocument;
                jQuery.map(scripts, restoreScript);
                for (i = 0; i < hasScripts; i++) {
                  node = scripts[i];
                  if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                    if (node.src && (node.type || "").toLowerCase() !== "module") {
                      if (jQuery._evalUrl && !node.noModule) {
                        jQuery._evalUrl(node.src, {
                          nonce: node.nonce || node.getAttribute("nonce")
                        }, doc);
                      }
                    } else {
                      DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                    }
                  }
                }
              }
            }
          }
          return collection;
        }
        function remove(elem, selector, keepData) {
          var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
          for (; (node = nodes[i]) != null; i++) {
            if (!keepData && node.nodeType === 1) {
              jQuery.cleanData(getAll(node));
            }
            if (node.parentNode) {
              if (keepData && isAttached(node)) {
                setGlobalEval(getAll(node, "script"));
              }
              node.parentNode.removeChild(node);
            }
          }
          return elem;
        }
        jQuery.extend({
          htmlPrefilter: function(html) {
            return html;
          },
          clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
              destElements = getAll(clone);
              srcElements = getAll(elem);
              for (i = 0, l = srcElements.length; i < l; i++) {
                fixInput(srcElements[i], destElements[i]);
              }
            }
            if (dataAndEvents) {
              if (deepDataAndEvents) {
                srcElements = srcElements || getAll(elem);
                destElements = destElements || getAll(clone);
                for (i = 0, l = srcElements.length; i < l; i++) {
                  cloneCopyEvent(srcElements[i], destElements[i]);
                }
              } else {
                cloneCopyEvent(elem, clone);
              }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
              setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            return clone;
          },
          cleanData: function(elems) {
            var data, elem, type, special = jQuery.event.special, i = 0;
            for (; (elem = elems[i]) !== void 0; i++) {
              if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                  if (data.events) {
                    for (type in data.events) {
                      if (special[type]) {
                        jQuery.event.remove(elem, type);
                      } else {
                        jQuery.removeEvent(elem, type, data.handle);
                      }
                    }
                  }
                  elem[dataPriv.expando] = void 0;
                }
                if (elem[dataUser.expando]) {
                  elem[dataUser.expando] = void 0;
                }
              }
            }
          }
        });
        jQuery.fn.extend({
          detach: function(selector) {
            return remove(this, selector, true);
          },
          remove: function(selector) {
            return remove(this, selector);
          },
          text: function(value) {
            return access(this, function(value2) {
              return value2 === void 0 ? jQuery.text(this) : this.empty().each(function() {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                  this.textContent = value2;
                }
              });
            }, null, value, arguments.length);
          },
          append: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.appendChild(elem);
              }
            });
          },
          prepend: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.insertBefore(elem, target.firstChild);
              }
            });
          },
          before: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this);
              }
            });
          },
          after: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this.nextSibling);
              }
            });
          },
          empty: function() {
            var elem, i = 0;
            for (; (elem = this[i]) != null; i++) {
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.textContent = "";
              }
            }
            return this;
          },
          clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
              return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
          },
          html: function(value) {
            return access(this, function(value2) {
              var elem = this[0] || {}, i = 0, l = this.length;
              if (value2 === void 0 && elem.nodeType === 1) {
                return elem.innerHTML;
              }
              if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
                value2 = jQuery.htmlPrefilter(value2);
                try {
                  for (; i < l; i++) {
                    elem = this[i] || {};
                    if (elem.nodeType === 1) {
                      jQuery.cleanData(getAll(elem, false));
                      elem.innerHTML = value2;
                    }
                  }
                  elem = 0;
                } catch (e) {
                }
              }
              if (elem) {
                this.empty().append(value2);
              }
            }, null, value, arguments.length);
          },
          replaceWith: function() {
            var ignored = [];
            return domManip(this, arguments, function(elem) {
              var parent = this.parentNode;
              if (jQuery.inArray(this, ignored) < 0) {
                jQuery.cleanData(getAll(this));
                if (parent) {
                  parent.replaceChild(elem, this);
                }
              }
            }, ignored);
          }
        });
        jQuery.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        }, function(name, original) {
          jQuery.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
            for (; i <= last; i++) {
              elems = i === last ? this : this.clone(true);
              jQuery(insert[i])[original](elems);
              push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
          };
        });
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
        var rcustomProp = /^--/;
        var getStyles = function(elem) {
          var view = elem.ownerDocument.defaultView;
          if (!view || !view.opener) {
            view = window2;
          }
          return view.getComputedStyle(elem);
        };
        var swap = function(elem, options, callback) {
          var ret, name, old = {};
          for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
          }
          ret = callback.call(elem);
          for (name in options) {
            elem.style[name] = old[name];
          }
          return ret;
        };
        var rboxStyle = new RegExp(cssExpand.join("|"), "i");
        var whitespace = "[\\x20\\t\\r\\n\\f]";
        var rtrimCSS = new RegExp(
          "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
          "g"
        );
        (function() {
          function computeStyleTests() {
            if (!div) {
              return;
            }
            container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window2.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container);
            div = null;
          }
          function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
          }
          var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
          if (!div.style) {
            return;
          }
          div.style.backgroundClip = "content-box";
          div.cloneNode(true).style.backgroundClip = "";
          support.clearCloneStyle = div.style.backgroundClip === "content-box";
          jQuery.extend(support, {
            boxSizingReliable: function() {
              computeStyleTests();
              return boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
              computeStyleTests();
              return pixelBoxStylesVal;
            },
            pixelPosition: function() {
              computeStyleTests();
              return pixelPositionVal;
            },
            reliableMarginLeft: function() {
              computeStyleTests();
              return reliableMarginLeftVal;
            },
            scrollboxSize: function() {
              computeStyleTests();
              return scrollboxSizeVal;
            },
            // Support: IE 9 - 11+, Edge 15 - 18+
            // IE/Edge misreport `getComputedStyle` of table rows with width/height
            // set in CSS while `offset*` properties report correct values.
            // Behavior in IE 9 is more subtle than in newer versions & it passes
            // some versions of this test; make sure not to make it pass there!
            //
            // Support: Firefox 70+
            // Only Firefox includes border widths
            // in computed dimensions. (gh-4529)
            reliableTrDimensions: function() {
              var table, tr, trChild, trStyle;
              if (reliableTrDimensionsVal == null) {
                table = document2.createElement("table");
                tr = document2.createElement("tr");
                trChild = document2.createElement("div");
                table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                tr.style.cssText = "border:1px solid";
                tr.style.height = "1px";
                trChild.style.height = "9px";
                trChild.style.display = "block";
                documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                trStyle = window2.getComputedStyle(tr);
                reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                documentElement.removeChild(table);
              }
              return reliableTrDimensionsVal;
            }
          });
        })();
        function curCSS(elem, name, computed) {
          var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
          computed = computed || getStyles(elem);
          if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
            if (isCustomProp && ret) {
              ret = ret.replace(rtrimCSS, "$1") || void 0;
            }
            if (ret === "" && !isAttached(elem)) {
              ret = jQuery.style(elem, name);
            }
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
              width = style.width;
              minWidth = style.minWidth;
              maxWidth = style.maxWidth;
              style.minWidth = style.maxWidth = style.width = ret;
              ret = computed.width;
              style.width = width;
              style.minWidth = minWidth;
              style.maxWidth = maxWidth;
            }
          }
          return ret !== void 0 ? (
            // Support: IE <=9 - 11 only
            // IE returns zIndex value as an integer.
            ret + ""
          ) : ret;
        }
        function addGetHookIf(conditionFn, hookFn) {
          return {
            get: function() {
              if (conditionFn()) {
                delete this.get;
                return;
              }
              return (this.get = hookFn).apply(this, arguments);
            }
          };
        }
        var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
        function vendorPropName(name) {
          var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
          while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) {
              return name;
            }
          }
        }
        function finalPropName(name) {
          var final = jQuery.cssProps[name] || vendorProps[name];
          if (final) {
            return final;
          }
          if (name in emptyStyle) {
            return name;
          }
          return vendorProps[name] = vendorPropName(name) || name;
        }
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
          letterSpacing: "0",
          fontWeight: "400"
        };
        function setPositiveNumber(_elem, value, subtract) {
          var matches = rcssNum.exec(value);
          return matches ? (
            // Guard against undefined "subtract", e.g., when used as in cssHooks
            Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px")
          ) : value;
        }
        function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
          var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0;
          if (box === (isBorderBox ? "border" : "content")) {
            return 0;
          }
          for (; i < 4; i += 2) {
            if (box === "margin") {
              delta += jQuery.css(elem, box + cssExpand[i], true, styles);
            }
            if (!isBorderBox) {
              delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
              if (box !== "padding") {
                delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              } else {
                extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              }
            } else {
              if (box === "content") {
                delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
              }
              if (box !== "margin") {
                delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              }
            }
          }
          if (!isBorderBox && computedVal >= 0) {
            delta += Math.max(0, Math.ceil(
              elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
              // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
              // Use an explicit zero to avoid NaN (gh-3964)
            )) || 0;
          }
          return delta;
        }
        function getWidthOrHeight(elem, dimension, extra) {
          var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
          if (rnumnonpx.test(val)) {
            if (!extra) {
              return val;
            }
            val = "auto";
          }
          if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
          // IE/Edge misreport `getComputedStyle` of table rows with width/height
          // set in CSS while `offset*` properties report correct values.
          // Interestingly, in some cases IE 9 doesn't suffer from this issue.
          !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
          // This happens for inline elements with no explicit setting (gh-3571)
          val === "auto" || // Support: Android <=4.1 - 4.3 only
          // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
          !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
          elem.getClientRects().length) {
            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) {
              val = elem[offsetProp];
            }
          }
          val = parseFloat(val) || 0;
          return val + boxModelAdjustment(
            elem,
            dimension,
            extra || (isBorderBox ? "border" : "content"),
            valueIsBorderBox,
            styles,
            // Provide the current computed size to request scroll gutter calculation (gh-3589)
            val
          ) + "px";
        }
        jQuery.extend({
          // Add in style property hooks for overriding the default
          // behavior of getting and setting a style property
          cssHooks: {
            opacity: {
              get: function(elem, computed) {
                if (computed) {
                  var ret = curCSS(elem, "opacity");
                  return ret === "" ? "1" : ret;
                }
              }
            }
          },
          // Don't automatically add "px" to these possibly-unitless properties
          cssNumber: {
            "animationIterationCount": true,
            "columnCount": true,
            "fillOpacity": true,
            "flexGrow": true,
            "flexShrink": true,
            "fontWeight": true,
            "gridArea": true,
            "gridColumn": true,
            "gridColumnEnd": true,
            "gridColumnStart": true,
            "gridRow": true,
            "gridRowEnd": true,
            "gridRowStart": true,
            "lineHeight": true,
            "opacity": true,
            "order": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
          },
          // Add in properties whose names you wish to fix before
          // setting or getting the value
          cssProps: {},
          // Get and set the style property on a DOM Node
          style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
              return;
            }
            var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (value !== void 0) {
              type = typeof value;
              if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                value = adjustCSS(elem, name, ret);
                type = "number";
              }
              if (value == null || value !== value) {
                return;
              }
              if (type === "number" && !isCustomProp) {
                value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
              }
              if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                style[name] = "inherit";
              }
              if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
                if (isCustomProp) {
                  style.setProperty(name, value);
                } else {
                  style[name] = value;
                }
              }
            } else {
              if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
                return ret;
              }
              return style[name];
            }
          },
          css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (hooks && "get" in hooks) {
              val = hooks.get(elem, true, extra);
            }
            if (val === void 0) {
              val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
              val = cssNormalTransform[name];
            }
            if (extra === "" || extra) {
              num = parseFloat(val);
              return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
          }
        });
        jQuery.each(["height", "width"], function(_i, dimension) {
          jQuery.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
              if (computed) {
                return rdisplayswap.test(jQuery.css(elem, "display")) && // Support: Safari 8+
                // Table columns in Safari have non-zero offsetWidth & zero
                // getBoundingClientRect().width unless display is changed.
                // Support: IE <=11 only
                // Running getBoundingClientRect on a disconnected node
                // in IE throws an error.
                (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                  return getWidthOrHeight(elem, dimension, extra);
                }) : getWidthOrHeight(elem, dimension, extra);
              }
            },
            set: function(elem, value, extra) {
              var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
                elem,
                dimension,
                extra,
                isBorderBox,
                styles
              ) : 0;
              if (isBorderBox && scrollboxSizeBuggy) {
                subtract -= Math.ceil(
                  elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
                );
              }
              if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                elem.style[dimension] = value;
                value = jQuery.css(elem, dimension);
              }
              return setPositiveNumber(elem, value, subtract);
            }
          };
        });
        jQuery.cssHooks.marginLeft = addGetHookIf(
          support.reliableMarginLeft,
          function(elem, computed) {
            if (computed) {
              return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
                return elem.getBoundingClientRect().left;
              })) + "px";
            }
          }
        );
        jQuery.each({
          margin: "",
          padding: "",
          border: "Width"
        }, function(prefix, suffix) {
          jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
              var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
              for (; i < 4; i++) {
                expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
              }
              return expanded;
            }
          };
          if (prefix !== "margin") {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
          }
        });
        jQuery.fn.extend({
          css: function(name, value) {
            return access(this, function(elem, name2, value2) {
              var styles, len, map = {}, i = 0;
              if (Array.isArray(name2)) {
                styles = getStyles(elem);
                len = name2.length;
                for (; i < len; i++) {
                  map[name2[i]] = jQuery.css(elem, name2[i], false, styles);
                }
                return map;
              }
              return value2 !== void 0 ? jQuery.style(elem, name2, value2) : jQuery.css(elem, name2);
            }, name, value, arguments.length > 1);
          }
        });
        function Tween(elem, options, prop, end, easing) {
          return new Tween.prototype.init(elem, options, prop, end, easing);
        }
        jQuery.Tween = Tween;
        Tween.prototype = {
          constructor: Tween,
          init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
          },
          cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
          },
          run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
              this.pos = eased = jQuery.easing[this.easing](
                percent,
                this.options.duration * percent,
                0,
                1,
                this.options.duration
              );
            } else {
              this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
              this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
              hooks.set(this);
            } else {
              Tween.propHooks._default.set(this);
            }
            return this;
          }
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
          _default: {
            get: function(tween) {
              var result;
              if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                return tween.elem[tween.prop];
              }
              result = jQuery.css(tween.elem, tween.prop, "");
              return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
              if (jQuery.fx.step[tween.prop]) {
                jQuery.fx.step[tween.prop](tween);
              } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
                jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
              } else {
                tween.elem[tween.prop] = tween.now;
              }
            }
          }
        };
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
          set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
              tween.elem[tween.prop] = tween.now;
            }
          }
        };
        jQuery.easing = {
          linear: function(p) {
            return p;
          },
          swing: function(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
          },
          _default: "swing"
        };
        jQuery.fx = Tween.prototype.init;
        jQuery.fx.step = {};
        var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
        function schedule() {
          if (inProgress) {
            if (document2.hidden === false && window2.requestAnimationFrame) {
              window2.requestAnimationFrame(schedule);
            } else {
              window2.setTimeout(schedule, jQuery.fx.interval);
            }
            jQuery.fx.tick();
          }
        }
        function createFxNow() {
          window2.setTimeout(function() {
            fxNow = void 0;
          });
          return fxNow = Date.now();
        }
        function genFx(type, includeWidth) {
          var which, i = 0, attrs = { height: type };
          includeWidth = includeWidth ? 1 : 0;
          for (; i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
          }
          if (includeWidth) {
            attrs.opacity = attrs.width = type;
          }
          return attrs;
        }
        function createTween(value, prop, animation) {
          var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
          for (; index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) {
              return tween;
            }
          }
        }
        function defaultPrefilter(elem, props, opts) {
          var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
          if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
              hooks.unqueued = 0;
              oldfire = hooks.empty.fire;
              hooks.empty.fire = function() {
                if (!hooks.unqueued) {
                  oldfire();
                }
              };
            }
            hooks.unqueued++;
            anim.always(function() {
              anim.always(function() {
                hooks.unqueued--;
                if (!jQuery.queue(elem, "fx").length) {
                  hooks.empty.fire();
                }
              });
            });
          }
          for (prop in props) {
            value = props[prop];
            if (rfxtypes.test(value)) {
              delete props[prop];
              toggle = toggle || value === "toggle";
              if (value === (hidden ? "hide" : "show")) {
                if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                  hidden = true;
                } else {
                  continue;
                }
              }
              orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
          }
          propTween = !jQuery.isEmptyObject(props);
          if (!propTween && jQuery.isEmptyObject(orig)) {
            return;
          }
          if (isBox && elem.nodeType === 1) {
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) {
              restoreDisplay = dataPriv.get(elem, "display");
            }
            display = jQuery.css(elem, "display");
            if (display === "none") {
              if (restoreDisplay) {
                display = restoreDisplay;
              } else {
                showHide([elem], true);
                restoreDisplay = elem.style.display || restoreDisplay;
                display = jQuery.css(elem, "display");
                showHide([elem]);
              }
            }
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
              if (jQuery.css(elem, "float") === "none") {
                if (!propTween) {
                  anim.done(function() {
                    style.display = restoreDisplay;
                  });
                  if (restoreDisplay == null) {
                    display = style.display;
                    restoreDisplay = display === "none" ? "" : display;
                  }
                }
                style.display = "inline-block";
              }
            }
          }
          if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
              style.overflow = opts.overflow[0];
              style.overflowX = opts.overflow[1];
              style.overflowY = opts.overflow[2];
            });
          }
          propTween = false;
          for (prop in orig) {
            if (!propTween) {
              if (dataShow) {
                if ("hidden" in dataShow) {
                  hidden = dataShow.hidden;
                }
              } else {
                dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
              }
              if (toggle) {
                dataShow.hidden = !hidden;
              }
              if (hidden) {
                showHide([elem], true);
              }
              anim.done(function() {
                if (!hidden) {
                  showHide([elem]);
                }
                dataPriv.remove(elem, "fxshow");
                for (prop in orig) {
                  jQuery.style(elem, prop, orig[prop]);
                }
              });
            }
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
              dataShow[prop] = propTween.start;
              if (hidden) {
                propTween.end = propTween.start;
                propTween.start = 0;
              }
            }
          }
        }
        function propFilter(props, specialEasing) {
          var index, name, easing, value, hooks;
          for (index in props) {
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
              easing = value[1];
              value = props[index] = value[0];
            }
            if (index !== name) {
              props[name] = value;
              delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
              value = hooks.expand(value);
              delete props[name];
              for (index in value) {
                if (!(index in props)) {
                  props[index] = value[index];
                  specialEasing[index] = easing;
                }
              }
            } else {
              specialEasing[name] = easing;
            }
          }
        }
        function Animation(elem, properties, options) {
          var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
            delete tick.elem;
          }), tick = function() {
            if (stopped) {
              return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(percent);
            }
            deferred.notifyWith(elem, [animation, percent, remaining]);
            if (percent < 1 && length2) {
              return remaining;
            }
            if (!length2) {
              deferred.notifyWith(elem, [animation, 1, 0]);
            }
            deferred.resolveWith(elem, [animation]);
            return false;
          }, animation = deferred.promise({
            elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
              specialEasing: {},
              easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
              var tween = jQuery.Tween(
                elem,
                animation.opts,
                prop,
                end,
                animation.opts.specialEasing[prop] || animation.opts.easing
              );
              animation.tweens.push(tween);
              return tween;
            },
            stop: function(gotoEnd) {
              var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
              if (stopped) {
                return this;
              }
              stopped = true;
              for (; index2 < length2; index2++) {
                animation.tweens[index2].run(1);
              }
              if (gotoEnd) {
                deferred.notifyWith(elem, [animation, 1, 0]);
                deferred.resolveWith(elem, [animation, gotoEnd]);
              } else {
                deferred.rejectWith(elem, [animation, gotoEnd]);
              }
              return this;
            }
          }), props = animation.props;
          propFilter(props, animation.opts.specialEasing);
          for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
              if (isFunction(result.stop)) {
                jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
              }
              return result;
            }
          }
          jQuery.map(props, createTween, animation);
          if (isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
          }
          animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
          jQuery.fx.timer(
            jQuery.extend(tick, {
              elem,
              anim: animation,
              queue: animation.opts.queue
            })
          );
          return animation;
        }
        jQuery.Animation = jQuery.extend(Animation, {
          tweeners: {
            "*": [function(prop, value) {
              var tween = this.createTween(prop, value);
              adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
              return tween;
            }]
          },
          tweener: function(props, callback) {
            if (isFunction(props)) {
              callback = props;
              props = ["*"];
            } else {
              props = props.match(rnothtmlwhite);
            }
            var prop, index = 0, length = props.length;
            for (; index < length; index++) {
              prop = props[index];
              Animation.tweeners[prop] = Animation.tweeners[prop] || [];
              Animation.tweeners[prop].unshift(callback);
            }
          },
          prefilters: [defaultPrefilter],
          prefilter: function(callback, prepend) {
            if (prepend) {
              Animation.prefilters.unshift(callback);
            } else {
              Animation.prefilters.push(callback);
            }
          }
        });
        jQuery.speed = function(speed, easing, fn) {
          var opt2 = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
          };
          if (jQuery.fx.off) {
            opt2.duration = 0;
          } else {
            if (typeof opt2.duration !== "number") {
              if (opt2.duration in jQuery.fx.speeds) {
                opt2.duration = jQuery.fx.speeds[opt2.duration];
              } else {
                opt2.duration = jQuery.fx.speeds._default;
              }
            }
          }
          if (opt2.queue == null || opt2.queue === true) {
            opt2.queue = "fx";
          }
          opt2.old = opt2.complete;
          opt2.complete = function() {
            if (isFunction(opt2.old)) {
              opt2.old.call(this);
            }
            if (opt2.queue) {
              jQuery.dequeue(this, opt2.queue);
            }
          };
          return opt2;
        };
        jQuery.fn.extend({
          fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
          },
          animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
              var anim = Animation(this, jQuery.extend({}, prop), optall);
              if (empty || dataPriv.get(this, "finish")) {
                anim.stop(true);
              }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
          },
          stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
              var stop = hooks.stop;
              delete hooks.stop;
              stop(gotoEnd);
            };
            if (typeof type !== "string") {
              gotoEnd = clearQueue;
              clearQueue = type;
              type = void 0;
            }
            if (clearQueue) {
              this.queue(type || "fx", []);
            }
            return this.each(function() {
              var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
              if (index) {
                if (data[index] && data[index].stop) {
                  stopQueue(data[index]);
                }
              } else {
                for (index in data) {
                  if (data[index] && data[index].stop && rrun.test(index)) {
                    stopQueue(data[index]);
                  }
                }
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                  timers[index].anim.stop(gotoEnd);
                  dequeue = false;
                  timers.splice(index, 1);
                }
              }
              if (dequeue || !gotoEnd) {
                jQuery.dequeue(this, type);
              }
            });
          },
          finish: function(type) {
            if (type !== false) {
              type = type || "fx";
            }
            return this.each(function() {
              var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
              data.finish = true;
              jQuery.queue(this, type, []);
              if (hooks && hooks.stop) {
                hooks.stop.call(this, true);
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && timers[index].queue === type) {
                  timers[index].anim.stop(true);
                  timers.splice(index, 1);
                }
              }
              for (index = 0; index < length; index++) {
                if (queue[index] && queue[index].finish) {
                  queue[index].finish.call(this);
                }
              }
              delete data.finish;
            });
          }
        });
        jQuery.each(["toggle", "show", "hide"], function(_i, name) {
          var cssFn = jQuery.fn[name];
          jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
          };
        });
        jQuery.each({
          slideDown: genFx("show"),
          slideUp: genFx("hide"),
          slideToggle: genFx("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" }
        }, function(name, props) {
          jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
          };
        });
        jQuery.timers = [];
        jQuery.fx.tick = function() {
          var timer, i = 0, timers = jQuery.timers;
          fxNow = Date.now();
          for (; i < timers.length; i++) {
            timer = timers[i];
            if (!timer() && timers[i] === timer) {
              timers.splice(i--, 1);
            }
          }
          if (!timers.length) {
            jQuery.fx.stop();
          }
          fxNow = void 0;
        };
        jQuery.fx.timer = function(timer) {
          jQuery.timers.push(timer);
          jQuery.fx.start();
        };
        jQuery.fx.interval = 13;
        jQuery.fx.start = function() {
          if (inProgress) {
            return;
          }
          inProgress = true;
          schedule();
        };
        jQuery.fx.stop = function() {
          inProgress = null;
        };
        jQuery.fx.speeds = {
          slow: 600,
          fast: 200,
          // Default speed
          _default: 400
        };
        jQuery.fn.delay = function(time, type) {
          time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
          type = type || "fx";
          return this.queue(type, function(next, hooks) {
            var timeout = window2.setTimeout(next, time);
            hooks.stop = function() {
              window2.clearTimeout(timeout);
            };
          });
        };
        (function() {
          var input = document2.createElement("input"), select = document2.createElement("select"), opt2 = select.appendChild(document2.createElement("option"));
          input.type = "checkbox";
          support.checkOn = input.value !== "";
          support.optSelected = opt2.selected;
          input = document2.createElement("input");
          input.value = "t";
          input.type = "radio";
          support.radioValue = input.value === "t";
        })();
        var boolHook, attrHandle = jQuery.expr.attrHandle;
        jQuery.fn.extend({
          attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
          },
          removeAttr: function(name) {
            return this.each(function() {
              jQuery.removeAttr(this, name);
            });
          }
        });
        jQuery.extend({
          attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (typeof elem.getAttribute === "undefined") {
              return jQuery.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
              hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0);
            }
            if (value !== void 0) {
              if (value === null) {
                jQuery.removeAttr(elem, name);
                return;
              }
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              elem.setAttribute(name, value + "");
              return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            ret = jQuery.find.attr(elem, name);
            return ret == null ? void 0 : ret;
          },
          attrHooks: {
            type: {
              set: function(elem, value) {
                if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                  var val = elem.value;
                  elem.setAttribute("type", value);
                  if (val) {
                    elem.value = val;
                  }
                  return value;
                }
              }
            }
          },
          removeAttr: function(elem, value) {
            var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) {
              while (name = attrNames[i++]) {
                elem.removeAttribute(name);
              }
            }
          }
        });
        boolHook = {
          set: function(elem, value, name) {
            if (value === false) {
              jQuery.removeAttr(elem, name);
            } else {
              elem.setAttribute(name, name);
            }
            return name;
          }
        };
        jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name) {
          var getter = attrHandle[name] || jQuery.find.attr;
          attrHandle[name] = function(elem, name2, isXML) {
            var ret, handle, lowercaseName = name2.toLowerCase();
            if (!isXML) {
              handle = attrHandle[lowercaseName];
              attrHandle[lowercaseName] = ret;
              ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
              attrHandle[lowercaseName] = handle;
            }
            return ret;
          };
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
        jQuery.fn.extend({
          prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
          },
          removeProp: function(name) {
            return this.each(function() {
              delete this[jQuery.propFix[name] || name];
            });
          }
        });
        jQuery.extend({
          prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
              name = jQuery.propFix[name] || name;
              hooks = jQuery.propHooks[name];
            }
            if (value !== void 0) {
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            return elem[name];
          },
          propHooks: {
            tabIndex: {
              get: function(elem) {
                var tabindex = jQuery.find.attr(elem, "tabindex");
                if (tabindex) {
                  return parseInt(tabindex, 10);
                }
                if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                  return 0;
                }
                return -1;
              }
            }
          },
          propFix: {
            "for": "htmlFor",
            "class": "className"
          }
        });
        if (!support.optSelected) {
          jQuery.propHooks.selected = {
            get: function(elem) {
              var parent = elem.parentNode;
              if (parent && parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
              return null;
            },
            set: function(elem) {
              var parent = elem.parentNode;
              if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) {
                  parent.parentNode.selectedIndex;
                }
              }
            }
          };
        }
        jQuery.each([
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable"
        ], function() {
          jQuery.propFix[this.toLowerCase()] = this;
        });
        function stripAndCollapse(value) {
          var tokens = value.match(rnothtmlwhite) || [];
          return tokens.join(" ");
        }
        function getClass(elem) {
          return elem.getAttribute && elem.getAttribute("class") || "";
        }
        function classesToArray(value) {
          if (Array.isArray(value)) {
            return value;
          }
          if (typeof value === "string") {
            return value.match(rnothtmlwhite) || [];
          }
          return [];
        }
        jQuery.fn.extend({
          addClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) {
              return this.each(function(j) {
                jQuery(this).addClass(value.call(this, j, getClass(this)));
              });
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i = 0; i < classNames.length; i++) {
                    className = classNames[i];
                    if (cur.indexOf(" " + className + " ") < 0) {
                      cur += className + " ";
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          removeClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) {
              return this.each(function(j) {
                jQuery(this).removeClass(value.call(this, j, getClass(this)));
              });
            }
            if (!arguments.length) {
              return this.attr("class", "");
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i = 0; i < classNames.length; i++) {
                    className = classNames[i];
                    while (cur.indexOf(" " + className + " ") > -1) {
                      cur = cur.replace(" " + className + " ", " ");
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          toggleClass: function(value, stateVal) {
            var classNames, className, i, self, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            if (isFunction(value)) {
              return this.each(function(i2) {
                jQuery(this).toggleClass(
                  value.call(this, i2, getClass(this), stateVal),
                  stateVal
                );
              });
            }
            if (typeof stateVal === "boolean" && isValidValue) {
              return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            classNames = classesToArray(value);
            return this.each(function() {
              if (isValidValue) {
                self = jQuery(this);
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  if (self.hasClass(className)) {
                    self.removeClass(className);
                  } else {
                    self.addClass(className);
                  }
                }
              } else if (value === void 0 || type === "boolean") {
                className = getClass(this);
                if (className) {
                  dataPriv.set(this, "__className__", className);
                }
                if (this.setAttribute) {
                  this.setAttribute(
                    "class",
                    className || value === false ? "" : dataPriv.get(this, "__className__") || ""
                  );
                }
              }
            });
          },
          hasClass: function(selector) {
            var className, elem, i = 0;
            className = " " + selector + " ";
            while (elem = this[i++]) {
              if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                return true;
              }
            }
            return false;
          }
        });
        var rreturn = /\r/g;
        jQuery.fn.extend({
          val: function(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
              if (elem) {
                hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                  return ret;
                }
                ret = elem.value;
                if (typeof ret === "string") {
                  return ret.replace(rreturn, "");
                }
                return ret == null ? "" : ret;
              }
              return;
            }
            valueIsFunction = isFunction(value);
            return this.each(function(i) {
              var val;
              if (this.nodeType !== 1) {
                return;
              }
              if (valueIsFunction) {
                val = value.call(this, i, jQuery(this).val());
              } else {
                val = value;
              }
              if (val == null) {
                val = "";
              } else if (typeof val === "number") {
                val += "";
              } else if (Array.isArray(val)) {
                val = jQuery.map(val, function(value2) {
                  return value2 == null ? "" : value2 + "";
                });
              }
              hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
              if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
                this.value = val;
              }
            });
          }
        });
        jQuery.extend({
          valHooks: {
            option: {
              get: function(elem) {
                var val = jQuery.find.attr(elem, "value");
                return val != null ? val : (
                  // Support: IE <=10 - 11 only
                  // option.text throws exceptions (trac-14686, trac-14858)
                  // Strip and collapse whitespace
                  // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                  stripAndCollapse(jQuery.text(elem))
                );
              }
            },
            select: {
              get: function(elem) {
                var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                if (index < 0) {
                  i = max;
                } else {
                  i = one ? index : 0;
                }
                for (; i < max; i++) {
                  option = options[i];
                  if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                  !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                    value = jQuery(option).val();
                    if (one) {
                      return value;
                    }
                    values.push(value);
                  }
                }
                return values;
              },
              set: function(elem, value) {
                var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                while (i--) {
                  option = options[i];
                  if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                    optionSet = true;
                  }
                }
                if (!optionSet) {
                  elem.selectedIndex = -1;
                }
                return values;
              }
            }
          }
        });
        jQuery.each(["radio", "checkbox"], function() {
          jQuery.valHooks[this] = {
            set: function(elem, value) {
              if (Array.isArray(value)) {
                return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
              }
            }
          };
          if (!support.checkOn) {
            jQuery.valHooks[this].get = function(elem) {
              return elem.getAttribute("value") === null ? "on" : elem.value;
            };
          }
        });
        support.focusin = "onfocusin" in window2;
        var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
          e.stopPropagation();
        };
        jQuery.extend(jQuery.event, {
          trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document2;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
              return;
            }
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
              return;
            }
            if (type.indexOf(".") > -1) {
              namespaces = type.split(".");
              type = namespaces.shift();
              namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = void 0;
            if (!event.target) {
              event.target = elem;
            }
            data = data == null ? [event] : jQuery.makeArray(data, [event]);
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
              return;
            }
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
              bubbleType = special.delegateType || type;
              if (!rfocusMorph.test(bubbleType + type)) {
                cur = cur.parentNode;
              }
              for (; cur; cur = cur.parentNode) {
                eventPath.push(cur);
                tmp = cur;
              }
              if (tmp === (elem.ownerDocument || document2)) {
                eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
              }
            }
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
              lastElement = cur;
              event.type = i > 1 ? bubbleType : special.bindType || type;
              handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
              if (handle) {
                handle.apply(cur, data);
              }
              handle = ontype && cur[ontype];
              if (handle && handle.apply && acceptData(cur)) {
                event.result = handle.apply(cur, data);
                if (event.result === false) {
                  event.preventDefault();
                }
              }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
              if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                  tmp = elem[ontype];
                  if (tmp) {
                    elem[ontype] = null;
                  }
                  jQuery.event.triggered = type;
                  if (event.isPropagationStopped()) {
                    lastElement.addEventListener(type, stopPropagationCallback);
                  }
                  elem[type]();
                  if (event.isPropagationStopped()) {
                    lastElement.removeEventListener(type, stopPropagationCallback);
                  }
                  jQuery.event.triggered = void 0;
                  if (tmp) {
                    elem[ontype] = tmp;
                  }
                }
              }
            }
            return event.result;
          },
          // Piggyback on a donor event to simulate a different one
          // Used only for `focus(in | out)` events
          simulate: function(type, elem, event) {
            var e = jQuery.extend(
              new jQuery.Event(),
              event,
              {
                type,
                isSimulated: true
              }
            );
            jQuery.event.trigger(e, null, elem);
          }
        });
        jQuery.fn.extend({
          trigger: function(type, data) {
            return this.each(function() {
              jQuery.event.trigger(type, data, this);
            });
          },
          triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
              return jQuery.event.trigger(type, data, elem, true);
            }
          }
        });
        if (!support.focusin) {
          jQuery.each({ focus: "focusin", blur: "focusout" }, function(orig, fix) {
            var handler = function(event) {
              jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
            };
            jQuery.event.special[fix] = {
              setup: function() {
                var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix);
                if (!attaches) {
                  doc.addEventListener(orig, handler, true);
                }
                dataPriv.access(doc, fix, (attaches || 0) + 1);
              },
              teardown: function() {
                var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix) - 1;
                if (!attaches) {
                  doc.removeEventListener(orig, handler, true);
                  dataPriv.remove(doc, fix);
                } else {
                  dataPriv.access(doc, fix, attaches);
                }
              }
            };
          });
        }
        var location2 = window2.location;
        var nonce = { guid: Date.now() };
        var rquery = /\?/;
        jQuery.parseXML = function(data) {
          var xml, parserErrorElem;
          if (!data || typeof data !== "string") {
            return null;
          }
          try {
            xml = new window2.DOMParser().parseFromString(data, "text/xml");
          } catch (e) {
          }
          parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
          if (!xml || parserErrorElem) {
            jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
              return el.textContent;
            }).join("\n") : data));
          }
          return xml;
        };
        var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
        function buildParams(prefix, obj, traditional, add) {
          var name;
          if (Array.isArray(obj)) {
            jQuery.each(obj, function(i, v) {
              if (traditional || rbracket.test(prefix)) {
                add(prefix, v);
              } else {
                buildParams(
                  prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                  v,
                  traditional,
                  add
                );
              }
            });
          } else if (!traditional && toType(obj) === "object") {
            for (name in obj) {
              buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
          } else {
            add(prefix, obj);
          }
        }
        jQuery.param = function(a, traditional) {
          var prefix, s = [], add = function(key, valueOrFunction) {
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
          };
          if (a == null) {
            return "";
          }
          if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
            jQuery.each(a, function() {
              add(this.name, this.value);
            });
          } else {
            for (prefix in a) {
              buildParams(prefix, a[prefix], traditional, add);
            }
          }
          return s.join("&");
        };
        jQuery.fn.extend({
          serialize: function() {
            return jQuery.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var elements = jQuery.prop(this, "elements");
              return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
              var type = this.type;
              return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(_i, elem) {
              var val = jQuery(this).val();
              if (val == null) {
                return null;
              }
              if (Array.isArray(val)) {
                return jQuery.map(val, function(val2) {
                  return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
                });
              }
              return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
            }).get();
          }
        });
        var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
        originAnchor.href = location2.href;
        function addToPrefiltersOrTransports(structure) {
          return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
              func = dataTypeExpression;
              dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) {
              while (dataType = dataTypes[i++]) {
                if (dataType[0] === "+") {
                  dataType = dataType.slice(1) || "*";
                  (structure[dataType] = structure[dataType] || []).unshift(func);
                } else {
                  (structure[dataType] = structure[dataType] || []).push(func);
                }
              }
            }
          };
        }
        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
          var inspected = {}, seekingTransport = structure === transports;
          function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
              var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
              if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                options.dataTypes.unshift(dataTypeOrTransport);
                inspect(dataTypeOrTransport);
                return false;
              } else if (seekingTransport) {
                return !(selected = dataTypeOrTransport);
              }
            });
            return selected;
          }
          return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
        }
        function ajaxExtend(target, src) {
          var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
          for (key in src) {
            if (src[key] !== void 0) {
              (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
          }
          if (deep) {
            jQuery.extend(true, target, deep);
          }
          return target;
        }
        function ajaxHandleResponses(s, jqXHR, responses) {
          var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
          while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === void 0) {
              ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
          }
          if (ct) {
            for (type in contents) {
              if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
              }
            }
          }
          if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
          } else {
            for (type in responses) {
              if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                finalDataType = type;
                break;
              }
              if (!firstDataType) {
                firstDataType = type;
              }
            }
            finalDataType = finalDataType || firstDataType;
          }
          if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
              dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
          }
        }
        function ajaxConvert(s, response, jqXHR, isSuccess) {
          var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
          if (dataTypes[1]) {
            for (conv in s.converters) {
              converters[conv.toLowerCase()] = s.converters[conv];
            }
          }
          current = dataTypes.shift();
          while (current) {
            if (s.responseFields[current]) {
              jqXHR[s.responseFields[current]] = response;
            }
            if (!prev && isSuccess && s.dataFilter) {
              response = s.dataFilter(response, s.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
              if (current === "*") {
                current = prev;
              } else if (prev !== "*" && prev !== current) {
                conv = converters[prev + " " + current] || converters["* " + current];
                if (!conv) {
                  for (conv2 in converters) {
                    tmp = conv2.split(" ");
                    if (tmp[1] === current) {
                      conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                      if (conv) {
                        if (conv === true) {
                          conv = converters[conv2];
                        } else if (converters[conv2] !== true) {
                          current = tmp[0];
                          dataTypes.unshift(tmp[1]);
                        }
                        break;
                      }
                    }
                  }
                }
                if (conv !== true) {
                  if (conv && s.throws) {
                    response = conv(response);
                  } else {
                    try {
                      response = conv(response);
                    } catch (e) {
                      return {
                        state: "parsererror",
                        error: conv ? e : "No conversion from " + prev + " to " + current
                      };
                    }
                  }
                }
              }
            }
          }
          return { state: "success", data: response };
        }
        jQuery.extend({
          // Counter for holding the number of active queries
          active: 0,
          // Last-Modified header cache for next request
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: location2.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location2.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
            timeout: 0,
            data: null,
            dataType: null,
            username: null,
            password: null,
            cache: null,
            throws: false,
            traditional: false,
            headers: {},
            */
            accepts: {
              "*": allTypes,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {
              // Convert anything to text
              "* text": String,
              // Text to html (true = no transformation)
              "text html": true,
              // Evaluate text as a json expression
              "text json": JSON.parse,
              // Parse text as xml
              "text xml": jQuery.parseXML
            },
            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
              url: true,
              context: true
            }
          },
          // Creates a full fledged settings object into target
          // with both ajaxSettings and settings fields.
          // If target is omitted, writes into ajaxSettings.
          ajaxSetup: function(target, settings) {
            return settings ? (
              // Building a settings object
              ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings)
            ) : (
              // Extending ajaxSettings
              ajaxExtend(jQuery.ajaxSettings, target)
            );
          },
          ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
          ajaxTransport: addToPrefiltersOrTransports(transports),
          // Main method
          ajax: function(url, options) {
            if (typeof url === "object") {
              options = url;
              url = void 0;
            }
            options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
              readyState: 0,
              // Builds headers hashtable if needed
              getResponseHeader: function(key) {
                var match;
                if (completed2) {
                  if (!responseHeaders) {
                    responseHeaders = {};
                    while (match = rheaders.exec(responseHeadersString)) {
                      responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                    }
                  }
                  match = responseHeaders[key.toLowerCase() + " "];
                }
                return match == null ? null : match.join(", ");
              },
              // Raw string
              getAllResponseHeaders: function() {
                return completed2 ? responseHeadersString : null;
              },
              // Caches the header
              setRequestHeader: function(name, value) {
                if (completed2 == null) {
                  name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                  requestHeaders[name] = value;
                }
                return this;
              },
              // Overrides response content-type header
              overrideMimeType: function(type) {
                if (completed2 == null) {
                  s.mimeType = type;
                }
                return this;
              },
              // Status-dependent callbacks
              statusCode: function(map) {
                var code;
                if (map) {
                  if (completed2) {
                    jqXHR.always(map[jqXHR.status]);
                  } else {
                    for (code in map) {
                      statusCode[code] = [statusCode[code], map[code]];
                    }
                  }
                }
                return this;
              },
              // Cancel the request
              abort: function(statusText) {
                var finalText = statusText || strAbort;
                if (transport) {
                  transport.abort(finalText);
                }
                done(0, finalText);
                return this;
              }
            };
            deferred.promise(jqXHR);
            s.url = ((url || s.url || location2.href) + "").replace(rprotocol, location2.protocol + "//");
            s.type = options.method || options.type || s.method || s.type;
            s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
            if (s.crossDomain == null) {
              urlAnchor = document2.createElement("a");
              try {
                urlAnchor.href = s.url;
                urlAnchor.href = urlAnchor.href;
                s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
              } catch (e) {
                s.crossDomain = true;
              }
            }
            if (s.data && s.processData && typeof s.data !== "string") {
              s.data = jQuery.param(s.data, s.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (completed2) {
              return jqXHR;
            }
            fireGlobals = jQuery.event && s.global;
            if (fireGlobals && jQuery.active++ === 0) {
              jQuery.event.trigger("ajaxStart");
            }
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            cacheURL = s.url.replace(rhash, "");
            if (!s.hasContent) {
              uncached = s.url.slice(cacheURL.length);
              if (s.data && (s.processData || typeof s.data === "string")) {
                cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                delete s.data;
              }
              if (s.cache === false) {
                cacheURL = cacheURL.replace(rantiCache, "$1");
                uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
              }
              s.url = cacheURL + uncached;
            } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
              s.data = s.data.replace(r20, "+");
            }
            if (s.ifModified) {
              if (jQuery.lastModified[cacheURL]) {
                jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
              }
              if (jQuery.etag[cacheURL]) {
                jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
              }
            }
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
              jqXHR.setRequestHeader("Content-Type", s.contentType);
            }
            jqXHR.setRequestHeader(
              "Accept",
              s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]
            );
            for (i in s.headers) {
              jqXHR.setRequestHeader(i, s.headers[i]);
            }
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
              return jqXHR.abort();
            }
            strAbort = "abort";
            completeDeferred.add(s.complete);
            jqXHR.done(s.success);
            jqXHR.fail(s.error);
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            if (!transport) {
              done(-1, "No Transport");
            } else {
              jqXHR.readyState = 1;
              if (fireGlobals) {
                globalEventContext.trigger("ajaxSend", [jqXHR, s]);
              }
              if (completed2) {
                return jqXHR;
              }
              if (s.async && s.timeout > 0) {
                timeoutTimer = window2.setTimeout(function() {
                  jqXHR.abort("timeout");
                }, s.timeout);
              }
              try {
                completed2 = false;
                transport.send(requestHeaders, done);
              } catch (e) {
                if (completed2) {
                  throw e;
                }
                done(-1, e);
              }
            }
            function done(status, nativeStatusText, responses, headers) {
              var isSuccess, success, error, response, modified, statusText = nativeStatusText;
              if (completed2) {
                return;
              }
              completed2 = true;
              if (timeoutTimer) {
                window2.clearTimeout(timeoutTimer);
              }
              transport = void 0;
              responseHeadersString = headers || "";
              jqXHR.readyState = status > 0 ? 4 : 0;
              isSuccess = status >= 200 && status < 300 || status === 304;
              if (responses) {
                response = ajaxHandleResponses(s, jqXHR, responses);
              }
              if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) {
                s.converters["text script"] = function() {
                };
              }
              response = ajaxConvert(s, response, jqXHR, isSuccess);
              if (isSuccess) {
                if (s.ifModified) {
                  modified = jqXHR.getResponseHeader("Last-Modified");
                  if (modified) {
                    jQuery.lastModified[cacheURL] = modified;
                  }
                  modified = jqXHR.getResponseHeader("etag");
                  if (modified) {
                    jQuery.etag[cacheURL] = modified;
                  }
                }
                if (status === 204 || s.type === "HEAD") {
                  statusText = "nocontent";
                } else if (status === 304) {
                  statusText = "notmodified";
                } else {
                  statusText = response.state;
                  success = response.data;
                  error = response.error;
                  isSuccess = !error;
                }
              } else {
                error = statusText;
                if (status || !statusText) {
                  statusText = "error";
                  if (status < 0) {
                    status = 0;
                  }
                }
              }
              jqXHR.status = status;
              jqXHR.statusText = (nativeStatusText || statusText) + "";
              if (isSuccess) {
                deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
              } else {
                deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
              }
              jqXHR.statusCode(statusCode);
              statusCode = void 0;
              if (fireGlobals) {
                globalEventContext.trigger(
                  isSuccess ? "ajaxSuccess" : "ajaxError",
                  [jqXHR, s, isSuccess ? success : error]
                );
              }
              completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
              if (fireGlobals) {
                globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                if (!--jQuery.active) {
                  jQuery.event.trigger("ajaxStop");
                }
              }
            }
            return jqXHR;
          },
          getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
          },
          getScript: function(url, callback) {
            return jQuery.get(url, void 0, callback, "script");
          }
        });
        jQuery.each(["get", "post"], function(_i, method) {
          jQuery[method] = function(url, data, callback, type) {
            if (isFunction(data)) {
              type = type || callback;
              callback = data;
              data = void 0;
            }
            return jQuery.ajax(jQuery.extend({
              url,
              type: method,
              dataType: type,
              data,
              success: callback
            }, jQuery.isPlainObject(url) && url));
          };
        });
        jQuery.ajaxPrefilter(function(s) {
          var i;
          for (i in s.headers) {
            if (i.toLowerCase() === "content-type") {
              s.contentType = s.headers[i] || "";
            }
          }
        });
        jQuery._evalUrl = function(url, options, doc) {
          return jQuery.ajax({
            url,
            // Make this explicit, since user can override this through ajaxSetup (trac-11264)
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            // Only evaluate the response if it is successful (gh-4126)
            // dataFilter is not invoked for failure responses, so using it instead
            // of the default converter is kludgy but it works.
            converters: {
              "text script": function() {
              }
            },
            dataFilter: function(response) {
              jQuery.globalEval(response, options, doc);
            }
          });
        };
        jQuery.fn.extend({
          wrapAll: function(html) {
            var wrap;
            if (this[0]) {
              if (isFunction(html)) {
                html = html.call(this[0]);
              }
              wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
              if (this[0].parentNode) {
                wrap.insertBefore(this[0]);
              }
              wrap.map(function() {
                var elem = this;
                while (elem.firstElementChild) {
                  elem = elem.firstElementChild;
                }
                return elem;
              }).append(this);
            }
            return this;
          },
          wrapInner: function(html) {
            if (isFunction(html)) {
              return this.each(function(i) {
                jQuery(this).wrapInner(html.call(this, i));
              });
            }
            return this.each(function() {
              var self = jQuery(this), contents = self.contents();
              if (contents.length) {
                contents.wrapAll(html);
              } else {
                self.append(html);
              }
            });
          },
          wrap: function(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i) {
              jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
            });
          },
          unwrap: function(selector) {
            this.parent(selector).not("body").each(function() {
              jQuery(this).replaceWith(this.childNodes);
            });
            return this;
          }
        });
        jQuery.expr.pseudos.hidden = function(elem) {
          return !jQuery.expr.pseudos.visible(elem);
        };
        jQuery.expr.pseudos.visible = function(elem) {
          return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
        };
        jQuery.ajaxSettings.xhr = function() {
          try {
            return new window2.XMLHttpRequest();
          } catch (e) {
          }
        };
        var xhrSuccessStatus = {
          // File protocol always yields status code 0, assume 200
          0: 200,
          // Support: IE <=9 only
          // trac-1450: sometimes IE returns 1223 when it should be 204
          1223: 204
        }, xhrSupported = jQuery.ajaxSettings.xhr();
        support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
        support.ajax = xhrSupported = !!xhrSupported;
        jQuery.ajaxTransport(function(options) {
          var callback, errorCallback;
          if (support.cors || xhrSupported && !options.crossDomain) {
            return {
              send: function(headers, complete) {
                var i, xhr = options.xhr();
                xhr.open(
                  options.type,
                  options.url,
                  options.async,
                  options.username,
                  options.password
                );
                if (options.xhrFields) {
                  for (i in options.xhrFields) {
                    xhr[i] = options.xhrFields[i];
                  }
                }
                if (options.mimeType && xhr.overrideMimeType) {
                  xhr.overrideMimeType(options.mimeType);
                }
                if (!options.crossDomain && !headers["X-Requested-With"]) {
                  headers["X-Requested-With"] = "XMLHttpRequest";
                }
                for (i in headers) {
                  xhr.setRequestHeader(i, headers[i]);
                }
                callback = function(type) {
                  return function() {
                    if (callback) {
                      callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                      if (type === "abort") {
                        xhr.abort();
                      } else if (type === "error") {
                        if (typeof xhr.status !== "number") {
                          complete(0, "error");
                        } else {
                          complete(
                            // File: protocol always yields status 0; see trac-8605, trac-14207
                            xhr.status,
                            xhr.statusText
                          );
                        }
                      } else {
                        complete(
                          xhrSuccessStatus[xhr.status] || xhr.status,
                          xhr.statusText,
                          // Support: IE <=9 only
                          // IE9 has no XHR2 but throws on binary (trac-11426)
                          // For XHR2 non-text, let the caller handle it (gh-2498)
                          (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                          xhr.getAllResponseHeaders()
                        );
                      }
                    }
                  };
                };
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                if (xhr.onabort !== void 0) {
                  xhr.onabort = errorCallback;
                } else {
                  xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                      window2.setTimeout(function() {
                        if (callback) {
                          errorCallback();
                        }
                      });
                    }
                  };
                }
                callback = callback("abort");
                try {
                  xhr.send(options.hasContent && options.data || null);
                } catch (e) {
                  if (callback) {
                    throw e;
                  }
                }
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        jQuery.ajaxPrefilter(function(s) {
          if (s.crossDomain) {
            s.contents.script = false;
          }
        });
        jQuery.ajaxSetup({
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
            script: /\b(?:java|ecma)script\b/
          },
          converters: {
            "text script": function(text) {
              jQuery.globalEval(text);
              return text;
            }
          }
        });
        jQuery.ajaxPrefilter("script", function(s) {
          if (s.cache === void 0) {
            s.cache = false;
          }
          if (s.crossDomain) {
            s.type = "GET";
          }
        });
        jQuery.ajaxTransport("script", function(s) {
          if (s.crossDomain || s.scriptAttrs) {
            var script, callback;
            return {
              send: function(_, complete) {
                script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
                  script.remove();
                  callback = null;
                  if (evt) {
                    complete(evt.type === "error" ? 404 : 200, evt.type);
                  }
                });
                document2.head.appendChild(script[0]);
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
            this[callback] = true;
            return callback;
          }
        });
        jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
          var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
          if (jsonProp || s.dataTypes[0] === "jsonp") {
            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            if (jsonProp) {
              s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
              s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }
            s.converters["script json"] = function() {
              if (!responseContainer) {
                jQuery.error(callbackName + " was not called");
              }
              return responseContainer[0];
            };
            s.dataTypes[0] = "json";
            overwritten = window2[callbackName];
            window2[callbackName] = function() {
              responseContainer = arguments;
            };
            jqXHR.always(function() {
              if (overwritten === void 0) {
                jQuery(window2).removeProp(callbackName);
              } else {
                window2[callbackName] = overwritten;
              }
              if (s[callbackName]) {
                s.jsonpCallback = originalSettings.jsonpCallback;
                oldCallbacks.push(callbackName);
              }
              if (responseContainer && isFunction(overwritten)) {
                overwritten(responseContainer[0]);
              }
              responseContainer = overwritten = void 0;
            });
            return "script";
          }
        });
        support.createHTMLDocument = function() {
          var body = document2.implementation.createHTMLDocument("").body;
          body.innerHTML = "<form></form><form></form>";
          return body.childNodes.length === 2;
        }();
        jQuery.parseHTML = function(data, context, keepScripts) {
          if (typeof data !== "string") {
            return [];
          }
          if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
          }
          var base, parsed, scripts;
          if (!context) {
            if (support.createHTMLDocument) {
              context = document2.implementation.createHTMLDocument("");
              base = context.createElement("base");
              base.href = document2.location.href;
              context.head.appendChild(base);
            } else {
              context = document2;
            }
          }
          parsed = rsingleTag.exec(data);
          scripts = !keepScripts && [];
          if (parsed) {
            return [context.createElement(parsed[1])];
          }
          parsed = buildFragment([data], context, scripts);
          if (scripts && scripts.length) {
            jQuery(scripts).remove();
          }
          return jQuery.merge([], parsed.childNodes);
        };
        jQuery.fn.load = function(url, params, callback) {
          var selector, type, response, self = this, off = url.indexOf(" ");
          if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
          }
          if (isFunction(params)) {
            callback = params;
            params = void 0;
          } else if (params && typeof params === "object") {
            type = "POST";
          }
          if (self.length > 0) {
            jQuery.ajax({
              url,
              // If "type" variable is undefined, then "GET" method will be used.
              // Make value of this field explicit since
              // user can override it through ajaxSetup method
              type: type || "GET",
              dataType: "html",
              data: params
            }).done(function(responseText) {
              response = arguments;
              self.html(selector ? (
                // If a selector was specified, locate the right elements in a dummy div
                // Exclude scripts to avoid IE 'Permission Denied' errors
                jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector)
              ) : (
                // Otherwise use the full result
                responseText
              ));
            }).always(callback && function(jqXHR, status) {
              self.each(function() {
                callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
              });
            });
          }
          return this;
        };
        jQuery.expr.pseudos.animated = function(elem) {
          return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
          }).length;
        };
        jQuery.offset = {
          setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            if (position === "static") {
              elem.style.position = "relative";
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            if (calculatePosition) {
              curPosition = curElem.position();
              curTop = curPosition.top;
              curLeft = curPosition.left;
            } else {
              curTop = parseFloat(curCSSTop) || 0;
              curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction(options)) {
              options = options.call(elem, i, jQuery.extend({}, curOffset));
            }
            if (options.top != null) {
              props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
              props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
              options.using.call(elem, props);
            } else {
              curElem.css(props);
            }
          }
        };
        jQuery.fn.extend({
          // offset() relates an element's border box to the document origin
          offset: function(options) {
            if (arguments.length) {
              return options === void 0 ? this : this.each(function(i) {
                jQuery.offset.setOffset(this, options, i);
              });
            }
            var rect, win, elem = this[0];
            if (!elem) {
              return;
            }
            if (!elem.getClientRects().length) {
              return { top: 0, left: 0 };
            }
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
              top: rect.top + win.pageYOffset,
              left: rect.left + win.pageXOffset
            };
          },
          // position() relates an element's margin box to its offset parent's padding box
          // This corresponds to the behavior of CSS absolute positioning
          position: function() {
            if (!this[0]) {
              return;
            }
            var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
            if (jQuery.css(elem, "position") === "fixed") {
              offset = elem.getBoundingClientRect();
            } else {
              offset = this.offset();
              doc = elem.ownerDocument;
              offsetParent = elem.offsetParent || doc.documentElement;
              while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.parentNode;
              }
              if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                parentOffset = jQuery(offsetParent).offset();
                parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
              }
            }
            return {
              top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
              left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
          },
          // This method will return documentElement in the following cases:
          // 1) For the element inside the iframe without offsetParent, this method will return
          //    documentElement of the parent window
          // 2) For the hidden or detached element
          // 3) For body or html element, i.e. in case of the html node - it will return itself
          //
          // but those exceptions were never presented as a real life use-cases
          // and might be considered as more preferable results.
          //
          // This logic, however, is not guaranteed and can change at any point in the future
          offsetParent: function() {
            return this.map(function() {
              var offsetParent = this.offsetParent;
              while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.offsetParent;
              }
              return offsetParent || documentElement;
            });
          }
        });
        jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
          var top = "pageYOffset" === prop;
          jQuery.fn[method] = function(val) {
            return access(this, function(elem, method2, val2) {
              var win;
              if (isWindow(elem)) {
                win = elem;
              } else if (elem.nodeType === 9) {
                win = elem.defaultView;
              }
              if (val2 === void 0) {
                return win ? win[prop] : elem[method2];
              }
              if (win) {
                win.scrollTo(
                  !top ? val2 : win.pageXOffset,
                  top ? val2 : win.pageYOffset
                );
              } else {
                elem[method2] = val2;
              }
            }, method, val, arguments.length);
          };
        });
        jQuery.each(["top", "left"], function(_i, prop) {
          jQuery.cssHooks[prop] = addGetHookIf(
            support.pixelPosition,
            function(elem, computed) {
              if (computed) {
                computed = curCSS(elem, prop);
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
              }
            }
          );
        });
        jQuery.each({ Height: "height", Width: "width" }, function(name, type) {
          jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
          }, function(defaultExtra, funcName) {
            jQuery.fn[funcName] = function(margin, value) {
              var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
              return access(this, function(elem, type2, value2) {
                var doc;
                if (isWindow(elem)) {
                  return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                }
                if (elem.nodeType === 9) {
                  doc = elem.documentElement;
                  return Math.max(
                    elem.body["scroll" + name],
                    doc["scroll" + name],
                    elem.body["offset" + name],
                    doc["offset" + name],
                    doc["client" + name]
                  );
                }
                return value2 === void 0 ? (
                  // Get width or height on the element, requesting but not forcing parseFloat
                  jQuery.css(elem, type2, extra)
                ) : (
                  // Set width or height on the element
                  jQuery.style(elem, type2, value2, extra)
                );
              }, type, chainable ? margin : void 0, chainable);
            };
          });
        });
        jQuery.each([
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend"
        ], function(_i, type) {
          jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
          };
        });
        jQuery.fn.extend({
          bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
          },
          unbind: function(types, fn) {
            return this.off(types, null, fn);
          },
          delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
          },
          undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
          },
          hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
          }
        });
        jQuery.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
          function(_i, name) {
            jQuery.fn[name] = function(data, fn) {
              return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
            };
          }
        );
        var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        jQuery.proxy = function(fn, context) {
          var tmp, args, proxy;
          if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
          }
          if (!isFunction(fn)) {
            return void 0;
          }
          args = slice.call(arguments, 2);
          proxy = function() {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
          };
          proxy.guid = fn.guid = fn.guid || jQuery.guid++;
          return proxy;
        };
        jQuery.holdReady = function(hold) {
          if (hold) {
            jQuery.readyWait++;
          } else {
            jQuery.ready(true);
          }
        };
        jQuery.isArray = Array.isArray;
        jQuery.parseJSON = JSON.parse;
        jQuery.nodeName = nodeName;
        jQuery.isFunction = isFunction;
        jQuery.isWindow = isWindow;
        jQuery.camelCase = camelCase;
        jQuery.type = toType;
        jQuery.now = Date.now;
        jQuery.isNumeric = function(obj) {
          var type = jQuery.type(obj);
          return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
          // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
          // subtraction forces infinities to NaN
          !isNaN(obj - parseFloat(obj));
        };
        jQuery.trim = function(text) {
          return text == null ? "" : (text + "").replace(rtrim, "$1");
        };
        if (typeof define === "function" && define.amd) {
          define("jquery", [], function() {
            return jQuery;
          });
        }
        var _jQuery = window2.jQuery, _$ = window2.$;
        jQuery.noConflict = function(deep) {
          if (window2.$ === jQuery) {
            window2.$ = _$;
          }
          if (deep && window2.jQuery === jQuery) {
            window2.jQuery = _jQuery;
          }
          return jQuery;
        };
        if (typeof noGlobal === "undefined") {
          window2.jQuery = window2.$ = jQuery;
        }
        return jQuery;
      });
    }
  });

  // node_modules/gun/gun.js
  var require_gun = __commonJS({
    "node_modules/gun/gun.js"(exports, module) {
      (function() {
        function USE(arg, req) {
          return req ? __require(arg) : arg.slice ? USE[R(arg)] : function(mod, path) {
            arg(mod = { exports: {} });
            USE[R(path)] = mod.exports;
          };
          function R(p) {
            return p.split("/").slice(-1).toString().replace(".js", "");
          }
        }
        if (typeof module !== "undefined") {
          var MODULE = module;
        }
        ;
        USE(function(module2) {
          String.random = function(l, c) {
            var s = "";
            l = l || 24;
            c = c || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz";
            while (l-- > 0) {
              s += c.charAt(Math.floor(Math.random() * c.length));
            }
            return s;
          };
          String.match = function(t, o) {
            var tmp, u;
            if ("string" !== typeof t) {
              return false;
            }
            if ("string" == typeof o) {
              o = { "=": o };
            }
            o = o || {};
            tmp = o["="] || o["*"] || o[">"] || o["<"];
            if (t === tmp) {
              return true;
            }
            if (u !== o["="]) {
              return false;
            }
            tmp = o["*"] || o[">"];
            if (t.slice(0, (tmp || "").length) === tmp) {
              return true;
            }
            if (u !== o["*"]) {
              return false;
            }
            if (u !== o[">"] && u !== o["<"]) {
              return t >= o[">"] && t <= o["<"] ? true : false;
            }
            if (u !== o[">"] && t >= o[">"]) {
              return true;
            }
            if (u !== o["<"] && t <= o["<"]) {
              return true;
            }
            return false;
          };
          String.hash = function(s, c) {
            if (typeof s !== "string") {
              return;
            }
            c = c || 0;
            if (!s.length) {
              return c;
            }
            for (var i = 0, l = s.length, n; i < l; ++i) {
              n = s.charCodeAt(i);
              c = (c << 5) - c + n;
              c |= 0;
            }
            return c;
          };
          var has = Object.prototype.hasOwnProperty;
          Object.plain = function(o) {
            return o ? o instanceof Object && o.constructor === Object || Object.prototype.toString.call(o).match(/^\[object (\w+)\]$/)[1] === "Object" : false;
          };
          Object.empty = function(o, n) {
            for (var k in o) {
              if (has.call(o, k) && (!n || -1 == n.indexOf(k))) {
                return false;
              }
            }
            return true;
          };
          Object.keys = Object.keys || function(o) {
            var l = [];
            for (var k in o) {
              if (has.call(o, k)) {
                l.push(k);
              }
            }
            return l;
          };
          (function() {
            var u, sT = setTimeout, l = 0, c = 0, sI = typeof setImmediate !== "" + u && setImmediate || function(c2, f) {
              if (typeof MessageChannel == "" + u) {
                return sT;
              }
              (c2 = new MessageChannel()).port1.onmessage = function(e) {
                "" == e.data && f();
              };
              return function(q) {
                f = q;
                c2.port2.postMessage("");
              };
            }(), check = sT.check = sT.check || typeof performance !== "" + u && performance || { now: function() {
              return +/* @__PURE__ */ new Date();
            } };
            sT.hold = sT.hold || 9;
            sT.poll = sT.poll || function(f) {
              if (sT.hold >= check.now() - l && c++ < 3333) {
                f();
                return;
              }
              sI(function() {
                l = check.now();
                f();
              }, c = 0);
            };
          })();
          ;
          (function() {
            var sT = setTimeout, t = sT.turn = sT.turn || function(f2) {
              1 == s.push(f2) && p(T);
            }, s = t.s = [], p = sT.poll, i = 0, f, T = function() {
              if (f = s[i++]) {
                f();
              }
              if (i == s.length || 99 == i) {
                s = t.s = s.slice(i);
                i = 0;
              }
              if (s.length) {
                p(T);
              }
            };
          })();
          ;
          (function() {
            var u, sT = setTimeout, T = sT.turn;
            (sT.each = sT.each || function(l, f, e, S) {
              S = S || 9;
              (function t(s, L, r) {
                if (L = (s = (l || []).splice(0, S)).length) {
                  for (var i = 0; i < L; i++) {
                    if (u !== (r = f(s[i]))) {
                      break;
                    }
                  }
                  if (u === r) {
                    T(t);
                    return;
                  }
                }
                e && e(r);
              })();
            })();
          })();
        })(USE, "./shim");
        ;
        USE(function(module2) {
          module2.exports = function onto(tag, arg, as2) {
            if (!tag) {
              return { to: onto };
            }
            var u, f = "function" == typeof arg, tag = (this.tag || (this.tag = {}))[tag] || f && (this.tag[tag] = { tag, to: onto._ = { next: function(arg2) {
              var tmp;
              if (tmp = this.to) {
                tmp.next(arg2);
              }
            } } });
            if (f) {
              var be = {
                off: onto.off || (onto.off = function() {
                  if (this.next === onto._.next) {
                    return true;
                  }
                  if (this === this.the.last) {
                    this.the.last = this.back;
                  }
                  this.to.back = this.back;
                  this.next = onto._.next;
                  this.back.to = this.to;
                  if (this.the.last === this.the) {
                    delete this.on.tag[this.the.tag];
                  }
                }),
                to: onto._,
                next: arg,
                the: tag,
                on: this,
                as: as2
              };
              (be.back = tag.last || tag).to = be;
              return tag.last = be;
            }
            if ((tag = tag.to) && u !== arg) {
              tag.next(arg);
            }
            return tag;
          };
        })(USE, "./onto");
        ;
        USE(function(module2) {
          module2.exports = function(v) {
            return v === null || "string" === typeof v || "boolean" === typeof v || // we want +/- Infinity to be, but JSON does not support it, sad face.
            // can you guess what v === v checks for? ;)
            "number" === typeof v && v != Infinity && v != -Infinity && v === v || !!v && "string" == typeof v["#"] && Object.keys(v).length === 1 && v["#"];
          };
        })(USE, "./valid");
        ;
        USE(function(module2) {
          USE("./shim");
          function State() {
            var t = +/* @__PURE__ */ new Date();
            if (last < t) {
              return N = 0, last = t + State.drift;
            }
            return last = t + (N += 1) / D + State.drift;
          }
          State.drift = 0;
          var NI = -Infinity, N = 0, D = 999, last = NI, u;
          State.is = function(n, k, o) {
            var tmp = k && n && n._ && n._[">"] || o;
            if (!tmp) {
              return;
            }
            return "number" == typeof (tmp = tmp[k]) ? tmp : NI;
          };
          State.ify = function(n, k, s, v, soul) {
            (n = n || {})._ = n._ || {};
            if (soul) {
              n._["#"] = soul;
            }
            var tmp = n._[">"] || (n._[">"] = {});
            if (u !== k && k !== "_") {
              if ("number" == typeof s) {
                tmp[k] = s;
              }
              if (u !== v) {
                n[k] = v;
              }
            }
            return n;
          };
          module2.exports = State;
        })(USE, "./state");
        ;
        USE(function(module2) {
          USE("./shim");
          function Dup(opt2) {
            var dup = { s: {} }, s = dup.s;
            opt2 = opt2 || { max: 999, age: 1e3 * 9 };
            dup.check = function(id) {
              if (!s[id]) {
                return false;
              }
              return dt(id);
            };
            var dt = dup.track = function(id) {
              var it = s[id] || (s[id] = {});
              it.was = dup.now = +/* @__PURE__ */ new Date();
              if (!dup.to) {
                dup.to = setTimeout(dup.drop, opt2.age + 9);
              }
              if (dt.ed) {
                dt.ed(id);
              }
              return it;
            };
            dup.drop = function(age) {
              dup.to = null;
              dup.now = +/* @__PURE__ */ new Date();
              var l = Object.keys(s);
              console.STAT && console.STAT(dup.now, +/* @__PURE__ */ new Date() - dup.now, "dup drop keys");
              setTimeout.each(l, function(id) {
                var it = s[id];
                if (it && (age || opt2.age) > dup.now - it.was) {
                  return;
                }
                delete s[id];
              }, 0, 99);
            };
            return dup;
          }
          module2.exports = Dup;
        })(USE, "./dup");
        ;
        USE(function(module2) {
          USE("./onto");
          module2.exports = function ask(cb, as2) {
            if (!this.on) {
              return;
            }
            var lack = (this.opt || {}).lack || 9e3;
            if (!("function" == typeof cb)) {
              if (!cb) {
                return;
              }
              var id = cb["#"] || cb, tmp = (this.tag || "")[id];
              if (!tmp) {
                return;
              }
              if (as2) {
                tmp = this.on(id, as2);
                clearTimeout(tmp.err);
                tmp.err = setTimeout(function() {
                  tmp.off();
                }, lack);
              }
              return true;
            }
            var id = as2 && as2["#"] || random(9);
            if (!cb) {
              return id;
            }
            var to = this.on(id, cb, as2);
            to.err = to.err || setTimeout(function() {
              to.off();
              to.next({ err: "Error: No ACK yet.", lack: true });
            }, lack);
            return id;
          };
          var random = String.random || function() {
            return Math.random().toString(36).slice(2);
          };
        })(USE, "./ask");
        ;
        USE(function(module2) {
          function Gun3(o) {
            if (o instanceof Gun3) {
              return (this._ = { $: this }).$;
            }
            if (!(this instanceof Gun3)) {
              return new Gun3(o);
            }
            return Gun3.create(this._ = { $: this, opt: o });
          }
          Gun3.is = function($2) {
            return $2 instanceof Gun3 || $2 && $2._ && $2 === $2._.$ || false;
          };
          Gun3.version = 0.202;
          Gun3.chain = Gun3.prototype;
          Gun3.chain.toJSON = function() {
          };
          USE("./shim");
          Gun3.valid = USE("./valid");
          Gun3.state = USE("./state");
          Gun3.on = USE("./onto");
          Gun3.dup = USE("./dup");
          Gun3.ask = USE("./ask");
          ;
          (function() {
            Gun3.create = function(at) {
              at.root = at.root || at;
              at.graph = at.graph || {};
              at.on = at.on || Gun3.on;
              at.ask = at.ask || Gun3.ask;
              at.dup = at.dup || Gun3.dup();
              var gun2 = at.$.opt(at.opt);
              if (!at.once) {
                at.on("in", universe, at);
                at.on("out", universe, at);
                at.on("put", map, at);
                Gun3.on("create", at);
                at.on("create", at);
              }
              at.once = 1;
              return gun2;
            };
            function universe(msg) {
              if (!msg) {
                return;
              }
              if (msg.out === universe) {
                this.to.next(msg);
                return;
              }
              var eve = this, as2 = eve.as, at = as2.at || as2, gun2 = at.$, dup = at.dup, tmp, DBG = msg.DBG;
              (tmp = msg["#"]) || (tmp = msg["#"] = text_rand(9));
              if (dup.check(tmp)) {
                return;
              }
              dup.track(tmp);
              tmp = msg._;
              msg._ = "function" == typeof tmp ? tmp : function() {
              };
              msg.$ && msg.$ === (msg.$._ || "").$ || (msg.$ = gun2);
              if (msg["@"] && !msg.put) {
                ack(msg);
              }
              if (!at.ask(msg["@"], msg)) {
                DBG && (DBG.u = +/* @__PURE__ */ new Date());
                if (msg.put) {
                  put(msg);
                  return;
                } else if (msg.get) {
                  Gun3.on.get(msg, gun2);
                }
              }
              DBG && (DBG.uc = +/* @__PURE__ */ new Date());
              eve.to.next(msg);
              DBG && (DBG.ua = +/* @__PURE__ */ new Date());
              if (msg.nts || msg.NTS) {
                return;
              }
              msg.out = universe;
              at.on("out", msg);
              DBG && (DBG.ue = +/* @__PURE__ */ new Date());
            }
            function put(msg) {
              if (!msg) {
                return;
              }
              var ctx = msg._ || "", root = ctx.root = ((ctx.$ = msg.$ || "")._ || "").root;
              if (msg["@"] && ctx.faith && !ctx.miss) {
                msg.out = universe;
                root.on("out", msg);
                return;
              }
              ctx.latch = root.hatch;
              ctx.match = root.hatch = [];
              var put2 = msg.put;
              var DBG = ctx.DBG = msg.DBG, S = +/* @__PURE__ */ new Date();
              CT = CT || S;
              if (put2["#"] && put2["."]) {
                return;
              }
              DBG && (DBG.p = S);
              ctx["#"] = msg["#"];
              ctx.msg = msg;
              ctx.all = 0;
              ctx.stun = 1;
              var nl = Object.keys(put2);
              console.STAT && console.STAT(S, ((DBG || ctx).pk = +/* @__PURE__ */ new Date()) - S, "put sort");
              var ni = 0, nj, kl, soul, node, states, err, tmp;
              (function pop(o) {
                if (nj != ni) {
                  nj = ni;
                  if (!(soul = nl[ni])) {
                    console.STAT && console.STAT(S, ((DBG || ctx).pd = +/* @__PURE__ */ new Date()) - S, "put");
                    fire(ctx);
                    return;
                  }
                  if (!(node = put2[soul])) {
                    err = ERR + cut(soul) + "no node.";
                  } else if (!(tmp = node._)) {
                    err = ERR + cut(soul) + "no meta.";
                  } else if (soul !== tmp["#"]) {
                    err = ERR + cut(soul) + "soul not same.";
                  } else if (!(states = tmp[">"])) {
                    err = ERR + cut(soul) + "no state.";
                  }
                  kl = Object.keys(node || {});
                }
                if (err) {
                  msg.err = ctx.err = err;
                  fire(ctx);
                  return;
                }
                var i = 0, key;
                o = o || 0;
                while (o++ < 9 && (key = kl[i++])) {
                  if ("_" === key) {
                    continue;
                  }
                  var val = node[key], state = states[key];
                  if (u === state) {
                    err = ERR + cut(key) + "on" + cut(soul) + "no state.";
                    break;
                  }
                  if (!valid(val)) {
                    err = ERR + cut(key) + "on" + cut(soul) + "bad " + typeof val + cut(val);
                    break;
                  }
                  ham(val, key, soul, state, msg);
                  ++C2;
                }
                if ((kl = kl.slice(i)).length) {
                  turn(pop);
                  return;
                }
                ++ni;
                kl = null;
                pop(o);
              })();
            }
            Gun3.on.put = put;
            function ham(val, key, soul, state, msg) {
              var ctx = msg._ || "", root = ctx.root, graph = root.graph, lot, tmp;
              var vertex = graph[soul] || empty, was = state_is(vertex, key, 1), known = vertex[key];
              var DBG = ctx.DBG;
              if (tmp = console.STAT) {
                if (!graph[soul] || !known) {
                  tmp.has = (tmp.has || 0) + 1;
                }
              }
              var now = State(), u2;
              if (state > now) {
                setTimeout(function() {
                  ham(val, key, soul, state, msg);
                }, (tmp = state - now) > MD ? MD : tmp);
                console.STAT && console.STAT((DBG || ctx).Hf = +/* @__PURE__ */ new Date(), tmp, "future");
                return;
              }
              if (state < was) {
                if (true) {
                  return;
                }
              }
              if (!ctx.faith) {
                if (state === was && (val === known || L(val) <= L(known))) {
                  if (!ctx.miss) {
                    return;
                  }
                }
              }
              ctx.stun++;
              var aid = msg["#"] + ctx.all++, id = { toString: function() {
                return aid;
              }, _: ctx };
              id.toJSON = id.toString;
              root.dup.track(id)["#"] = msg["#"];
              DBG && (DBG.ph = DBG.ph || +/* @__PURE__ */ new Date());
              root.on("put", { "#": id, "@": msg["@"], put: { "#": soul, ".": key, ":": val, ">": state }, ok: msg.ok, _: ctx });
            }
            function map(msg) {
              var DBG;
              if (DBG = (msg._ || "").DBG) {
                DBG.pa = +/* @__PURE__ */ new Date();
                DBG.pm = DBG.pm || +/* @__PURE__ */ new Date();
              }
              var eve = this, root = eve.as, graph = root.graph, ctx = msg._, put2 = msg.put, soul = put2["#"], key = put2["."], val = put2[":"], state = put2[">"], id = msg["#"], tmp;
              if ((tmp = ctx.msg) && (tmp = tmp.put) && (tmp = tmp[soul])) {
                state_ify(tmp, key, state, val, soul);
              }
              graph[soul] = state_ify(graph[soul], key, state, val, soul);
              if (tmp = (root.next || "")[soul]) {
                tmp.on("in", msg);
              }
              fire(ctx);
              eve.to.next(msg);
            }
            function fire(ctx, msg) {
              var root;
              if (ctx.stop) {
                return;
              }
              if (!ctx.err && 0 < --ctx.stun) {
                return;
              }
              ctx.stop = 1;
              if (!(root = ctx.root)) {
                return;
              }
              var tmp = ctx.match;
              tmp.end = 1;
              if (tmp === root.hatch) {
                if (!(tmp = ctx.latch) || tmp.end) {
                  delete root.hatch;
                } else {
                  root.hatch = tmp;
                }
              }
              ctx.hatch && ctx.hatch();
              setTimeout.each(ctx.match, function(cb) {
                cb && cb();
              });
              if (!(msg = ctx.msg) || ctx.err || msg.err) {
                return;
              }
              msg.out = universe;
              ctx.root.on("out", msg);
              CF();
            }
            function ack(msg) {
              var id = msg["@"] || "", ctx, ok, tmp;
              if (!(ctx = id._)) {
                var dup = (dup = msg.$) && (dup = dup._) && (dup = dup.root) && (dup = dup.dup);
                if (!(dup = dup.check(id))) {
                  return;
                }
                msg["@"] = dup["#"] || msg["@"];
                return;
              }
              ctx.acks = (ctx.acks || 0) + 1;
              if (ctx.err = msg.err) {
                msg["@"] = ctx["#"];
                fire(ctx);
              }
              ctx.ok = msg.ok || ctx.ok;
              if (!ctx.stop && !ctx.crack) {
                ctx.crack = ctx.match && ctx.match.push(function() {
                  back(ctx);
                });
              }
              back(ctx);
            }
            function back(ctx) {
              if (!ctx || !ctx.root) {
                return;
              }
              if (ctx.stun || ctx.acks !== ctx.all) {
                return;
              }
              ctx.root.on("in", { "@": ctx["#"], err: ctx.err, ok: ctx.err ? u : ctx.ok || { "": 1 } });
            }
            var ERR = "Error: Invalid graph!";
            var cut = function(s) {
              return " '" + ("" + s).slice(0, 9) + "...' ";
            };
            var L = JSON.stringify, MD = 2147483647, State = Gun3.state;
            var C2 = 0, CT, CF = function() {
              if (C2 > 999 && C2 / -(CT - (CT = +/* @__PURE__ */ new Date())) > 1) {
                Gun3.window && console.log("Warning: You're syncing 1K+ records a second, faster than DOM can update - consider limiting query.");
                CF = function() {
                  C2 = 0;
                };
              }
            };
          })();
          ;
          (function() {
            Gun3.on.get = function(msg, gun2) {
              var root = gun2._, get = msg.get, soul = get["#"], node = root.graph[soul], has = get["."];
              var next = root.next || (root.next = {}), at = next[soul];
              var ctx = msg._ || {}, DBG = ctx.DBG = msg.DBG;
              DBG && (DBG.g = +/* @__PURE__ */ new Date());
              if (!node) {
                return root.on("get", msg);
              }
              if (has) {
                if ("string" != typeof has || u === node[has]) {
                  if (!((at || "").next || "")[has]) {
                    root.on("get", msg);
                    return;
                  }
                }
                node = state_ify({}, has, state_is(node, has), node[has], soul);
              }
              node && ack(msg, node);
              root.on("get", msg);
            };
            function ack(msg, node) {
              var S = +/* @__PURE__ */ new Date(), ctx = msg._ || {}, DBG = ctx.DBG = msg.DBG;
              var to = msg["#"], id = text_rand(9), keys = Object.keys(node || "").sort(), soul = ((node || "")._ || "")["#"], kl = keys.length, j = 0, root = msg.$._.root, F = node === root.graph[soul];
              console.STAT && console.STAT(S, ((DBG || ctx).gk = +/* @__PURE__ */ new Date()) - S, "got keys");
              node && function go() {
                S = +/* @__PURE__ */ new Date();
                var i = 0, k, put = {}, tmp;
                while (i < 9 && (k = keys[i++])) {
                  state_ify(put, k, state_is(node, k), node[k], soul);
                }
                keys = keys.slice(i);
                (tmp = {})[soul] = put;
                put = tmp;
                var faith;
                if (F) {
                  faith = function() {
                  };
                  faith.ram = faith.faith = true;
                }
                tmp = keys.length;
                console.STAT && console.STAT(S, -(S - (S = +/* @__PURE__ */ new Date())), "got copied some");
                DBG && (DBG.ga = +/* @__PURE__ */ new Date());
                root.on("in", { "@": to, "#": id, put, "%": tmp ? id = text_rand(9) : u, $: root.$, _: faith, DBG, FOO: 1 });
                console.STAT && console.STAT(S, +/* @__PURE__ */ new Date() - S, "got in");
                if (!tmp) {
                  return;
                }
                setTimeout.turn(go);
              }();
              if (!node) {
                root.on("in", { "@": msg["#"] });
              }
            }
            Gun3.on.get.ack = ack;
          })();
          ;
          (function() {
            Gun3.chain.opt = function(opt2) {
              opt2 = opt2 || {};
              var gun2 = this, at = gun2._, tmp = opt2.peers || opt2;
              if (!Object.plain(opt2)) {
                opt2 = {};
              }
              if (!Object.plain(at.opt)) {
                at.opt = opt2;
              }
              if ("string" == typeof tmp) {
                tmp = [tmp];
              }
              if (!Object.plain(at.opt.peers)) {
                at.opt.peers = {};
              }
              if (tmp instanceof Array) {
                opt2.peers = {};
                tmp.forEach(function(url) {
                  var p = {};
                  p.id = p.url = url;
                  opt2.peers[url] = at.opt.peers[url] = at.opt.peers[url] || p;
                });
              }
              obj_each(opt2, function each(k) {
                var v = this[k];
                if (this && this.hasOwnProperty(k) || "string" == typeof v || Object.empty(v)) {
                  this[k] = v;
                  return;
                }
                if (v && v.constructor !== Object && !(v instanceof Array)) {
                  return;
                }
                obj_each(v, each);
              });
              at.opt.from = opt2;
              Gun3.on("opt", at);
              at.opt.uuid = at.opt.uuid || function uuid(l) {
                return Gun3.state().toString(36).replace(".", "") + String.random(l || 12);
              };
              return gun2;
            };
          })();
          var obj_each = function(o, f) {
            Object.keys(o).forEach(f, o);
          }, text_rand = String.random, turn = setTimeout.turn, valid = Gun3.valid, state_is = Gun3.state.is, state_ify = Gun3.state.ify, u, empty = {}, C;
          Gun3.log = function() {
            return !Gun3.log.off && C.log.apply(C, arguments), [].slice.call(arguments).join(" ");
          };
          Gun3.log.once = function(w, s, o) {
            return (o = Gun3.log.once)[w] = o[w] || 0, o[w]++ || Gun3.log(s);
          };
          if (typeof window !== "undefined") {
            (window.GUN = window.Gun = Gun3).window = window;
          }
          try {
            if (typeof MODULE !== "undefined") {
              MODULE.exports = Gun3;
            }
          } catch (e) {
          }
          module2.exports = Gun3;
          (Gun3.window || {}).console = (Gun3.window || {}).console || { log: function() {
          } };
          (C = console).only = function(i, s) {
            return C.only.i && i === C.only.i && C.only.i++ && (C.log.apply(C, arguments) || s);
          };
          ;
          "Please do not remove welcome log unless you are paying for a monthly sponsorship, thanks!";
          Gun3.log.once("welcome", "Hello wonderful person! :) Thanks for using GUN, please ask for help on http://chat.gun.eco if anything takes you longer than 5min to figure out!");
        })(USE, "./root");
        ;
        USE(function(module2) {
          var Gun3 = USE("./root");
          Gun3.chain.back = function(n, opt2) {
            var tmp;
            n = n || 1;
            if (-1 === n || Infinity === n) {
              return this._.root.$;
            } else if (1 === n) {
              return (this._.back || this._).$;
            }
            var gun2 = this, at = gun2._;
            if (typeof n === "string") {
              n = n.split(".");
            }
            if (n instanceof Array) {
              var i = 0, l = n.length, tmp = at;
              for (i; i < l; i++) {
                tmp = (tmp || empty)[n[i]];
              }
              if (u !== tmp) {
                return opt2 ? gun2 : tmp;
              } else if (tmp = at.back) {
                return tmp.$.back(n, opt2);
              }
              return;
            }
            if ("function" == typeof n) {
              var yes, tmp = { back: at };
              while ((tmp = tmp.back) && u === (yes = n(tmp, opt2))) {
              }
              return yes;
            }
            if ("number" == typeof n) {
              return (at.back || at).$.back(n - 1);
            }
            return this;
          };
          var empty = {}, u;
        })(USE, "./back");
        ;
        USE(function(module2) {
          var Gun3 = USE("./root");
          Gun3.chain.chain = function(sub) {
            var gun2 = this, at = gun2._, chain = new (sub || gun2).constructor(gun2), cat = chain._, root;
            cat.root = root = at.root;
            cat.id = ++root.once;
            cat.back = gun2._;
            cat.on = Gun3.on;
            cat.on("in", Gun3.on.in, cat);
            cat.on("out", Gun3.on.out, cat);
            return chain;
          };
          function output(msg) {
            var put, get, at = this.as, back = at.back, root = at.root, tmp;
            if (!msg.$) {
              msg.$ = at.$;
            }
            this.to.next(msg);
            if (at.err) {
              at.on("in", { put: at.put = u, $: at.$ });
              return;
            }
            if (get = msg.get) {
              if (root.pass) {
                root.pass[at.id] = at;
              }
              if (at.lex) {
                Object.keys(at.lex).forEach(function(k) {
                  tmp[k] = at.lex[k];
                }, tmp = msg.get = msg.get || {});
              }
              if (get["#"] || at.soul) {
                get["#"] = get["#"] || at.soul;
                msg["#"] || (msg["#"] = text_rand(9));
                back = root.$.get(get["#"])._;
                if (!(get = get["."])) {
                  tmp = back.ask && back.ask[""];
                  (back.ask || (back.ask = {}))[""] = back;
                  if (u !== back.put) {
                    back.on("in", back);
                    if (tmp) {
                      return;
                    }
                  }
                  msg.$ = back.$;
                } else if (obj_has(back.put, get)) {
                  tmp = back.ask && back.ask[get];
                  (back.ask || (back.ask = {}))[get] = back.$.get(get)._;
                  back.on("in", { get, put: { "#": back.soul, ".": get, ":": back.put[get], ">": state_is(root.graph[back.soul], get) } });
                  if (tmp) {
                    return;
                  }
                }
                root.ask(ack, msg);
                return root.on("in", msg);
              }
              if (get["."]) {
                if (at.get) {
                  msg = { get: { ".": at.get }, $: at.$ };
                  (back.ask || (back.ask = {}))[at.get] = msg.$._;
                  return back.on("out", msg);
                }
                msg = { get: at.lex ? msg.get : {}, $: at.$ };
                return back.on("out", msg);
              }
              (at.ask || (at.ask = {}))[""] = at;
              if (at.get) {
                get["."] = at.get;
                (back.ask || (back.ask = {}))[at.get] = msg.$._;
                return back.on("out", msg);
              }
            }
            return back.on("out", msg);
          }
          ;
          Gun3.on.out = output;
          function input(msg, cat) {
            cat = cat || this.as;
            var root = cat.root, gun2 = msg.$ || (msg.$ = cat.$), at = (gun2 || "")._ || empty, tmp = msg.put || "", soul = tmp["#"], key = tmp["."], change = u !== tmp["="] ? tmp["="] : tmp[":"], state2 = tmp[">"] || -Infinity, sat;
            if (u !== msg.put && (u === tmp["#"] || u === tmp["."] || u === tmp[":"] && u === tmp["="] || u === tmp[">"])) {
              if (!valid(tmp)) {
                if (!(soul = ((tmp || "")._ || "")["#"])) {
                  console.log("chain not yet supported for", tmp, "...", msg, cat);
                  return;
                }
                gun2 = cat.root.$.get(soul);
                return setTimeout.each(Object.keys(tmp).sort(), function(k) {
                  if ("_" == k || u === (state2 = state_is(tmp, k))) {
                    return;
                  }
                  cat.on("in", { $: gun2, put: { "#": soul, ".": k, "=": tmp[k], ">": state2 }, VIA: msg });
                });
              }
              cat.on("in", { $: at.back.$, put: { "#": soul = at.back.soul, ".": key = at.has || at.get, "=": tmp, ">": state_is(at.back.put, key) }, via: msg });
              return;
            }
            if ((msg.seen || "")[cat.id]) {
              return;
            }
            (msg.seen || (msg.seen = function() {
            }))[cat.id] = cat;
            if (cat !== at) {
              Object.keys(msg).forEach(function(k) {
                tmp[k] = msg[k];
              }, tmp = {});
              tmp.get = cat.get || tmp.get;
              if (!cat.soul && !cat.has) {
                tmp.$$$ = tmp.$$$ || cat.$;
              } else if (at.soul) {
                tmp.$ = cat.$;
                tmp.$$ = tmp.$$ || at.$;
              }
              msg = tmp;
            }
            unlink(msg, cat);
            if ((cat.soul || msg.$$) && state2 >= state_is(root.graph[soul], key)) {
              (tmp = root.$.get(soul)._).put = state_ify(tmp.put, key, state2, change, soul);
            }
            if (!at.soul && state2 >= state_is(root.graph[soul], key) && (sat = (root.$.get(soul)._.next || "")[key])) {
              sat.put = change;
              if ("string" == typeof (tmp = valid(change))) {
                sat.put = root.$.get(tmp)._.put || change;
              }
            }
            this.to && this.to.next(msg);
            cat.any && setTimeout.each(Object.keys(cat.any), function(any) {
              (any = cat.any[any]) && any(msg);
            }, 0, 99);
            cat.echo && setTimeout.each(Object.keys(cat.echo), function(lat) {
              (lat = cat.echo[lat]) && lat.on("in", msg);
            }, 0, 99);
            if (((msg.$$ || "")._ || at).soul) {
              if ((sat = cat.next) && (sat = sat[key])) {
                tmp = {};
                Object.keys(msg).forEach(function(k) {
                  tmp[k] = msg[k];
                });
                tmp.$ = (msg.$$ || msg.$).get(tmp.get = key);
                delete tmp.$$;
                delete tmp.$$$;
                sat.on("in", tmp);
              }
            }
            link(msg, cat);
          }
          ;
          Gun3.on.in = input;
          function link(msg, cat) {
            cat = cat || this.as || msg.$._;
            if (msg.$$ && this !== Gun3.on) {
              return;
            }
            if (!msg.put || cat.soul) {
              return;
            }
            var put = msg.put || "", link2 = put["="] || put[":"], tmp;
            var root = cat.root, tat = root.$.get(put["#"]).get(put["."])._;
            if ("string" != typeof (link2 = valid(link2))) {
              if (this === Gun3.on) {
                (tat.echo || (tat.echo = {}))[cat.id] = cat;
              }
              return;
            }
            if ((tat.echo || (tat.echo = {}))[cat.id] && !(root.pass || "")[cat.id]) {
              return;
            }
            if (tmp = root.pass) {
              if (tmp[link2 + cat.id]) {
                return;
              }
              tmp[link2 + cat.id] = 1;
            }
            (tat.echo || (tat.echo = {}))[cat.id] = cat;
            if (cat.has) {
              cat.link = link2;
            }
            var sat = root.$.get(tat.link = link2)._;
            (sat.echo || (sat.echo = {}))[tat.id] = tat;
            var tmp = cat.ask || "";
            if (tmp[""] || cat.lex) {
              sat.on("out", { get: { "#": link2 } });
            }
            setTimeout.each(Object.keys(tmp), function(get, sat2) {
              if (!get || !(sat2 = tmp[get])) {
                return;
              }
              sat2.on("out", { get: { "#": link2, ".": get } });
            }, 0, 99);
          }
          ;
          Gun3.on.link = link;
          function unlink(msg, cat) {
            var put = msg.put || "", change = u !== put["="] ? put["="] : put[":"], root = cat.root, link2, tmp;
            if (u === change) {
              if (cat.soul && u !== cat.put) {
                return;
              }
              tmp = (msg.$$ || msg.$ || "")._ || "";
              if (msg["@"] && (u !== tmp.put || u !== cat.put)) {
                return;
              }
              if (link2 = cat.link || msg.linked) {
                delete (root.$.get(link2)._.echo || "")[cat.id];
              }
              if (cat.has) {
                cat.link = null;
              }
              cat.put = u;
              setTimeout.each(Object.keys(cat.next || ""), function(get, sat) {
                if (!(sat = cat.next[get])) {
                  return;
                }
                if (link2) {
                  delete (root.$.get(link2).get(get)._.echo || "")[sat.id];
                }
                sat.on("in", { get, put: u, $: sat.$ });
              }, 0, 99);
              return;
            }
            if (cat.soul) {
              return;
            }
            if (msg.$$) {
              return;
            }
            link2 = valid(change);
            tmp = msg.$._ || "";
            if (link2 === tmp.link || cat.has && !tmp.link) {
              if ((root.pass || "")[cat.id] && "string" !== typeof link2) {
              } else {
                return;
              }
            }
            delete (tmp.echo || "")[cat.id];
            unlink({ get: cat.get, put: u, $: msg.$, linked: msg.linked = msg.linked || tmp.link }, cat);
          }
          ;
          Gun3.on.unlink = unlink;
          function ack(msg, ev) {
            var as2 = this.as, at = as2.$._, root = at.root, get = as2.get || "", tmp = (msg.put || "")[get["#"]] || "";
            if (!msg.put || "string" == typeof get["."] && u === tmp[get["."]]) {
              if (u !== at.put) {
                return;
              }
              if (!at.soul && !at.has) {
                return;
              }
              at.ack = (at.ack || 0) + 1;
              at.on("in", {
                get: at.get,
                put: at.put = u,
                $: at.$,
                "@": msg["@"]
              });
              return;
            }
            (msg._ || {}).miss = 1;
            Gun3.on.put(msg);
            return;
          }
          var empty = {}, u, text_rand = String.random, valid = Gun3.valid, obj_has = function(o, k) {
            return o && Object.prototype.hasOwnProperty.call(o, k);
          }, state = Gun3.state, state_is = state.is, state_ify = state.ify;
        })(USE, "./chain");
        ;
        USE(function(module2) {
          var Gun3 = USE("./root");
          Gun3.chain.get = function(key, cb, as2) {
            var gun2, tmp;
            if (typeof key === "string") {
              if (key.length == 0) {
                (gun2 = this.chain())._.err = { err: Gun3.log("0 length key!", key) };
                if (cb) {
                  cb.call(gun2, gun2._.err);
                }
                return gun2;
              }
              var back = this, cat = back._;
              var next = cat.next || empty;
              if (!(gun2 = next[key])) {
                gun2 = key && cache(key, back);
              }
              gun2 = gun2 && gun2.$;
            } else if ("function" == typeof key) {
              let any2 = function(msg, eve, f) {
                if (any2.stun) {
                  return;
                }
                if ((tmp2 = root.pass) && !tmp2[id]) {
                  return;
                }
                var at = msg.$._, sat = (msg.$$ || "")._, data = (sat || at).put, odd = !at.has && !at.soul, test = {}, link, tmp2;
                if (odd || u === data) {
                  data = u === ((tmp2 = msg.put) || "")["="] ? u === (tmp2 || "")[":"] ? tmp2 : tmp2[":"] : tmp2["="];
                }
                if (link = "string" == typeof (tmp2 = Gun3.valid(data))) {
                  data = u === (tmp2 = root.$.get(tmp2)._.put) ? opt2.not ? u : data : tmp2;
                }
                if (opt2.not && u === data) {
                  return;
                }
                if (u === opt2.stun) {
                  if ((tmp2 = root.stun) && tmp2.on) {
                    cat.$.back(function(a) {
                      tmp2.on("" + a.id, test = {});
                      if ((test.run || 0) < any2.id) {
                        return test;
                      }
                    });
                    !test.run && tmp2.on("" + at.id, test = {});
                    !test.run && sat && tmp2.on("" + sat.id, test = {});
                    if (any2.id > test.run) {
                      if (!test.stun || test.stun.end) {
                        test.stun = tmp2.on("stun");
                        test.stun = test.stun && test.stun.last;
                      }
                      if (test.stun && !test.stun.end) {
                        (test.stun.add || (test.stun.add = {}))[id] = function() {
                          any2(msg, eve, 1);
                        };
                        return;
                      }
                    }
                  }
                  if (
                    /*odd &&*/
                    u === data
                  ) {
                    f = 0;
                  }
                  if ((tmp2 = root.hatch) && !tmp2.end && u === opt2.hatch && !f) {
                    if (wait[at.$._.id]) {
                      return;
                    }
                    wait[at.$._.id] = 1;
                    tmp2.push(function() {
                      any2(msg, eve, 1);
                    });
                    return;
                  }
                  ;
                  wait = {};
                }
                if (root.pass) {
                  if (root.pass[id + at.id]) {
                    return;
                  }
                  root.pass[id + at.id] = 1;
                }
                if (opt2.on) {
                  opt2.ok.call(at.$, data, at.get, msg, eve || any2);
                  return;
                }
                if (opt2.v2020) {
                  opt2.ok(msg, eve || any2);
                  return;
                }
                Object.keys(msg).forEach(function(k) {
                  tmp2[k] = msg[k];
                }, tmp2 = {});
                msg = tmp2;
                msg.put = data;
                opt2.ok.call(opt2.as, msg, eve || any2);
              };
              var any = any2;
              if (true === cb) {
                return soul(this, key, cb, as2), this;
              }
              gun2 = this;
              var cat = gun2._, opt2 = cb || {}, root = cat.root, id;
              opt2.at = cat;
              opt2.ok = key;
              var wait = {};
              ;
              any2.at = cat;
              (cat.any || (cat.any = {}))[id = String.random(7)] = any2;
              any2.off = function() {
                any2.stun = 1;
                if (!cat.any) {
                  return;
                }
                delete cat.any[id];
              };
              any2.rid = rid;
              any2.id = opt2.run || ++root.once;
              tmp = root.pass;
              (root.pass = {})[id] = 1;
              opt2.out = opt2.out || { get: {} };
              cat.on("out", opt2.out);
              root.pass = tmp;
              return gun2;
            } else if ("number" == typeof key) {
              return this.get("" + key, cb, as2);
            } else if ("string" == typeof (tmp = valid(key))) {
              return this.get(tmp, cb, as2);
            } else if (tmp = this.get.next) {
              gun2 = tmp(this, key);
            }
            if (!gun2) {
              (gun2 = this.chain())._.err = { err: Gun3.log("Invalid get request!", key) };
              if (cb) {
                cb.call(gun2, gun2._.err);
              }
              return gun2;
            }
            if (cb && "function" == typeof cb) {
              gun2.get(cb, as2);
            }
            return gun2;
          };
          function cache(key, back) {
            var cat = back._, next = cat.next, gun2 = back.chain(), at = gun2._;
            if (!next) {
              next = cat.next = {};
            }
            next[at.get = key] = at;
            if (back === cat.root.$) {
              at.soul = key;
            } else if (cat.soul || cat.has) {
              at.has = key;
            }
            return at;
          }
          function soul(gun2, cb, opt2, as2) {
            var cat = gun2._, acks = 0, tmp;
            if (tmp = cat.soul || cat.link) {
              return cb(tmp, as2, cat);
            }
            if (cat.jam) {
              return cat.jam.push([cb, as2]);
            }
            cat.jam = [[cb, as2]];
            gun2.get(function go(msg, eve) {
              if (u === msg.put && !cat.root.opt.super && (tmp = Object.keys(cat.root.opt.peers).length) && ++acks <= tmp) {
                return;
              }
              eve.rid(msg);
              var at = (at = msg.$) && at._ || {}, i = 0, as3;
              tmp = cat.jam;
              delete cat.jam;
              while (as3 = tmp[i++]) {
                var cb2 = as3[0], id;
                as3 = as3[1];
                cb2 && cb2(id = at.link || at.soul || Gun3.valid(msg.put) || ((msg.put || {})._ || {})["#"], as3, msg, eve);
              }
            }, { out: { get: { ".": true } } });
            return gun2;
          }
          function rid(at) {
            var cat = this.at || this.on;
            if (!at || cat.soul || cat.has) {
              return this.off();
            }
            if (!(at = (at = (at = at.$ || at)._ || at).id)) {
              return;
            }
            var map = cat.map, tmp, seen;
            if (tmp = (seen = this.seen || (this.seen = {}))[at]) {
              return true;
            }
            seen[at] = true;
            return;
            return;
          }
          var empty = {}, valid = Gun3.valid, u;
        })(USE, "./get");
        ;
        USE(function(module2) {
          var Gun3 = USE("./root");
          Gun3.chain.put = function(data, cb, as2) {
            var gun2 = this, at = gun2._, root = at.root;
            as2 = as2 || {};
            as2.root = at.root;
            as2.run || (as2.run = root.once);
            stun(as2, at.id);
            as2.ack = as2.ack || cb;
            as2.via = as2.via || gun2;
            as2.data = as2.data || data;
            as2.soul || (as2.soul = at.soul || "string" == typeof cb && cb);
            var s = as2.state = as2.state || Gun3.state();
            if ("function" == typeof data) {
              data(function(d) {
                as2.data = d;
                gun2.put(u, u, as2);
              });
              return gun2;
            }
            if (!as2.soul) {
              return get(as2), gun2;
            }
            as2.$ = root.$.get(as2.soul);
            as2.todo = [{ it: as2.data, ref: as2.$ }];
            as2.turn = as2.turn || turn;
            as2.ran = as2.ran || ran;
            (function walk() {
              var to = as2.todo, at2 = to.pop(), d = at2.it, cid = at2.ref && at2.ref._.id, v, k, cat, tmp, g;
              stun(as2, at2.ref);
              if (tmp = at2.todo) {
                k = tmp.pop();
                d = d[k];
                if (tmp.length) {
                  to.push(at2);
                }
              }
              k && (to.path || (to.path = [])).push(k);
              if (!(v = valid(d)) && !(g = Gun3.is(d))) {
                if (!Object.plain(d)) {
                  ran.err(as2, "Invalid data: " + check(d) + " at " + (as2.via.back(function(at3) {
                    at3.get && tmp.push(at3.get);
                  }, tmp = []) || tmp.join(".")) + "." + (to.path || []).join("."));
                  return;
                }
                var seen = as2.seen || (as2.seen = []), i = seen.length;
                while (i--) {
                  if (d === (tmp = seen[i]).it) {
                    v = d = tmp.link;
                    break;
                  }
                }
              }
              if (k && v) {
                at2.node = state_ify(at2.node, k, s, d);
              } else {
                let resolve2 = function(msg, eve) {
                  var end = cat.link["#"];
                  if (eve) {
                    eve.off();
                    eve.rid(msg);
                  }
                  var soul = end || msg.soul || (tmp = (msg.$$ || msg.$)._ || "").soul || tmp.link || ((tmp = tmp.put || "")._ || "")["#"] || tmp["#"] || ((tmp = msg.put || "") && msg.$$ ? tmp["#"] : (tmp["="] || tmp[":"] || "")["#"]);
                  !end && stun(as2, msg.$);
                  if (!soul && !at2.link["#"]) {
                    (at2.wait || (at2.wait = [])).push(function() {
                      resolve2(msg, eve);
                    });
                    return;
                  }
                  if (!soul) {
                    soul = [];
                    (msg.$$ || msg.$).back(function(at3) {
                      if (tmp = at3.soul || at3.link) {
                        return soul.push(tmp);
                      }
                      soul.push(at3.get);
                    });
                    soul = soul.reverse().join("/");
                  }
                  cat.link["#"] = soul;
                  !g && (((as2.graph || (as2.graph = {}))[soul] = cat.node || (cat.node = { _: {} }))._["#"] = soul);
                  delete as2.wait[id];
                  cat.wait && setTimeout.each(cat.wait, function(cb2) {
                    cb2 && cb2();
                  });
                  as2.ran(as2);
                };
                var resolve = resolve2;
                if (!as2.seen) {
                  ran.err(as2, "Data at root of graph must be a node (an object).");
                  return;
                }
                as2.seen.push(cat = { it: d, link: {}, todo: g ? [] : Object.keys(d).sort().reverse(), path: (to.path || []).slice(), up: at2 });
                at2.node = state_ify(at2.node, k, s, cat.link);
                !g && cat.todo.length && to.push(cat);
                var id = as2.seen.length;
                (as2.wait || (as2.wait = {}))[id] = "";
                tmp = (cat.ref = g ? d : k ? at2.ref.get(k) : at2.ref)._;
                (tmp = d && (d._ || "")["#"] || tmp.soul || tmp.link) ? resolve2({ soul: tmp }) : cat.ref.get(resolve2, {
                  run: as2.run,
                  /*hatch: 0,*/
                  v2020: 1,
                  out: { get: { ".": " " } }
                });
                ;
              }
              if (!to.length) {
                return as2.ran(as2);
              }
              as2.turn(walk);
            })();
            return gun2;
          };
          function stun(as2, id) {
            if (!id) {
              return;
            }
            id = (id._ || "").id || id;
            var run = as2.root.stun || (as2.root.stun = { on: Gun3.on }), test = {}, tmp;
            as2.stun || (as2.stun = run.on("stun", function() {
            }));
            if (tmp = run.on("" + id)) {
              tmp.the.last.next(test);
            }
            if (test.run >= as2.run) {
              return;
            }
            run.on("" + id, function(test2) {
              if (as2.stun.end) {
                this.off();
                this.to.next(test2);
                return;
              }
              test2.run = test2.run || as2.run;
              test2.stun = test2.stun || as2.stun;
              return;
              if (this.to.to) {
                this.the.last.next(test2);
                return;
              }
              test2.stun = as2.stun;
            });
          }
          function ran(as2) {
            if (as2.err) {
              ran.end(as2.stun, as2.root);
              return;
            }
            if (as2.todo.length || as2.end || !Object.empty(as2.wait)) {
              return;
            }
            as2.end = 1;
            var cat = as2.$.back(-1)._, root = cat.root, ask = cat.ask(function(ack) {
              root.on("ack", ack);
              if (ack.err && !ack.lack) {
                Gun3.log(ack);
              }
              if (++acks > (as2.acks || 0)) {
                this.off();
              }
              if (!as2.ack) {
                return;
              }
              as2.ack(ack, this);
            }, as2.opt), acks = 0, stun2 = as2.stun, tmp;
            (tmp = function() {
              if (!stun2) {
                return;
              }
              ran.end(stun2, root);
              setTimeout.each(Object.keys(stun2 = stun2.add || ""), function(cb) {
                if (cb = stun2[cb]) {
                  cb();
                }
              });
            }).hatch = tmp;
            if (as2.ack && !as2.ok) {
              as2.ok = as2.acks || 9;
            }
            as2.via._.on("out", { put: as2.out = as2.graph, ok: as2.ok && { "@": as2.ok + 1 }, opt: as2.opt, "#": ask, _: tmp });
          }
          ;
          ran.end = function(stun2, root) {
            stun2.end = noop;
            if (stun2.the.to === stun2 && stun2 === stun2.the.last) {
              delete root.stun;
            }
            stun2.off();
          };
          ran.err = function(as2, err) {
            (as2.ack || noop).call(as2, as2.out = { err: as2.err = Gun3.log(err) });
            as2.ran(as2);
          };
          function get(as2) {
            var at = as2.via._, tmp;
            as2.via = as2.via.back(function(at2) {
              if (at2.soul || !at2.get) {
                return at2.$;
              }
              tmp = as2.data;
              (as2.data = {})[at2.get] = tmp;
            });
            if (!as2.via || !as2.via._.soul) {
              as2.via = at.root.$.get(((as2.data || "")._ || "")["#"] || at.$.back("opt.uuid")());
            }
            as2.via.put(as2.data, as2.ack, as2);
            return;
            if (at.get && at.back.soul) {
              tmp = as2.data;
              as2.via = at.back.$;
              (as2.data = {})[at.get] = tmp;
              as2.via.put(as2.data, as2.ack, as2);
              return;
            }
          }
          function check(d, tmp) {
            return d && (tmp = d.constructor) && tmp.name || typeof d;
          }
          var u, empty = {}, noop = function() {
          }, turn = setTimeout.turn, valid = Gun3.valid, state_ify = Gun3.state.ify;
          var iife = function(fn, as2) {
            fn.call(as2 || empty);
          };
        })(USE, "./put");
        ;
        USE(function(module2) {
          var Gun3 = USE("./root");
          USE("./chain");
          USE("./back");
          USE("./put");
          USE("./get");
          module2.exports = Gun3;
        })(USE, "./index");
        ;
        USE(function(module2) {
          var Gun3 = USE("./index");
          Gun3.chain.on = function(tag, arg, eas, as2) {
            var gun2 = this, cat = gun2._, root = cat.root, act, off, id, tmp;
            if (typeof tag === "string") {
              if (!arg) {
                return cat.on(tag);
              }
              act = cat.on(tag, arg, eas || cat, as2);
              if (eas && eas.$) {
                (eas.subs || (eas.subs = [])).push(act);
              }
              return gun2;
            }
            var opt2 = arg;
            (opt2 = true === opt2 ? { change: true } : opt2 || {}).not = 1;
            opt2.on = 1;
            var wait = {};
            gun2.get(tag, opt2);
            return gun2;
          };
          Gun3.chain.once = function(cb, opt2) {
            opt2 = opt2 || {};
            if (!cb) {
              return none(this, opt2);
            }
            var gun2 = this, cat = gun2._, root = cat.root, data = cat.put, id = String.random(7), one, tmp;
            gun2.get(function(data2, key, msg, eve) {
              var $2 = this, at = $2._, one2 = at.one || (at.one = {});
              if (eve.stun) {
                return;
              }
              if ("" === one2[id]) {
                return;
              }
              if (true === (tmp = Gun3.valid(data2))) {
                once();
                return;
              }
              if ("string" == typeof tmp) {
                return;
              }
              clearTimeout((cat.one || "")[id]);
              clearTimeout(one2[id]);
              one2[id] = setTimeout(once, opt2.wait || 99);
              function once(f) {
                if (!at.has && !at.soul) {
                  at = { put: data2, get: key };
                }
                if (u === (tmp = at.put)) {
                  tmp = ((msg.$$ || "")._ || "").put;
                }
                if ("string" == typeof Gun3.valid(tmp)) {
                  tmp = root.$.get(tmp)._.put;
                  if (tmp === u && !f) {
                    one2[id] = setTimeout(function() {
                      once(1);
                    }, opt2.wait || 99);
                    return;
                  }
                }
                if (eve.stun) {
                  return;
                }
                if ("" === one2[id]) {
                  return;
                }
                one2[id] = "";
                if (cat.soul || cat.has) {
                  eve.off();
                }
                cb.call($2, tmp, at.get);
                clearTimeout(one2[id]);
              }
              ;
            }, { on: 1 });
            return gun2;
          };
          function none(gun2, opt2, chain) {
            Gun3.log.once("valonce", "Chainable val is experimental, its behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it.");
            (chain = gun2.chain())._.nix = gun2.once(function(data, key) {
              chain._.on("in", this._);
            });
            chain._.lex = gun2._.lex;
            return chain;
          }
          Gun3.chain.off = function() {
            var gun2 = this, at = gun2._, tmp;
            var cat = at.back;
            if (!cat) {
              return;
            }
            at.ack = 0;
            if (tmp = cat.next) {
              if (tmp[at.get]) {
                delete tmp[at.get];
              } else {
              }
            }
            if (tmp = cat.any) {
              delete cat.any;
              cat.any = {};
            }
            if (tmp = cat.ask) {
              delete tmp[at.get];
            }
            if (tmp = cat.put) {
              delete tmp[at.get];
            }
            if (tmp = at.soul) {
              delete cat.root.graph[tmp];
            }
            if (tmp = at.map) {
              Object.keys(tmp).forEach(function(i, at2) {
                at2 = tmp[i];
                if (at2.link) {
                  cat.root.$.get(at2.link).off();
                }
              });
            }
            if (tmp = at.next) {
              Object.keys(tmp).forEach(function(i, neat) {
                neat = tmp[i];
                neat.$.off();
              });
            }
            at.on("off", {});
            return gun2;
          };
          var empty = {}, noop = function() {
          }, u;
        })(USE, "./on");
        ;
        USE(function(module2) {
          var Gun3 = USE("./index"), next = Gun3.chain.get.next;
          Gun3.chain.get.next = function(gun2, lex) {
            var tmp;
            if (!Object.plain(lex)) {
              return (next || noop)(gun2, lex);
            }
            if (tmp = ((tmp = lex["#"]) || "")["="] || tmp) {
              return gun2.get(tmp);
            }
            (tmp = gun2.chain()._).lex = lex;
            gun2.on("in", function(eve) {
              if (String.match(eve.get || (eve.put || "")["."], lex["."] || lex["#"] || lex)) {
                tmp.on("in", eve);
              }
              this.to.next(eve);
            });
            return tmp.$;
          };
          Gun3.chain.map = function(cb, opt2, t) {
            var gun2 = this, cat = gun2._, lex, chain;
            if (Object.plain(cb)) {
              lex = cb["."] ? cb : { ".": cb };
              cb = u;
            }
            if (!cb) {
              if (chain = cat.each) {
                return chain;
              }
              (cat.each = chain = gun2.chain())._.lex = lex || chain._.lex || cat.lex;
              chain._.nix = gun2.back("nix");
              gun2.on("in", map, chain._);
              return chain;
            }
            Gun3.log.once("mapfn", "Map functions are experimental, their behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it.");
            chain = gun2.chain();
            gun2.map().on(function(data, key, msg, eve) {
              var next2 = (cb || noop).call(this, data, key, msg, eve);
              if (u === next2) {
                return;
              }
              if (data === next2) {
                return chain._.on("in", msg);
              }
              if (Gun3.is(next2)) {
                return chain._.on("in", next2._);
              }
              var tmp = {};
              Object.keys(msg.put).forEach(function(k) {
                tmp[k] = msg.put[k];
              }, tmp);
              tmp["="] = next2;
              chain._.on("in", { get: key, put: tmp });
            });
            return chain;
          };
          function map(msg) {
            this.to.next(msg);
            var cat = this.as, gun2 = msg.$, at = gun2._, put = msg.put, tmp;
            if (!at.soul && !msg.$$) {
              return;
            }
            if ((tmp = cat.lex) && !String.match(msg.get || (put || "")["."], tmp["."] || tmp["#"] || tmp)) {
              return;
            }
            Gun3.on.link(msg, cat);
          }
          var noop = function() {
          }, event = { stun: noop, off: noop }, u;
        })(USE, "./map");
        ;
        USE(function(module2) {
          var Gun3 = USE("./index");
          Gun3.chain.set = function(item, cb, opt2) {
            var gun2 = this, root = gun2.back(-1), soul, tmp;
            cb = cb || function() {
            };
            opt2 = opt2 || {};
            opt2.item = opt2.item || item;
            if (soul = ((item || "")._ || "")["#"]) {
              (item = {})["#"] = soul;
            }
            if ("string" == typeof (tmp = Gun3.valid(item))) {
              return gun2.get(soul = tmp).put(item, cb, opt2);
            }
            if (!Gun3.is(item)) {
              if (Object.plain(item)) {
                item = root.get(soul = gun2.back("opt.uuid")()).put(item);
              }
              return gun2.get(soul || root.back("opt.uuid")(7)).put(item, cb, opt2);
            }
            gun2.put(function(go) {
              item.get(function(soul2, o, msg) {
                if (!soul2) {
                  return cb.call(gun2, { err: Gun3.log('Only a node can be linked! Not "' + msg.put + '"!') });
                }
                (tmp = {})[soul2] = { "#": soul2 };
                go(tmp);
              }, true);
            });
            return item;
          };
        })(USE, "./set");
        ;
        USE(function(module2) {
          USE("./shim");
          var noop = function() {
          };
          var parse = JSON.parseAsync || function(t, cb, r) {
            var u2, d = +/* @__PURE__ */ new Date();
            try {
              cb(u2, JSON.parse(t, r), json.sucks(+/* @__PURE__ */ new Date() - d));
            } catch (e) {
              cb(e);
            }
          };
          var json = JSON.stringifyAsync || function(v, cb, r, s) {
            var u2, d = +/* @__PURE__ */ new Date();
            try {
              cb(u2, JSON.stringify(v, r, s), json.sucks(+/* @__PURE__ */ new Date() - d));
            } catch (e) {
              cb(e);
            }
          };
          json.sucks = function(d) {
            if (d > 99) {
              console.log("Warning: JSON blocking CPU detected. Add `gun/lib/yson.js` to fix.");
              json.sucks = noop;
            }
          };
          function Mesh(root) {
            var mesh = function() {
            };
            var opt2 = root.opt || {};
            opt2.log = opt2.log || console.log;
            opt2.gap = opt2.gap || opt2.wait || 0;
            opt2.max = opt2.max || (opt2.memory ? opt2.memory * 999 * 999 : 3e8) * 0.3;
            opt2.pack = opt2.pack || opt2.max * 0.01 * 0.01;
            opt2.puff = opt2.puff || 9;
            var puff = setTimeout.turn || setTimeout;
            var dup = root.dup, dup_check = dup.check, dup_track = dup.track;
            var ST = +/* @__PURE__ */ new Date(), LT = ST;
            var hear = mesh.hear = function(raw, peer) {
              if (!raw) {
                return;
              }
              if (opt2.max <= raw.length) {
                return mesh.say({ dam: "!", err: "Message too big!" }, peer);
              }
              if (mesh === this) {
                hear.d += raw.length || 0;
                ++hear.c;
              }
              var S = peer.SH = +/* @__PURE__ */ new Date();
              var tmp = raw[0], msg;
              if ("[" === tmp) {
                parse(raw, function(err, msg2) {
                  if (err || !msg2) {
                    return mesh.say({ dam: "!", err: "DAM JSON parse error." }, peer);
                  }
                  console.STAT && console.STAT(+/* @__PURE__ */ new Date(), msg2.length, "# on hear batch");
                  var P = opt2.puff;
                  (function go() {
                    var S2 = +/* @__PURE__ */ new Date();
                    var i = 0, m;
                    while (i < P && (m = msg2[i++])) {
                      mesh.hear(m, peer);
                    }
                    msg2 = msg2.slice(i);
                    console.STAT && console.STAT(S2, +/* @__PURE__ */ new Date() - S2, "hear loop");
                    flush(peer);
                    if (!msg2.length) {
                      return;
                    }
                    puff(go, 0);
                  })();
                });
                raw = "";
                return;
              }
              if ("{" === tmp || (raw["#"] || Object.plain(raw)) && (msg = raw)) {
                if (msg) {
                  return hear.one(msg, peer, S);
                }
                parse(raw, function(err, msg2) {
                  if (err || !msg2) {
                    return mesh.say({ dam: "!", err: "DAM JSON parse error." }, peer);
                  }
                  hear.one(msg2, peer, S);
                });
                return;
              }
            };
            hear.one = function(msg, peer, S) {
              var id, hash, tmp, ash, DBG;
              if (msg.DBG) {
                msg.DBG = DBG = { DBG: msg.DBG };
              }
              DBG && (DBG.h = S);
              DBG && (DBG.hp = +/* @__PURE__ */ new Date());
              if (!(id = msg["#"])) {
                id = msg["#"] = String.random(9);
              }
              if (tmp = dup_check(id)) {
                return;
              }
              if (!(hash = msg["##"]) && false) {
              }
              if (hash && (tmp = msg["@"] || msg.get && id) && dup.check(ash = tmp + hash)) {
                return;
              }
              (msg._ = function() {
              }).via = mesh.leap = peer;
              if ((tmp = msg["><"]) && "string" == typeof tmp) {
                tmp.slice(0, 99).split(",").forEach(function(k) {
                  this[k] = 1;
                }, msg._.yo = {});
              }
              if (tmp = msg.dam) {
                if (tmp = mesh.hear[tmp]) {
                  tmp(msg, peer, root);
                }
                dup_track(id);
                return;
              }
              if (tmp = msg.ok) {
                msg._.near = tmp["/"];
              }
              var S = +/* @__PURE__ */ new Date();
              DBG && (DBG.is = S);
              peer.SI = id;
              dup_track.ed = function(d) {
                if (id !== d) {
                  return;
                }
                dup_track.ed = 0;
                if (!(d = dup.s[id])) {
                  return;
                }
                d.via = peer;
                if (msg.get) {
                  d.it = msg;
                }
              };
              root.on("in", mesh.last = msg);
              DBG && (DBG.hd = +/* @__PURE__ */ new Date());
              console.STAT && console.STAT(S, +/* @__PURE__ */ new Date() - S, msg.get ? "msg get" : msg.put ? "msg put" : "msg");
              dup_track(id);
              if (ash) {
                dup_track(ash);
              }
              mesh.leap = mesh.last = null;
            };
            var tomap = function(k, i, m) {
              m(k, true);
            };
            hear.c = hear.d = 0;
            ;
            (function() {
              var SMIA = 0;
              var loop;
              mesh.hash = function(msg, peer) {
                var h, s, t;
                var S = +/* @__PURE__ */ new Date();
                json(msg.put, function hash(err, text) {
                  var ss = (s || (s = t = text || "")).slice(0, 32768);
                  h = String.hash(ss, h);
                  s = s.slice(32768);
                  if (s) {
                    puff(hash, 0);
                    return;
                  }
                  console.STAT && console.STAT(S, +/* @__PURE__ */ new Date() - S, "say json+hash");
                  msg._.$put = t;
                  msg["##"] = h;
                  mesh.say(msg, peer);
                  delete msg._.$put;
                }, sort);
              };
              function sort(k, v) {
                var tmp;
                if (!(v instanceof Object)) {
                  return v;
                }
                Object.keys(v).sort().forEach(sorta, { to: tmp = {}, on: v });
                return tmp;
              }
              function sorta(k) {
                this.to[k] = this.on[k];
              }
              var say = mesh.say = function(msg, peer) {
                var tmp;
                if ((tmp = this) && (tmp = tmp.to) && tmp.next) {
                  tmp.next(msg);
                }
                if (!msg) {
                  return false;
                }
                var id, hash, raw, ack = msg["@"];
                var meta = msg._ || (msg._ = function() {
                });
                var DBG = msg.DBG, S = +/* @__PURE__ */ new Date();
                meta.y = meta.y || S;
                if (!peer) {
                  DBG && (DBG.y = S);
                }
                if (!(id = msg["#"])) {
                  id = msg["#"] = String.random(9);
                }
                !loop && dup_track(id);
                if (!(hash = msg["##"]) && u !== msg.put && !meta.via && ack) {
                  mesh.hash(msg, peer);
                  return;
                }
                if (!peer && ack) {
                  peer = (tmp = dup.s[ack]) && (tmp.via || (tmp = tmp.it) && (tmp = tmp._) && tmp.via) || (tmp = mesh.last) && ack === tmp["#"] && mesh.leap;
                }
                if (!peer && ack) {
                  if (dup.s[ack]) {
                    return;
                  }
                  console.STAT && console.STAT(+/* @__PURE__ */ new Date(), ++SMIA, "total no peer to ack to");
                  return false;
                }
                if (ack && !msg.put && !hash && ((dup.s[ack] || "").it || "")["##"]) {
                  return false;
                }
                if (!peer && mesh.way) {
                  return mesh.way(msg);
                }
                DBG && (DBG.yh = +/* @__PURE__ */ new Date());
                if (!(raw = meta.raw)) {
                  mesh.raw(msg, peer);
                  return;
                }
                DBG && (DBG.yr = +/* @__PURE__ */ new Date());
                if (!peer || !peer.id) {
                  if (!Object.plain(peer || opt2.peers)) {
                    return false;
                  }
                  var S = +/* @__PURE__ */ new Date();
                  var P = opt2.puff, ps = opt2.peers, pl = Object.keys(peer || opt2.peers || {});
                  console.STAT && console.STAT(S, +/* @__PURE__ */ new Date() - S, "peer keys");
                  ;
                  (function go() {
                    var S2 = +/* @__PURE__ */ new Date();
                    loop = 1;
                    var wr = meta.raw;
                    meta.raw = raw;
                    var i = 0, p;
                    while (i < 9 && (p = (pl || "")[i++])) {
                      if (!(p = ps[p] || (peer || "")[p])) {
                        continue;
                      }
                      mesh.say(msg, p);
                    }
                    meta.raw = wr;
                    loop = 0;
                    pl = pl.slice(i);
                    console.STAT && console.STAT(S2, +/* @__PURE__ */ new Date() - S2, "say loop");
                    if (!pl.length) {
                      return;
                    }
                    puff(go, 0);
                    ack && dup_track(ack);
                  })();
                  return;
                }
                if (!peer.wire && mesh.wire) {
                  mesh.wire(peer);
                }
                if (id === peer.last) {
                  return;
                }
                peer.last = id;
                if (peer === meta.via) {
                  return false;
                }
                if ((tmp = meta.yo) && (tmp[peer.url] || tmp[peer.pid] || tmp[peer.id])) {
                  return false;
                }
                console.STAT && console.STAT(S, ((DBG || meta).yp = +/* @__PURE__ */ new Date()) - (meta.y || S), "say prep");
                !loop && ack && dup_track(ack);
                if (peer.batch) {
                  peer.tail = (tmp = peer.tail || 0) + raw.length;
                  if (peer.tail <= opt2.pack) {
                    peer.batch += (tmp ? "," : "") + raw;
                    return;
                  }
                  flush(peer);
                }
                peer.batch = "[";
                var ST2 = +/* @__PURE__ */ new Date();
                setTimeout(function() {
                  console.STAT && console.STAT(ST2, +/* @__PURE__ */ new Date() - ST2, "0ms TO");
                  flush(peer);
                }, opt2.gap);
                send(raw, peer);
                console.STAT && ack === peer.SI && console.STAT(S, +/* @__PURE__ */ new Date() - peer.SH, "say ack");
              };
              mesh.say.c = mesh.say.d = 0;
              mesh.raw = function(msg, peer) {
                if (!msg) {
                  return "";
                }
                var meta = msg._ || {}, put, tmp;
                if (tmp = meta.raw) {
                  return tmp;
                }
                if ("string" == typeof msg) {
                  return msg;
                }
                var hash = msg["##"], ack = msg["@"];
                if (hash && ack) {
                  if (!meta.via && dup_check(ack + hash)) {
                    return false;
                  }
                  if (tmp = (dup.s[ack] || "").it) {
                    if (hash === tmp["##"]) {
                      return false;
                    }
                    if (!tmp["##"]) {
                      tmp["##"] = hash;
                    }
                  }
                }
                if (!msg.dam && !msg["@"]) {
                  var i = 0, to = [];
                  tmp = opt2.peers;
                  for (var k in tmp) {
                    var p = tmp[k];
                    to.push(p.url || p.pid || p.id);
                    if (++i > 6) {
                      break;
                    }
                  }
                  if (i > 1) {
                    msg["><"] = to.join();
                  }
                }
                if (msg.put && (tmp = msg.ok)) {
                  msg.ok = { "@": (tmp["@"] || 1) - 1, "/": tmp["/"] == msg._.near ? mesh.near : tmp["/"] };
                }
                if (put = meta.$put) {
                  tmp = {};
                  Object.keys(msg).forEach(function(k2) {
                    tmp[k2] = msg[k2];
                  });
                  tmp.put = ":])([:";
                  json(tmp, function(err, raw) {
                    if (err) {
                      return;
                    }
                    var S = +/* @__PURE__ */ new Date();
                    tmp = raw.indexOf('"put":":])([:"');
                    res(u, raw = raw.slice(0, tmp + 6) + put + raw.slice(tmp + 14));
                    console.STAT && console.STAT(S, +/* @__PURE__ */ new Date() - S, "say slice");
                  });
                  return;
                }
                json(msg, res);
                function res(err, raw) {
                  if (err) {
                    return;
                  }
                  meta.raw = raw;
                  mesh.say(msg, peer);
                }
              };
            })();
            function flush(peer) {
              var tmp = peer.batch, t = "string" == typeof tmp, l;
              if (t) {
                tmp += "]";
              }
              peer.batch = peer.tail = null;
              if (!tmp) {
                return;
              }
              if (t ? 3 > tmp.length : !tmp.length) {
                return;
              }
              if (!t) {
                try {
                  tmp = 1 === tmp.length ? tmp[0] : JSON.stringify(tmp);
                } catch (e) {
                  return opt2.log("DAM JSON stringify error", e);
                }
              }
              if (!tmp) {
                return;
              }
              send(tmp, peer);
            }
            function send(raw, peer) {
              try {
                var wire = peer.wire;
                if (peer.say) {
                  peer.say(raw);
                } else if (wire.send) {
                  wire.send(raw);
                }
                mesh.say.d += raw.length || 0;
                ++mesh.say.c;
              } catch (e) {
                (peer.queue = peer.queue || []).push(raw);
              }
            }
            mesh.near = 0;
            mesh.hi = function(peer) {
              var wire = peer.wire, tmp;
              if (!wire) {
                mesh.wire(peer.length && { url: peer, id: peer } || peer);
                return;
              }
              if (peer.id) {
                opt2.peers[peer.url || peer.id] = peer;
              } else {
                tmp = peer.id = peer.id || peer.url || String.random(9);
                mesh.say({ dam: "?", pid: root.opt.pid }, opt2.peers[tmp] = peer);
                delete dup.s[peer.last];
              }
              if (!peer.met) {
                mesh.near++;
                peer.met = +/* @__PURE__ */ new Date();
                root.on("hi", peer);
              }
              tmp = peer.queue;
              peer.queue = [];
              setTimeout.each(tmp || [], function(msg) {
                send(msg, peer);
              }, 0, 9);
            };
            mesh.bye = function(peer) {
              peer.met && --mesh.near;
              delete peer.met;
              root.on("bye", peer);
              var tmp = +/* @__PURE__ */ new Date();
              tmp = tmp - (peer.met || tmp);
              mesh.bye.time = ((mesh.bye.time || tmp) + tmp) / 2;
            };
            mesh.hear["!"] = function(msg, peer) {
              opt2.log("Error:", msg.err);
            };
            mesh.hear["?"] = function(msg, peer) {
              if (msg.pid) {
                if (!peer.pid) {
                  peer.pid = msg.pid;
                }
                if (msg["@"]) {
                  return;
                }
              }
              mesh.say({ dam: "?", pid: opt2.pid, "@": msg["#"] }, peer);
              delete dup.s[peer.last];
            };
            mesh.hear["mob"] = function(msg, peer) {
              if (!msg.peers) {
                return;
              }
              var peers = Object.keys(msg.peers), one = peers[Math.random() * peers.length >> 0];
              if (!one) {
                return;
              }
              mesh.bye(peer);
              mesh.hi(one);
            };
            root.on("create", function(root2) {
              root2.opt.pid = root2.opt.pid || String.random(9);
              this.to.next(root2);
              root2.on("out", mesh.say);
            });
            root.on("bye", function(peer, tmp) {
              peer = opt2.peers[peer.id || peer] || peer;
              this.to.next(peer);
              peer.bye ? peer.bye() : (tmp = peer.wire) && tmp.close && tmp.close();
              delete opt2.peers[peer.id];
              peer.wire = null;
            });
            var gets = {};
            root.on("bye", function(peer, tmp) {
              this.to.next(peer);
              if (tmp = console.STAT) {
                tmp.peers = mesh.near;
              }
              if (!(tmp = peer.url)) {
                return;
              }
              gets[tmp] = true;
              setTimeout(function() {
                delete gets[tmp];
              }, opt2.lack || 9e3);
            });
            root.on("hi", function(peer, tmp) {
              this.to.next(peer);
              if (tmp = console.STAT) {
                tmp.peers = mesh.near;
              }
              if (opt2.super) {
                return;
              }
              var souls = Object.keys(root.next || "");
              if (souls.length > 9999 && !console.SUBS) {
                console.log(console.SUBS = "Warning: You have more than 10K live GETs, which might use more bandwidth than your screen can show - consider `.off()`.");
              }
              setTimeout.each(souls, function(soul) {
                var node = root.next[soul];
                if (opt2.super || (node.ask || "")[""]) {
                  mesh.say({ get: { "#": soul } }, peer);
                  return;
                }
                setTimeout.each(Object.keys(node.ask || ""), function(key) {
                  if (!key) {
                    return;
                  }
                  mesh.say({ "##": String.hash((root.graph[soul] || "")[key]), get: { "#": soul, ".": key } }, peer);
                });
              });
            });
            return mesh;
          }
          var empty = {}, ok = true, u;
          try {
            module2.exports = Mesh;
          } catch (e) {
          }
        })(USE, "./mesh");
        ;
        USE(function(module2) {
          var Gun3 = USE("./index");
          Gun3.Mesh = USE("./mesh");
          Gun3.on("opt", function(root) {
            this.to.next(root);
            if (root.once) {
              return;
            }
            var opt2 = root.opt;
            if (false === opt2.WebSocket) {
              return;
            }
            var env = Gun3.window || {};
            var websocket = opt2.WebSocket || env.WebSocket || env.webkitWebSocket || env.mozWebSocket;
            if (!websocket) {
              return;
            }
            opt2.WebSocket = websocket;
            var mesh = opt2.mesh = opt2.mesh || Gun3.Mesh(root);
            var wire = mesh.wire || opt2.wire;
            mesh.wire = opt2.wire = open;
            function open(peer) {
              try {
                if (!peer || !peer.url) {
                  return wire2 && wire2(peer);
                }
                var url = peer.url.replace(/^http/, "ws");
                var wire2 = peer.wire = new opt2.WebSocket(url);
                wire2.onclose = function() {
                  reconnect(peer);
                  opt2.mesh.bye(peer);
                };
                wire2.onerror = function(err) {
                  reconnect(peer);
                };
                wire2.onopen = function() {
                  opt2.mesh.hi(peer);
                };
                wire2.onmessage = function(msg) {
                  if (!msg) {
                    return;
                  }
                  opt2.mesh.hear(msg.data || msg, peer);
                };
                return wire2;
              } catch (e) {
                opt2.mesh.bye(peer);
              }
            }
            setTimeout(function() {
              !opt2.super && root.on("out", { dam: "hi" });
            }, 1);
            var wait = 2 * 999;
            function reconnect(peer) {
              clearTimeout(peer.defer);
              if (!opt2.peers[peer.url]) {
                return;
              }
              if (doc && peer.retry <= 0) {
                return;
              }
              peer.retry = (peer.retry || opt2.retry + 1 || 60) - (-peer.tried + (peer.tried = +/* @__PURE__ */ new Date()) < wait * 4 ? 1 : 0);
              peer.defer = setTimeout(function to() {
                if (doc && doc.hidden) {
                  return setTimeout(to, wait);
                }
                open(peer);
              }, wait);
            }
            var doc = "" + u !== typeof document && document;
          });
          var noop = function() {
          }, u;
        })(USE, "./websocket");
        ;
        USE(function(module2) {
          if (typeof Gun === "undefined") {
            return;
          }
          var noop = function() {
          }, store, u;
          try {
            store = (Gun.window || noop).localStorage;
          } catch (e) {
          }
          if (!store) {
            Gun.log("Warning: No localStorage exists to persist data to!");
            store = { setItem: function(k, v) {
              this[k] = v;
            }, removeItem: function(k) {
              delete this[k];
            }, getItem: function(k) {
              return this[k];
            } };
          }
          var parse = JSON.parseAsync || function(t, cb, r) {
            var u2;
            try {
              cb(u2, JSON.parse(t, r));
            } catch (e) {
              cb(e);
            }
          };
          var json = JSON.stringifyAsync || function(v, cb, r, s) {
            var u2;
            try {
              cb(u2, JSON.stringify(v, r, s));
            } catch (e) {
              cb(e);
            }
          };
          Gun.on("create", function lg(root) {
            this.to.next(root);
            var opt2 = root.opt, graph = root.graph, acks = [], disk, to, size, stop;
            if (false === opt2.localStorage) {
              return;
            }
            opt2.prefix = opt2.file || "gun/";
            try {
              disk = lg[opt2.prefix] = lg[opt2.prefix] || JSON.parse(size = store.getItem(opt2.prefix)) || {};
            } catch (e) {
              disk = lg[opt2.prefix] = {};
            }
            size = (size || "").length;
            root.on("get", function(msg) {
              this.to.next(msg);
              var lex = msg.get, soul, data, tmp, u2;
              if (!lex || !(soul = lex["#"])) {
                return;
              }
              data = disk[soul] || u2;
              if (data && (tmp = lex["."]) && !Object.plain(tmp)) {
                data = Gun.state.ify({}, tmp, Gun.state.is(data, tmp), data[tmp], soul);
              }
              Gun.on.get.ack(msg, data);
            });
            root.on("put", function(msg) {
              this.to.next(msg);
              var put = msg.put, soul = put["#"], key = put["."], id = msg["#"], ok = msg.ok || "", tmp;
              disk[soul] = Gun.state.ify(disk[soul], key, put[">"], put[":"], soul);
              if (stop && size > 4999880) {
                root.on("in", { "@": id, err: "localStorage max!" });
                return;
              }
              if (!msg["@"] && (!msg._.via || Math.random() < ok["@"] / ok["/"])) {
                acks.push(id);
              }
              if (to) {
                return;
              }
              to = setTimeout(flush, 9 + size / 333);
            });
            function flush() {
              if (!acks.length && ((setTimeout.turn || "").s || "").length) {
                setTimeout(flush, 99);
                return;
              }
              var err, ack = acks;
              clearTimeout(to);
              to = false;
              acks = [];
              json(disk, function(err2, tmp) {
                try {
                  !err2 && store.setItem(opt2.prefix, tmp);
                } catch (e) {
                  err2 = stop = e || "localStorage failure";
                }
                if (err2) {
                  Gun.log(err2 + " Consider using GUN's IndexedDB plugin for RAD for more storage space, https://gun.eco/docs/RAD#install");
                  root.on("localStorage:error", { err: err2, get: opt2.prefix, put: disk });
                }
                size = tmp.length;
                setTimeout.each(ack, function(id) {
                  root.on("in", { "@": id, err: err2, ok: 0 });
                }, 0, 99);
              });
            }
          });
        })(USE, "./localStorage");
      })();
      (function() {
        var u;
        if ("" + u == typeof Gun) {
          return;
        }
        var DEP = function(n) {
          console.warn("Warning! Deprecated internal utility will break in next version:", n);
        };
        var Type = Gun;
        Type.fn = Type.fn || { is: function(fn2) {
          DEP("fn");
          return !!fn2 && "function" == typeof fn2;
        } };
        Type.bi = Type.bi || { is: function(b) {
          DEP("bi");
          return b instanceof Boolean || typeof b == "boolean";
        } };
        Type.num = Type.num || { is: function(n) {
          DEP("num");
          return !list_is(n) && (n - parseFloat(n) + 1 >= 0 || Infinity === n || -Infinity === n);
        } };
        Type.text = Type.text || { is: function(t) {
          DEP("text");
          return typeof t == "string";
        } };
        Type.text.ify = Type.text.ify || function(t) {
          DEP("text.ify");
          if (Type.text.is(t)) {
            return t;
          }
          if (typeof JSON !== "undefined") {
            return JSON.stringify(t);
          }
          return t && t.toString ? t.toString() : t;
        };
        Type.text.random = Type.text.random || function(l, c) {
          DEP("text.random");
          var s = "";
          l = l || 24;
          c = c || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz";
          while (l > 0) {
            s += c.charAt(Math.floor(Math.random() * c.length));
            l--;
          }
          return s;
        };
        Type.text.match = Type.text.match || function(t, o) {
          var tmp, u2;
          DEP("text.match");
          if ("string" !== typeof t) {
            return false;
          }
          if ("string" == typeof o) {
            o = { "=": o };
          }
          o = o || {};
          tmp = o["="] || o["*"] || o[">"] || o["<"];
          if (t === tmp) {
            return true;
          }
          if (u2 !== o["="]) {
            return false;
          }
          tmp = o["*"] || o[">"] || o["<"];
          if (t.slice(0, (tmp || "").length) === tmp) {
            return true;
          }
          if (u2 !== o["*"]) {
            return false;
          }
          if (u2 !== o[">"] && u2 !== o["<"]) {
            return t >= o[">"] && t <= o["<"] ? true : false;
          }
          if (u2 !== o[">"] && t >= o[">"]) {
            return true;
          }
          if (u2 !== o["<"] && t <= o["<"]) {
            return true;
          }
          return false;
        };
        Type.text.hash = Type.text.hash || function(s, c) {
          DEP("text.hash");
          if (typeof s !== "string") {
            return;
          }
          c = c || 0;
          if (!s.length) {
            return c;
          }
          for (var i = 0, l = s.length, n; i < l; ++i) {
            n = s.charCodeAt(i);
            c = (c << 5) - c + n;
            c |= 0;
          }
          return c;
        };
        Type.list = Type.list || { is: function(l) {
          DEP("list");
          return l instanceof Array;
        } };
        Type.list.slit = Type.list.slit || Array.prototype.slice;
        Type.list.sort = Type.list.sort || function(k) {
          DEP("list.sort");
          return function(A, B) {
            if (!A || !B) {
              return 0;
            }
            A = A[k];
            B = B[k];
            if (A < B) {
              return -1;
            } else if (A > B) {
              return 1;
            } else {
              return 0;
            }
          };
        };
        Type.list.map = Type.list.map || function(l, c, _) {
          DEP("list.map");
          return obj_map(l, c, _);
        };
        Type.list.index = 1;
        Type.obj = Type.boj || { is: function(o) {
          DEP("obj");
          return o ? o instanceof Object && o.constructor === Object || Object.prototype.toString.call(o).match(/^\[object (\w+)\]$/)[1] === "Object" : false;
        } };
        Type.obj.put = Type.obj.put || function(o, k, v) {
          DEP("obj.put");
          return (o || {})[k] = v, o;
        };
        Type.obj.has = Type.obj.has || function(o, k) {
          DEP("obj.has");
          return o && Object.prototype.hasOwnProperty.call(o, k);
        };
        Type.obj.del = Type.obj.del || function(o, k) {
          DEP("obj.del");
          if (!o) {
            return;
          }
          o[k] = null;
          delete o[k];
          return o;
        };
        Type.obj.as = Type.obj.as || function(o, k, v, u2) {
          DEP("obj.as");
          return o[k] = o[k] || (u2 === v ? {} : v);
        };
        Type.obj.ify = Type.obj.ify || function(o) {
          DEP("obj.ify");
          if (obj_is(o)) {
            return o;
          }
          try {
            o = JSON.parse(o);
          } catch (e) {
            o = {};
          }
          ;
          return o;
        };
        (function() {
          var u2;
          function map(v, k) {
            if (obj_has(this, k) && u2 !== this[k]) {
              return;
            }
            this[k] = v;
          }
          Type.obj.to = Type.obj.to || function(from, to) {
            DEP("obj.to");
            to = to || {};
            obj_map(from, map, to);
            return to;
          };
        })();
        Type.obj.copy = Type.obj.copy || function(o) {
          DEP("obj.copy");
          return !o ? o : JSON.parse(JSON.stringify(o));
        };
        (function() {
          function empty(v, i) {
            var n = this.n, u2;
            if (n && (i === n || obj_is(n) && obj_has(n, i))) {
              return;
            }
            if (u2 !== i) {
              return true;
            }
          }
          Type.obj.empty = Type.obj.empty || function(o, n) {
            DEP("obj.empty");
            if (!o) {
              return true;
            }
            return obj_map(o, empty, { n }) ? false : true;
          };
        })();
        ;
        (function() {
          function t(k, v) {
            if (2 === arguments.length) {
              t.r = t.r || {};
              t.r[k] = v;
              return;
            }
            t.r = t.r || [];
            t.r.push(k);
          }
          ;
          var keys = Object.keys, map, u2;
          Object.keys = Object.keys || function(o) {
            return map(o, function(v, k, t2) {
              t2(k);
            });
          };
          Type.obj.map = map = Type.obj.map || function(l, c, _) {
            DEP("obj.map");
            var u3, i = 0, x, r, ll, lle, f = "function" == typeof c;
            t.r = u3;
            if (keys && obj_is(l)) {
              ll = keys(l);
              lle = true;
            }
            _ = _ || {};
            if (list_is(l) || ll) {
              x = (ll || l).length;
              for (; i < x; i++) {
                var ii = i + Type.list.index;
                if (f) {
                  r = lle ? c.call(_, l[ll[i]], ll[i], t) : c.call(_, l[i], ii, t);
                  if (r !== u3) {
                    return r;
                  }
                } else {
                  if (c === l[lle ? ll[i] : i]) {
                    return ll ? ll[i] : ii;
                  }
                }
              }
            } else {
              for (i in l) {
                if (f) {
                  if (obj_has(l, i)) {
                    r = _ ? c.call(_, l[i], i, t) : c(l[i], i, t);
                    if (r !== u3) {
                      return r;
                    }
                  }
                } else {
                  if (c === l[i]) {
                    return i;
                  }
                }
              }
            }
            return f ? t.r : Type.list.index ? 0 : -1;
          };
        })();
        Type.time = Type.time || {};
        Type.time.is = Type.time.is || function(t) {
          DEP("time");
          return t ? t instanceof Date : +(/* @__PURE__ */ new Date()).getTime();
        };
        var fn_is = Type.fn.is;
        var list_is = Type.list.is;
        var obj = Type.obj, obj_is = obj.is, obj_has = obj.has, obj_map = obj.map;
        var Val = {};
        Val.is = function(v) {
          DEP("val.is");
          if (v === u) {
            return false;
          }
          if (v === null) {
            return true;
          }
          if (v === Infinity) {
            return false;
          }
          if (text_is(v) || bi_is(v) || num_is(v)) {
            return true;
          }
          return Val.link.is(v) || false;
        };
        Val.link = Val.rel = { _: "#" };
        ;
        (function() {
          Val.link.is = function(v) {
            DEP("val.link.is");
            if (v && v[rel_] && !v._ && obj_is(v)) {
              var o = {};
              obj_map(v, map, o);
              if (o.id) {
                return o.id;
              }
            }
            return false;
          };
          function map(s, k) {
            var o = this;
            if (o.id) {
              return o.id = false;
            }
            if (k == rel_ && text_is(s)) {
              o.id = s;
            } else {
              return o.id = false;
            }
          }
        })();
        Val.link.ify = function(t) {
          DEP("val.link.ify");
          return obj_put({}, rel_, t);
        };
        Type.obj.has._ = ".";
        var rel_ = Val.link._, u;
        var bi_is = Type.bi.is;
        var num_is = Type.num.is;
        var text_is = Type.text.is;
        var obj = Type.obj, obj_is = obj.is, obj_put = obj.put, obj_map = obj.map;
        Type.val = Type.val || Val;
        var Node = { _: "_" };
        Node.soul = function(n, o) {
          DEP("node.soul");
          return n && n._ && n._[o || soul_];
        };
        Node.soul.ify = function(n, o) {
          DEP("node.soul.ify");
          o = typeof o === "string" ? { soul: o } : o || {};
          n = n || {};
          n._ = n._ || {};
          n._[soul_] = o.soul || n._[soul_] || text_random();
          return n;
        };
        Node.soul._ = Val.link._;
        ;
        (function() {
          Node.is = function(n, cb, as2) {
            DEP("node.is");
            var s;
            if (!obj_is(n)) {
              return false;
            }
            if (s = Node.soul(n)) {
              return !obj_map(n, map, { as: as2, cb, s, n });
            }
            return false;
          };
          function map(v, k) {
            if (k === Node._) {
              return;
            }
            if (!Val.is(v)) {
              return true;
            }
            if (this.cb) {
              this.cb.call(this.as, v, k, this.n, this.s);
            }
          }
        })();
        ;
        (function() {
          Node.ify = function(obj2, o, as2) {
            DEP("node.ify");
            if (!o) {
              o = {};
            } else if (typeof o === "string") {
              o = { soul: o };
            } else if ("function" == typeof o) {
              o = { map: o };
            }
            if (o.map) {
              o.node = o.map.call(as2, obj2, u, o.node || {});
            }
            if (o.node = Node.soul.ify(o.node || {}, o)) {
              obj_map(obj2, map, { o, as: as2 });
            }
            return o.node;
          };
          function map(v, k) {
            var o = this.o, tmp, u2;
            if (o.map) {
              tmp = o.map.call(this.as, v, "" + k, o.node);
              if (u2 === tmp) {
                obj_del(o.node, k);
              } else if (o.node) {
                o.node[k] = tmp;
              }
              return;
            }
            if (Val.is(v)) {
              o.node[k] = v;
            }
          }
        })();
        var obj = Type.obj, obj_is = obj.is, obj_del = obj.del, obj_map = obj.map;
        var text = Type.text, text_random = text.random;
        var soul_ = Node.soul._;
        var u;
        Type.node = Type.node || Node;
        var State = Type.state;
        State.lex = function() {
          DEP("state.lex");
          return State().toString(36).replace(".", "");
        };
        State.to = function(from, k, to) {
          DEP("state.to");
          var val = (from || {})[k];
          if (obj_is(val)) {
            val = obj_copy(val);
          }
          return State.ify(to, k, State.is(from, k), val, Node.soul(from));
        };
        (function() {
          State.map = function(cb, s, as2) {
            DEP("state.map");
            var u2;
            var o = obj_is(o = cb || s) ? o : null;
            cb = fn_is(cb = cb || s) ? cb : null;
            if (o && !cb) {
              s = num_is(s) ? s : State();
              o[N_] = o[N_] || {};
              obj_map(o, map, { o, s });
              return o;
            }
            as2 = as2 || obj_is(s) ? s : u2;
            s = num_is(s) ? s : State();
            return function(v, k, o2, opt2) {
              if (!cb) {
                map.call({ o: o2, s }, v, k);
                return v;
              }
              cb.call(as2 || this || {}, v, k, o2, opt2);
              if (obj_has(o2, k) && u2 === o2[k]) {
                return;
              }
              map.call({ o: o2, s }, v, k);
            };
          };
          function map(v, k) {
            if (N_ === k) {
              return;
            }
            State.ify(this.o, k, this.s);
          }
        })();
        var obj = Type.obj, obj_as = obj.as, obj_has = obj.has, obj_is = obj.is, obj_map = obj.map, obj_copy = obj.copy;
        var num = Type.num, num_is = num.is;
        var fn = Type.fn, fn_is = fn.is;
        var N_ = Node._, u;
        var Graph = {};
        ;
        (function() {
          Graph.is = function(g, cb, fn2, as2) {
            DEP("graph.is");
            if (!g || !obj_is(g) || obj_empty(g)) {
              return false;
            }
            return !obj_map(g, map, { cb, fn: fn2, as: as2 });
          };
          function map(n, s) {
            if (!n || s !== Node.soul(n) || !Node.is(n, this.fn, this.as)) {
              return true;
            }
            if (!this.cb) {
              return;
            }
            nf.n = n;
            nf.as = this.as;
            this.cb.call(nf.as, n, s, nf);
          }
          function nf(fn2) {
            if (fn2) {
              Node.is(nf.n, fn2, nf.as);
            }
          }
        })();
        ;
        (function() {
          Graph.ify = function(obj2, env, as2) {
            DEP("graph.ify");
            var at = { path: [], obj: obj2 };
            if (!env) {
              env = {};
            } else if (typeof env === "string") {
              env = { soul: env };
            } else if ("function" == typeof env) {
              env.map = env;
            }
            if (typeof as2 === "string") {
              env.soul = env.soul || as2;
              as2 = u;
            }
            if (env.soul) {
              at.link = Val.link.ify(env.soul);
            }
            env.shell = (as2 || {}).shell;
            env.graph = env.graph || {};
            env.seen = env.seen || [];
            env.as = env.as || as2;
            node(env, at);
            env.root = at.node;
            return env.graph;
          };
          function node(env, at) {
            var tmp;
            if (tmp = seen(env, at)) {
              return tmp;
            }
            at.env = env;
            at.soul = soul;
            if (Node.ify(at.obj, map, at)) {
              at.link = at.link || Val.link.ify(Node.soul(at.node));
              if (at.obj !== env.shell) {
                env.graph[Val.link.is(at.link)] = at.node;
              }
            }
            return at;
          }
          function map(v, k, n) {
            var at = this, env = at.env, is, tmp;
            if (Node._ === k && obj_has(v, Val.link._)) {
              return n._;
            }
            if (!(is = valid(v, k, n, at, env))) {
              return;
            }
            if (!k) {
              at.node = at.node || n || {};
              if (obj_has(v, Node._) && Node.soul(v)) {
                at.node._ = obj_copy(v._);
              }
              at.node = Node.soul.ify(at.node, Val.link.is(at.link));
              at.link = at.link || Val.link.ify(Node.soul(at.node));
            }
            if (tmp = env.map) {
              tmp.call(env.as || {}, v, k, n, at);
              if (obj_has(n, k)) {
                v = n[k];
                if (u === v) {
                  obj_del(n, k);
                  return;
                }
                if (!(is = valid(v, k, n, at, env))) {
                  return;
                }
              }
            }
            if (!k) {
              return at.node;
            }
            if (true === is) {
              return v;
            }
            tmp = node(env, { obj: v, path: at.path.concat(k) });
            if (!tmp.node) {
              return;
            }
            return tmp.link;
          }
          function soul(id) {
            var at = this;
            var prev = Val.link.is(at.link), graph = at.env.graph;
            at.link = at.link || Val.link.ify(id);
            at.link[Val.link._] = id;
            if (at.node && at.node[Node._]) {
              at.node[Node._][Val.link._] = id;
            }
            if (obj_has(graph, prev)) {
              graph[id] = graph[prev];
              obj_del(graph, prev);
            }
          }
          function valid(v, k, n, at, env) {
            var tmp;
            if (Val.is(v)) {
              return true;
            }
            if (obj_is(v)) {
              return 1;
            }
            if (tmp = env.invalid) {
              v = tmp.call(env.as || {}, v, k, n);
              return valid(v, k, n, at, env);
            }
            env.err = "Invalid value at '" + at.path.concat(k).join(".") + "'!";
            if (Type.list.is(v)) {
              env.err += " Use `.set(item)` instead of an Array.";
            }
          }
          function seen(env, at) {
            var arr = env.seen, i = arr.length, has;
            while (i--) {
              has = arr[i];
              if (at.obj === has.obj) {
                return has;
              }
            }
            arr.push(at);
          }
        })();
        Graph.node = function(node) {
          DEP("graph.node");
          var soul = Node.soul(node);
          if (!soul) {
            return;
          }
          return obj_put({}, soul, node);
        };
        (function() {
          Graph.to = function(graph, root, opt2) {
            DEP("graph.to");
            if (!graph) {
              return;
            }
            var obj2 = {};
            opt2 = opt2 || { seen: {} };
            obj_map(graph[root], map, { obj: obj2, graph, opt: opt2 });
            return obj2;
          };
          function map(v, k) {
            var tmp, obj2;
            if (Node._ === k) {
              if (obj_empty(v, Val.link._)) {
                return;
              }
              this.obj[k] = obj_copy(v);
              return;
            }
            if (!(tmp = Val.link.is(v))) {
              this.obj[k] = v;
              return;
            }
            if (obj2 = this.opt.seen[tmp]) {
              this.obj[k] = obj2;
              return;
            }
            this.obj[k] = this.opt.seen[tmp] = Graph.to(this.graph, tmp, this.opt);
          }
        })();
        var fn_is = Type.fn.is;
        var obj = Type.obj, obj_is = obj.is, obj_del = obj.del, obj_has = obj.has, obj_empty = obj.empty, obj_put = obj.put, obj_map = obj.map, obj_copy = obj.copy;
        var u;
        Type.graph = Type.graph || Graph;
      })();
    }
  });

  // node_modules/gun/browser.js
  var require_browser = __commonJS({
    "node_modules/gun/browser.js"(exports, module) {
      module.exports = require_gun();
    }
  });

  // src/index.js
  var import_jquery = __toESM(require_jquery(), 1);
  var import_gun = __toESM(require_browser(), 1);
  var gun = (0, import_gun.default)({ radisk: false, localStorage: true });
  (function() {
    function as2(cb, opt2) {
      var el = (0, import_jquery.default)(document);
      if (!el.length) {
        return;
      }
      opt2 = opt2 || {};
      opt2.reload = opt2.reload || false;
      opt2.match = opt2.match || "%-- ";
      opt2.end = opt2.end || " --%";
      ;
      (function() {
        function nest(t, s, e, r, i, tmp, u2) {
          if (r && !r.length) {
            return t || "";
          }
          if (!t) {
            return [];
          }
          e = e || s;
          i = t.indexOf(s, i || 0);
          if (0 > i) {
            return [];
          }
          tmp = t.indexOf(e, i + 1);
          if (!r) {
            return [t.slice(i + s.length, tmp)].concat(nest(t, s, e, r, tmp, tmp, u2));
          }
          return t.slice(0, i) + r[0] + nest(t.slice(tmp + e.length), s, e, r.slice(1), 0, tmp, u2);
        }
        function template(tag, attr) {
          var html = (tag = (0, import_jquery.default)(tag))[0].outerHTML, sub, tmp;
          if (html && 0 > html.indexOf(opt2.match)) {
            return;
          }
          if (!attr) {
            import_jquery.default.each(tag[0].attributes, function(i, v) {
              if (!v) {
                return;
              }
              if (!nest(v.value, opt2.match, opt2.end).length) {
                return;
              }
              template(tag, v.name);
            });
            if ((sub = tag.children()).length) {
              return sub.each(function() {
                template(this);
              });
            }
          }
          var data = [], plate = attr ? tag.attr(attr) : tag.html();
          tmp = nest(plate, opt2.match, opt2.end);
          if (!tmp.length) {
            return;
          }
          import_jquery.default.each(tmp, function(pos, match) {
            var expr = match.split(" ");
            var path = expr[0].split(".");
            if (expr = expr.slice(1).join(" ")) {
              expr = new Function("_", "b", "return (_)" + expr);
            }
            var val = expr && expr("") || "";
            data.push(val);
            if (!attr) {
              tag.text(val);
            }
            var ref = gun, sup = [], tmp2;
            if (tmp2 = tag.attr("name")) {
              sup.push(tmp2);
            }
            tag.parents("[name]").each(function() {
              sup.push((0, import_jquery.default)(this).attr("name"));
            });
            import_jquery.default.each(path = sup.reverse().concat(path), function(i, v) {
              ref = ref.get(v);
            });
            ref.on(function(v) {
              v = data[pos] = expr ? expr(v) : v;
              var tmp3 = nest(plate, opt2.match, opt2.end, data);
              if (attr) {
                tag.attr(attr, tmp3);
              } else {
                tag.text(tmp3);
              }
            });
          });
        }
        template(el);
      })();
      if (el.data("as")) {
        el.html(el.data("as").fresh);
      } else {
        el.data("as", {
          fresh: el.html()
        });
      }
      el.find("[name]").each(function() {
        if ((0, import_jquery.default)(this).find("[name]").length) {
          return;
        }
        var name = (0, import_jquery.default)(this), parents = name.parents("[name]"), path = [], ref = gun;
        path.push(name.attr("name"));
        parents.each(function() {
          path.push((0, import_jquery.default)(this).attr("name"));
        });
        path = path.reverse();
        path.forEach(function(key) {
          if ("#" === key) {
            ref = ref.map();
          } else {
            ref = ref.get(key);
          }
        });
        var many = path.slice().reverse().indexOf("#"), model;
        many = 0 < ++many ? many : false;
        if (many) {
          model = name.closest("[name='#']");
          model = model.data("model") || model.data("model", { $: model.clone(), on: model.parent(), has: {} }).hide().data("model");
        }
        ref.get(function(at) {
          var data = at.put, key = at.get, gui = at.gun || at.$, ui = name, back;
          if (model) {
            ui = model.has[gui._.id];
            if (!ui) {
              back = gui.back(many - 1);
              ui = model.has[back._.id];
              if (!ui) {
                if (!back._.get) {
                  return;
                }
                ui = model.has[back._.id] = model.$.clone(true).prependTo(model.on);
              }
              ui = ui.find("[name='" + key + "']").first();
              model.has[gui._.id] = ui;
            }
          }
          ui.data("gun", gui);
          if (ui.data("was") === data) {
            return;
          }
          if (many && ui.is(".sort")) {
            var up = ui.closest("[name='#']");
            var tmp = as2.sort(data, up.parent().children().last());
            tmp ? up.insertAfter(tmp) : up.prependTo(up.parent());
          }
          if (as2.lock === gui) {
            return;
          }
          if (!(data && data instanceof Object)) {
            ui[0] && u === ui[0].value ? ui.text(data) : ui.val(data);
          }
          ui.data("was", data);
          if (cb) {
            cb(data, key, ui);
          }
        });
      });
    }
    as2.wait = function(cb, wait, to) {
      return function(a, b, c) {
        var me = as2.typing = this;
        clearTimeout(to);
        to = setTimeout(function() {
          cb.call(me, a, b, c);
          as2.typing = me = false;
        }, wait || 200);
      };
    };
    as2.escape = function(str) {
      return opt.match + str + opt.end;
    };
    as2.sort = function sort(num, li) {
      return parseFloat(num) >= parseFloat((0, import_jquery.default)(li).find(".sort").text() || -Infinity) ? li : sort(num, li.prev());
    };
    let editable = [document.querySelectorAll("input"), document.querySelectorAll("textarea"), document.querySelectorAll("[contenteditable]")];
    (0, import_jquery.default)(document).on("keyup", "input, textarea, [contenteditable]", function(i, elem) {
      var el = (0, import_jquery.default)(this);
      var data = el[0] && u === el[0].value ? el.text() : el.val();
      var g = el.data("gun");
      if (!g) {
        return;
      }
      as2.lock = g;
      g.put(data);
    });
    var u;
    window.as = as2;
    import_jquery.default.as = as2;
  })();
  (function() {
    let clickable = [document.querySelectorAll("a"), document.querySelectorAll("button")];
    clickable.forEach(function(ls) {
      ls.forEach(function(tag) {
        tag.addEventListener("click", function(ev) {
          if (tag.href.startsWith("http"))
            return;
          ev.preventDefault();
          router(tag.href);
        });
      });
    });
    function router(href) {
      if (!href) {
        return;
      }
      if (href[0] == "#") {
        href = href.slice(1);
      }
      var h = href.split("/")[0];
      if (router.on === h) {
        return;
      }
      location.hash = href;
      (0, import_jquery.default)("#" + h).fadeIn();
      (router.page[h] || { on: function() {
      } }).on();
      router.on = h;
      return router;
    }
    ;
    router.page = function(h, cb) {
      ready(function() {
        h = h.toLowerCase();
        router.page[h] = router.page[h] || { on: cb };
      });
      return router;
    };
    router.render = function(id, model, onto, data) {
      var $data = (0, import_jquery.default)(
        (0, import_jquery.default)("#" + id).get(0) || (0, import_jquery.default)(".model").find(model).clone(true).attr("id", id).appendTo(onto)
      );
      import_jquery.default.each(data, function(field, val) {
        if (import_jquery.default.isPlainObject(val)) {
          return;
        }
        $data.find("[name='" + field + "']").val(val).text(val);
      });
      return $data;
    };
    window.onhashchange = function() {
      (0, import_jquery.default)("section").fadeOut().hide();
      window.location.reload(true);
      router(location.hash.slice(1));
    };
    if (window.as) {
      as.route = router;
    } else {
      import_jquery.default.route = router;
    }
  })();
  (0, import_jquery.default)(function() {
    (0, import_jquery.default)(JOY.start = JOY.start || function() {
      as((a, b, c) => {
        console.log(a, b, c, "ABC");
      });
    });
  });
  (function() {
    var joy = window.JOY = function() {
    };
    joy.route = as.route || import_jquery.default.route;
    joy.escape = as.escape || import_jquery.default.escape;
    joy.auth = function(k, cb, o) {
      if (!o) {
        o = cb;
        cb = 0;
      }
      if (o === true) {
        SEA.pair().then((key) => {
          joy.auth(key, cb);
        });
        return;
      }
      joy.key = k;
      joy.user.auth(k, cb, o);
    };
    joy.style = function(css, m) {
      var style = css;
      var tmp = m ? "@media " + m + " {\n	" : "";
      import_jquery.default.each(style, function(c, r) {
        tmp += c + " {\n";
        import_jquery.default.each(r, function(k, v) {
          tmp += "	" + camelToKebab(k) + ": " + v + ";\n";
        });
        tmp += "}\n";
      });
      var tag = document.createElement("style");
      tag.innerHTML = m ? tmp + "\n}" : tmp;
      document.documentElement.append(tag);
    };
    joy.css = joy.style;
    joy.router = joy.route;
    joy.jsxRender = jsxRender;
    var opt2 = joy.opt = window.CONFIG || { axe: false }, peers;
    (0, import_jquery.default)("link[type=peer]").each(function() {
      (peers || (peers = [])).push((0, import_jquery.default)(this).attr("href"));
    });
    !window.gun && (opt2.peers = opt2.peers || peers);
    window.gun = window.gun || (0, import_gun.default)(opt2);
    joy.user = gun.user();
  })();
  (0, import_jquery.default)(function() {
    (0, import_jquery.default)("section").not(":first").fadeOut();
    JOY.route(location.hash.slice(1));
    (0, import_jquery.default)(
      JOY.start = JOY.start || function() {
        import_jquery.default.as();
      }
    );
  });
  function camelToKebab(string) {
    return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
  }
  function jsxRender(jsx, id = "app") {
    id ? document.getElementById(id).innerHTML = jsx : document.getElementsByTagName("body")[0].innerHTML = jsx;
  }
  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }
})();
/*! Bundled license information:

jquery/dist/jquery.js:
  (*!
   * jQuery JavaScript Library v3.6.4
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2023-03-08T15:28Z
   *)
*/

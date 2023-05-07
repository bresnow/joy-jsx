import "gun/gun.js";
import "gun/sea.js";
import "gun/lib/path.js";
import "gun/lib/rindexed.js";
import "gun/lib/then.js";
import "gun/lib/load.js";
import "gun/lib/open.js";
import "./runtime/chain";
import jsxFactory from "./runtime/jsx";
;
(function() {
  function as2(cb, opt2) {
    var el = $(document);
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
        var html = (tag = $(tag))[0].outerHTML, sub, tmp;
        if (html && 0 > html.indexOf(opt2.match)) {
          return;
        }
        if (!attr) {
          $.each(tag[0].attributes, function(i, v) {
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
        $.each(tmp, function(pos, match) {
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
            sup.push($(this).attr("name"));
          });
          $.each(path = sup.reverse().concat(path), function(i, v) {
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
    as2.ui = gun;
    as2.el = el || $(el);
    if (el.data("as")) {
      el.html(el.data("as"));
    } else {
      el.data("as", el.html());
    }
    el.find("[name]").each(function() {
      if ($(this).find("[name]").length) {
        return;
      }
      var name = $(this), parents = name.parents("[name]"), path = [], ref = gun;
      path.push(name.attr("name"));
      parents.each(function() {
        path.push($(this).attr("name"));
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
            ui = ui.find("[name=" + key + "]").first();
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
    return parseFloat(num) >= parseFloat($(li).find(".sort").text() || -Infinity) ? li : sort(num, li.prev());
  };
  $(document).on("keyup", "input, textarea, [contenteditable]", function(i, elem) {
    var el = $(elem) ?? $(this);
    var data = !el.val() ? el.text() : el.val();
    var g = el.data("gun");
    if (!g) {
      return;
    }
    as2.lock = g;
    g.put(data);
  });
  var u;
  window.as = as2;
  $.as = as2;
})();
;
(function() {
  let cliq = [document.querySelectorAll("a"), document.querySelectorAll("button")];
  cliq.forEach(function(ls) {
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
    $(".joy_view__").hide();
    if (router.on === h) {
      return;
    }
    location.hash = href;
    $("#" + h).fadeIn();
    (router.page[h] || { on: function() {
    } }).on();
    router.on = h;
    return router;
  }
  ;
  let pageNode = gun.get("__JOY_router").get("page_routes/01");
  router.page = function(h, cb) {
    log($(`#${h}`).is(".joy_view__"), "EXISTS FOR PAGER");
    ready(function() {
      h = h.toLowerCase();
      router.page[h] = router.page[h] || { on: cb };
    });
    return router;
  };
  router.model = function(id, model, onto, data) {
    var $data = $(
      $("#" + id).get(0) || $(model).clone(true).attr("id", id).appendTo(onto)
    );
    $.each(data, function(field, val) {
      if ($.isPlainObject(val)) {
        return;
      }
      $data.find('[name="' + field + '"]').val(val).text(val);
    });
    return $data;
  };
  window.onhashchange = function() {
    $(".joy_view__").fadeOut().remove();
    window.location.reload(true);
    router(location.hash.slice(1));
  };
  $.as && ($.as.route = router);
  if (window.as) {
    as.route = router;
  } else {
    $.route = router;
  }
})();
$(function() {
  $(JOY.start = JOY.start || function() {
    $.as((a, b, c) => {
      console.log(a, b, c, "ABC");
    });
  });
});
;
(function() {
  var joy = window.JOY = () => {
  };
  joy.route = as.route || $.route;
  joy.page = as.route.page || $.route.page;
  joy.escape = as.escape || $.escape;
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
  joy.style = function(css) {
    var style = css;
    var tmp = "";
    $.each(style, function(c, r) {
      tmp += c + " {\n";
      $.each(r, function(k, v) {
        tmp += "	" + camelToKebab(k) + ": " + v + ";\n";
      });
      tmp += "}\n";
    });
    var tag = document.createElement("style");
    tag.innerHTML = tmp;
    document.documentElement.append(tag);
  };
  joy.css = joy.style;
  joy.router = joy.route;
  joy.download = function(filename, data, type, charset, href) {
    let hiddenElement;
    if (charset === null) {
      charset = "utf-8";
    }
    hiddenElement = document.createElement("a");
    hiddenElement.href = href || `data:${type};charset=${charset},${encodeURI(data)}`;
    hiddenElement.target = "_blank";
    hiddenElement.download = filename;
    hiddenElement.click();
  };
  joy.render = jsxRender;
  joy.jsxFactory = jsxFactory;
  var opt2 = joy.opt = window.CONFIG || { localStorage: false }, peers;
  $("link[type=peer]").each(function() {
    (peers || (peers = [])).push($(this).attr("href"));
  });
  !window.gun && (opt2.peers = opt2.peers || peers);
  window.gun = window.gun || Gun(opt2);
  joy.user = gun.user();
  joy.get = gun.get;
  window.joy = joy;
  window.log = console.log.bind(console);
})();
$(function() {
  $(".joy_view__").not(":first").fadeOut();
  JOY.route(location.hash.slice(1));
  $(
    JOY.start = JOY.start || function() {
      $.as();
    }
  );
});
;
function camelToKebab(string) {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
}
function jsxRender(jsx, id = null) {
  id ? document.getElementById(id).innerHTML = jsx : document.body.innerHTML = jsx;
}
function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

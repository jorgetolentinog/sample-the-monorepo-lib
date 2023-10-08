import "./index.css";
import { jsxs as Be, jsx as N } from "react/jsx-runtime";
import * as D from "react";
import ue, { useState as mt, useRef as Qt, useDebugValue as qe, createElement as Bt, useContext as Ht } from "react";
const Vt = "_button_1otpz_1", Ut = {
  button: Vt
};
function Xt(e) {
  const [t, n] = mt(0);
  return /* @__PURE__ */ Be("button", { className: Ut.button, onClick: () => n(t + 1), children: [
    t,
    " ",
    e.text ? e.text : "Clicks"
  ] });
}
var k = function() {
  return k = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, k.apply(this, arguments);
};
function K(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Jt(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Kt = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, qt = /* @__PURE__ */ Jt(
  function(e) {
    return Kt.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), v = "-ms-", ce = "-moz-", h = "-webkit-", gt = "comm", Se = "rule", He = "decl", _t = "@import", yt = "@keyframes", $t = "@layer", en = Math.abs, Ve = String.fromCharCode, Oe = Object.assign;
function tn(e, t) {
  return C(e, 0) ^ 45 ? (((t << 2 ^ C(e, 0)) << 2 ^ C(e, 1)) << 2 ^ C(e, 2)) << 2 ^ C(e, 3) : 0;
}
function At(e) {
  return e.trim();
}
function O(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function u(e, t, n) {
  return e.replace(t, n);
}
function ge(e, t) {
  return e.indexOf(t);
}
function C(e, t) {
  return e.charCodeAt(t) | 0;
}
function q(e, t, n) {
  return e.slice(t, n);
}
function L(e) {
  return e.length;
}
function vt(e) {
  return e.length;
}
function ae(e, t) {
  return t.push(e), e;
}
function nn(e, t) {
  return e.map(t).join("");
}
function _e(e, t) {
  return e.filter(function(n) {
    return !O(n, t);
  });
}
var Ie = 1, _ = 1, wt = 0, T = 0, E = 0, ne = "";
function Me(e, t, n, r, o, i, s, c) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Ie, column: _, length: s, return: "", siblings: c };
}
function W(e, t) {
  return Oe(Me("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function J(e) {
  for (; e.root; )
    e = W(e.root, { children: [e] });
  ae(e, e.siblings);
}
function rn() {
  return E;
}
function on() {
  return E = T > 0 ? C(ne, --T) : 0, _--, E === 10 && (_ = 1, Ie--), E;
}
function z() {
  return E = T < wt ? C(ne, T++) : 0, _++, E === 10 && (_ = 1, Ie++), E;
}
function B() {
  return C(ne, T);
}
function ye() {
  return T;
}
function xe(e, t) {
  return q(ne, e, t);
}
function Re(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function sn(e) {
  return Ie = _ = 1, wt = L(ne = e), T = 0, [];
}
function an(e) {
  return ne = "", e;
}
function Pe(e) {
  return At(xe(T - 1, Ye(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function cn(e) {
  for (; (E = B()) && E < 33; )
    z();
  return Re(e) > 2 || Re(E) > 3 ? "" : " ";
}
function un(e, t) {
  for (; --t && z() && !(E < 48 || E > 102 || E > 57 && E < 65 || E > 70 && E < 97); )
    ;
  return xe(e, ye() + (t < 6 && B() == 32 && z() == 32));
}
function Ye(e) {
  for (; z(); )
    switch (E) {
      case e:
        return T;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ye(E);
        break;
      case 40:
        e === 41 && Ye(e);
        break;
      case 92:
        z();
        break;
    }
  return T;
}
function ln(e, t) {
  for (; z() && e + E !== 47 + 10; )
    if (e + E === 42 + 42 && B() === 47)
      break;
  return "/*" + xe(t, T - 1) + "*" + Ve(e === 47 ? e : z());
}
function pn(e) {
  for (; !Re(B()); )
    z();
  return xe(e, T);
}
function dn(e) {
  return an(Ae("", null, null, null, [""], e = sn(e), 0, [0], e));
}
function Ae(e, t, n, r, o, i, s, c, a) {
  for (var p = 0, m = 0, f = s, g = 0, y = 0, w = 0, M = 1, j = 1, x = 1, S = 0, A = "", b = o, I = i, d = r, l = A; j; )
    switch (w = S, S = z()) {
      case 40:
        if (w != 108 && C(l, f - 1) == 58) {
          ge(l += u(Pe(S), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        l += Pe(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        l += cn(w);
        break;
      case 92:
        l += un(ye() - 1, 7);
        continue;
      case 47:
        switch (B()) {
          case 42:
          case 47:
            ae(fn(ln(z(), ye()), t, n, a), a);
            break;
          default:
            l += "/";
        }
        break;
      case 123 * M:
        c[p++] = L(l) * x;
      case 125 * M:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            j = 0;
          case 59 + m:
            x == -1 && (l = u(l, /\f/g, "")), y > 0 && L(l) - f && ae(y > 32 ? et(l + ";", r, n, f - 1, a) : et(u(l, " ", "") + ";", r, n, f - 2, a), a);
            break;
          case 59:
            l += ";";
          default:
            if (ae(d = $e(l, t, n, p, m, o, c, A, b = [], I = [], f, i), i), S === 123)
              if (m === 0)
                Ae(l, t, d, d, b, i, f, c, I);
              else
                switch (g === 99 && C(l, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ae(e, d, d, r && ae($e(e, d, d, 0, 0, o, c, A, o, b = [], f, I), I), o, I, f, c, r ? b : I);
                    break;
                  default:
                    Ae(l, d, d, d, [""], I, 0, c, I);
                }
        }
        p = m = y = 0, M = x = 1, A = l = "", f = s;
        break;
      case 58:
        f = 1 + L(l), y = w;
      default:
        if (M < 1) {
          if (S == 123)
            --M;
          else if (S == 125 && M++ == 0 && on() == 125)
            continue;
        }
        switch (l += Ve(S), S * M) {
          case 38:
            x = m > 0 ? 1 : (l += "\f", -1);
            break;
          case 44:
            c[p++] = (L(l) - 1) * x, x = 1;
            break;
          case 64:
            B() === 45 && (l += Pe(z())), g = B(), m = f = L(A = l += pn(ye())), S++;
            break;
          case 45:
            w === 45 && L(l) == 2 && (M = 0);
        }
    }
  return i;
}
function $e(e, t, n, r, o, i, s, c, a, p, m, f) {
  for (var g = o - 1, y = o === 0 ? i : [""], w = vt(y), M = 0, j = 0, x = 0; M < r; ++M)
    for (var S = 0, A = q(e, g + 1, g = en(j = s[M])), b = e; S < w; ++S)
      (b = At(j > 0 ? y[S] + " " + A : u(A, /&\f/g, y[S]))) && (a[x++] = b);
  return Me(e, t, n, o === 0 ? Se : c, a, p, m, f);
}
function fn(e, t, n, r) {
  return Me(e, t, n, gt, Ve(rn()), q(e, 2, -2), 0, r);
}
function et(e, t, n, r, o) {
  return Me(e, t, n, He, q(e, 0, r), q(e, r + 1, -1), r, o);
}
function bt(e, t, n) {
  switch (tn(e, t)) {
    case 5103:
      return h + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return h + e + e;
    case 4789:
      return ce + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return h + e + ce + e + v + e + e;
    case 5936:
      switch (C(e, t + 11)) {
        case 114:
          return h + e + v + u(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return h + e + v + u(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return h + e + v + u(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return h + e + v + e + e;
    case 6165:
      return h + e + v + "flex-" + e + e;
    case 5187:
      return h + e + u(e, /(\w+).+(:[^]+)/, h + "box-$1$2" + v + "flex-$1$2") + e;
    case 5443:
      return h + e + v + "flex-item-" + u(e, /flex-|-self/g, "") + (O(e, /flex-|baseline/) ? "" : v + "grid-row-" + u(e, /flex-|-self/g, "")) + e;
    case 4675:
      return h + e + v + "flex-line-pack" + u(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return h + e + v + u(e, "shrink", "negative") + e;
    case 5292:
      return h + e + v + u(e, "basis", "preferred-size") + e;
    case 6060:
      return h + "box-" + u(e, "-grow", "") + h + e + v + u(e, "grow", "positive") + e;
    case 4554:
      return h + u(e, /([^-])(transform)/g, "$1" + h + "$2") + e;
    case 6187:
      return u(u(u(e, /(zoom-|grab)/, h + "$1"), /(image-set)/, h + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return u(e, /(image-set\([^]*)/, h + "$1$`$1");
    case 4968:
      return u(u(e, /(.+:)(flex-)?(.*)/, h + "box-pack:$3" + v + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + h + e + e;
    case 4200:
      if (!O(e, /flex-|baseline/))
        return v + "grid-column-align" + q(e, t) + e;
      break;
    case 2592:
    case 3360:
      return v + u(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, O(r.props, /grid-\w+-end/);
      }) ? ~ge(e + (n = n[t].value), "span") ? e : v + u(e, "-start", "") + e + v + "grid-row-span:" + (~ge(n, "span") ? O(n, /\d+/) : +O(n, /\d+/) - +O(e, /\d+/)) + ";" : v + u(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return O(r.props, /grid-\w+-start/);
      }) ? e : v + u(u(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return u(e, /(.+)-inline(.+)/, h + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (L(e) - 1 - t > 6)
        switch (C(e, t + 1)) {
          case 109:
            if (C(e, t + 4) !== 45)
              break;
          case 102:
            return u(e, /(.+:)(.+)-([^]+)/, "$1" + h + "$2-$3$1" + ce + (C(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ge(e, "stretch") ? bt(u(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return u(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, c, a, p) {
        return v + o + ":" + i + p + (s ? v + o + "-span:" + (c ? a : +a - +i) + p : "") + e;
      });
    case 4949:
      if (C(e, t + 6) === 121)
        return u(e, ":", ":" + h) + e;
      break;
    case 6444:
      switch (C(e, C(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return u(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + h + (C(e, 14) === 45 ? "inline-" : "") + "box$3$1" + h + "$2$3$1" + v + "$2box$3") + e;
        case 100:
          return u(e, ":", ":" + v) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return u(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function we(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function hn(e, t, n, r) {
  switch (e.type) {
    case $t:
      if (e.children.length)
        break;
    case _t:
    case He:
      return e.return = e.return || e.value;
    case gt:
      return "";
    case yt:
      return e.return = e.value + "{" + we(e.children, r) + "}";
    case Se:
      if (!L(e.value = e.props.join(",")))
        return "";
  }
  return L(n = we(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function mn(e) {
  var t = vt(e);
  return function(n, r, o, i) {
    for (var s = "", c = 0; c < t; c++)
      s += e[c](n, r, o, i) || "";
    return s;
  };
}
function gn(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function yn(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case He:
        e.return = bt(e.value, e.length, n);
        return;
      case yt:
        return we([W(e, { value: u(e.value, "@", "@" + h) })], r);
      case Se:
        if (e.length)
          return nn(n = e.props, function(o) {
            switch (O(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                J(W(e, { props: [u(o, /:(read-\w+)/, ":" + ce + "$1")] })), J(W(e, { props: [o] })), Oe(e, { props: _e(n, r) });
                break;
              case "::placeholder":
                J(W(e, { props: [u(o, /:(plac\w+)/, ":" + h + "input-$1")] })), J(W(e, { props: [u(o, /:(plac\w+)/, ":" + ce + "$1")] })), J(W(e, { props: [u(o, /:(plac\w+)/, v + "input-$1")] })), J(W(e, { props: [o] })), Oe(e, { props: _e(n, r) });
                break;
            }
            return "";
          });
    }
}
var An = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, V = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Ue = typeof window < "u" && "HTMLElement" in window, vn = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), tt = /invalid hook call/i, fe = /* @__PURE__ */ new Set(), wn = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        for (var c = [], a = 1; a < arguments.length; a++)
          c[a - 1] = arguments[a];
        tt.test(s) ? (i = !1, fe.delete(r)) : o.apply(void 0, K([s], c, !1));
      }, Qt(), i && !fe.has(r) && (console.warn(r), fe.add(r));
    } catch (s) {
      tt.test(s.message) && fe.delete(r);
    } finally {
      console.error = o;
    }
  }
}, Ee = Object.freeze([]), $ = Object.freeze({});
function bn(e, t, n) {
  return n === void 0 && (n = $), e.theme !== n.theme && e.theme || t || n.theme;
}
var We = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Sn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, In = /(^-|-$)/g;
function nt(e) {
  return e.replace(Sn, "-").replace(In, "");
}
var Mn = /(a)(d)/gi, rt = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ge(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    n = rt(t % 52) + n;
  return (rt(t % 52) + n).replace(Mn, "$1-$2");
}
var Te, Z = function(e, t) {
  for (var n = t.length; n; )
    e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, St = function(e) {
  return Z(5381, e);
};
function xn(e) {
  return Ge(St(e) >>> 0);
}
function It(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function De(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Mt = typeof Symbol == "function" && Symbol.for, xt = Mt ? Symbol.for("react.memo") : 60115, En = Mt ? Symbol.for("react.forward_ref") : 60112, Nn = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Cn = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Et = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, kn = ((Te = {})[En] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Te[xt] = Et, Te);
function ot(e) {
  return ("type" in (t = e) && t.type.$$typeof) === xt ? Et : "$$typeof" in e ? kn[e.$$typeof] : Nn;
  var t;
}
var jn = Object.defineProperty, Pn = Object.getOwnPropertyNames, it = Object.getOwnPropertySymbols, Tn = Object.getOwnPropertyDescriptor, Dn = Object.getPrototypeOf, st = Object.prototype;
function Nt(e, t, n) {
  if (typeof t != "string") {
    if (st) {
      var r = Dn(t);
      r && r !== st && Nt(e, r, n);
    }
    var o = Pn(t);
    it && (o = o.concat(it(t)));
    for (var i = ot(e), s = ot(t), c = 0; c < o.length; ++c) {
      var a = o[c];
      if (!(a in Cn || n && n[a] || s && a in s || i && a in i)) {
        var p = Tn(t, a);
        try {
          jn(e, a, p);
        } catch {
        }
      }
    }
  }
  return e;
}
function ee(e) {
  return typeof e == "function";
}
function Xe(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Q(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function at(e, t) {
  if (e.length === 0)
    return "";
  for (var n = e[0], r = 1; r < e.length; r++)
    n += t ? t + e[r] : e[r];
  return n;
}
function te(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Fe(e, t, n) {
  if (n === void 0 && (n = !1), !n && !te(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++)
      e[r] = Fe(e[r], t[r]);
  else if (te(t))
    for (var r in t)
      e[r] = Fe(e[r], t[r]);
  return e;
}
function Je(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var zn = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function Ln() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1)
    r.push(e[o]);
  return r.forEach(function(s) {
    n = n.replace(/%[a-z]/, s);
  }), n;
}
function re(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Ln.apply(void 0, K([zn[e]], t, !1)).trim());
}
var On = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, r = 0; r < t; r++)
      n += this.groupSizes[r];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; t >= i; )
        if ((i <<= 1) < 0)
          throw re(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(r), this.length = i;
      for (var s = o; s < i; s++)
        this.groupSizes[s] = 0;
    }
    for (var c = this.indexOfGroup(t + 1), a = (s = 0, n.length); s < a; s++)
      this.tag.insertRule(c, n[s]) && (this.groupSizes[t]++, c++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], r = this.indexOfGroup(t), o = r + n;
      this.groupSizes[t] = 0;
      for (var i = r; i < o; i++)
        this.tag.deleteRule(r);
    }
  }, e.prototype.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return n;
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, s = o; s < i; s++)
      n += "".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);
    return n;
  }, e;
}(), ve = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), ze = 1, he = function(e) {
  if (ve.has(e))
    return ve.get(e);
  for (; be.has(ze); )
    ze++;
  var t = ze++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824))
    throw re(16, "".concat(t));
  return ve.set(e, t), be.set(t, e), t;
}, Rn = function(e, t) {
  ve.set(e, t), be.set(t, e);
}, Yn = "style[".concat(V, "][").concat("data-styled-version", '="').concat("6.0.8", '"]'), Wn = new RegExp("^".concat(V, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Gn = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++)
    (r = o[i]) && e.registerName(t, r);
}, Fn = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(`/*!sc*/
`), o = [], i = 0, s = r.length; i < s; i++) {
    var c = r[i].trim();
    if (c) {
      var a = c.match(Wn);
      if (a) {
        var p = 0 | parseInt(a[1], 10), m = a[2];
        p !== 0 && (Rn(m, p), Gn(e, m, a[3]), e.getTag().insertRules(p, o)), o.length = 0;
      } else
        o.push(c);
    }
  }
};
function Zn() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Ct = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(c) {
    var a = Array.from(c.querySelectorAll("style[".concat(V, "]")));
    return a[a.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(V, "active"), r.setAttribute("data-styled-version", "6.0.8");
  var s = Zn();
  return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
}, Qn = function() {
  function e(t) {
    this.element = Ct(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet)
        return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var s = r[o];
        if (s.ownerNode === n)
          return s;
      }
      throw re(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n && n.cssText ? n.cssText : "";
  }, e;
}(), Bn = function() {
  function e(t) {
    this.element = Ct(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var r = document.createTextNode(n);
      return this.element.insertBefore(r, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Hn = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), ct = Ue, Vn = { isServer: !Ue, useCSSOMInjection: !vn }, kt = function() {
  function e(t, n, r) {
    t === void 0 && (t = $), n === void 0 && (n = {});
    var o = this;
    this.options = k(k({}, Vn), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && Ue && ct && (ct = !1, function(i) {
      for (var s = document.querySelectorAll(Yn), c = 0, a = s.length; c < a; c++) {
        var p = s[c];
        p && p.getAttribute(V) !== "active" && (Fn(i, p), p.parentNode && p.parentNode.removeChild(p));
      }
    }(this)), Je(this, function() {
      return function(i) {
        for (var s = i.getTag(), c = s.length, a = "", p = function(f) {
          var g = function(x) {
            return be.get(x);
          }(f);
          if (g === void 0)
            return "continue";
          var y = i.names.get(g), w = s.getGroup(f);
          if (y === void 0 || w.length === 0)
            return "continue";
          var M = "".concat(V, ".g").concat(f, '[id="').concat(g, '"]'), j = "";
          y !== void 0 && y.forEach(function(x) {
            x.length > 0 && (j += "".concat(x, ","));
          }), a += "".concat(w).concat(M, '{content:"').concat(j, '"}').concat(`/*!sc*/
`);
        }, m = 0; m < c; m++)
          p(m);
        return a;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return he(t);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(k(k({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new Hn(o) : r ? new Qn(o) : new Bn(o);
    }(this.options), new On(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (he(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(he(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(he(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Un = /&/g, Xn = /^\s*\/\/.*$/gm;
function jt(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = jt(n.children, t)), n;
  });
}
function Jn(e) {
  var t, n, r, o = e === void 0 ? $ : e, i = o.options, s = i === void 0 ? $ : i, c = o.plugins, a = c === void 0 ? Ee : c, p = function(g, y, w) {
    return w === n || w.startsWith(n) && w.endsWith(n) && w.replaceAll(n, "").length > 0 ? ".".concat(t) : g;
  }, m = a.slice();
  m.push(function(g) {
    g.type === Se && g.value.includes("&") && (g.props[0] = g.props[0].replace(Un, n).replace(r, p));
  }), s.prefix && m.push(yn), m.push(hn);
  var f = function(g, y, w, M) {
    y === void 0 && (y = ""), w === void 0 && (w = ""), M === void 0 && (M = "&"), t = M, n = y, r = new RegExp("\\".concat(n, "\\b"), "g");
    var j = g.replace(Xn, ""), x = dn(w || y ? "".concat(w, " ").concat(y, " { ").concat(j, " }") : j);
    s.namespace && (x = jt(x, s.namespace));
    var S = [];
    return we(x, mn(m.concat(gn(function(A) {
      return S.push(A);
    })))), S;
  };
  return f.hash = a.length ? a.reduce(function(g, y) {
    return y.name || re(15), Z(g, y.name);
  }, 5381).toString() : "", f;
}
var Kn = new kt(), Ze = Jn(), Pt = ue.createContext({ shouldForwardProp: void 0, styleSheet: Kn, stylis: Ze });
Pt.Consumer;
ue.createContext(void 0);
function ut() {
  return Ht(Pt);
}
var lt = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Ze);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, Je(this, function() {
      throw re(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Ze), this.name + t.hash;
  }, e;
}(), qn = function(e) {
  return e >= "A" && e <= "Z";
};
function pt(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-")
      return e;
    qn(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Tt = function(e) {
  return e == null || e === !1 || e === "";
}, Dt = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Tt(i) && (Array.isArray(i) && i.isCss || ee(i) ? r.push("".concat(pt(o), ":"), i, ";") : te(i) ? r.push.apply(r, K(K(["".concat(o, " {")], Dt(i), !1), ["}"], !1)) : r.push("".concat(pt(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in An || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function H(e, t, n, r) {
  if (Tt(e))
    return [];
  if (Xe(e))
    return [".".concat(e.styledComponentId)];
  if (ee(e)) {
    if (!ee(i = e) || i.prototype && i.prototype.isReactComponent || !t)
      return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof lt || te(o) || o === null || console.error("".concat(It(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), H(o, t, n, r);
  }
  var i;
  return e instanceof lt ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : te(e) ? Dt(e) : Array.isArray(e) ? Array.prototype.concat.apply(Ee, e.map(function(s) {
    return H(s, t, n, r);
  })) : [e.toString()];
}
function _n(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (ee(n) && !Xe(n))
      return !1;
  }
  return !0;
}
var $n = St("6.0.8"), er = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && _n(t), this.componentId = n, this.baseHash = Z($n, n), this.baseStyle = r, kt.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash)
      if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId))
        o = Q(o, this.staticRulesId);
      else {
        var i = at(H(this.rules, t, n, r)), s = Ge(Z(this.baseHash, i) >>> 0);
        if (!n.hasNameForId(this.componentId, s)) {
          var c = r(i, ".".concat(s), void 0, this.componentId);
          n.insertRules(this.componentId, s, c);
        }
        o = Q(o, s), this.staticRulesId = s;
      }
    else {
      for (var a = Z(this.baseHash, r.hash), p = "", m = 0; m < this.rules.length; m++) {
        var f = this.rules[m];
        if (typeof f == "string")
          p += f, process.env.NODE_ENV !== "production" && (a = Z(a, f));
        else if (f) {
          var g = at(H(f, t, n, r));
          a = Z(a, g + m), p += g;
        }
      }
      if (p) {
        var y = Ge(a >>> 0);
        n.hasNameForId(this.componentId, y) || n.insertRules(this.componentId, y, r(p, ".".concat(y), void 0, this.componentId)), o = Q(o, y);
      }
    }
    return o;
  }, e;
}(), zt = ue.createContext(void 0);
zt.Consumer;
var Le = {}, dt = /* @__PURE__ */ new Set();
function tr(e, t, n) {
  var r = Xe(e), o = e, i = !De(e), s = t.attrs, c = s === void 0 ? Ee : s, a = t.componentId, p = a === void 0 ? function(b, I) {
    var d = typeof b != "string" ? "sc" : nt(b);
    Le[d] = (Le[d] || 0) + 1;
    var l = "".concat(d, "-").concat(xn("6.0.8" + d + Le[d]));
    return I ? "".concat(I, "-").concat(l) : l;
  }(t.displayName, t.parentComponentId) : a, m = t.displayName, f = m === void 0 ? function(b) {
    return De(b) ? "styled.".concat(b) : "Styled(".concat(It(b), ")");
  }(e) : m, g = t.displayName && t.componentId ? "".concat(nt(t.displayName), "-").concat(t.componentId) : t.componentId || p, y = r && o.attrs ? o.attrs.concat(c).filter(Boolean) : c, w = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var M = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var j = t.shouldForwardProp;
      w = function(b, I) {
        return M(b, I) && j(b, I);
      };
    } else
      w = M;
  }
  var x = new er(n, g, r ? o.componentStyle : void 0);
  function S(b, I) {
    return function(d, l, G) {
      var U = d.attrs, Rt = d.componentStyle, Yt = d.defaultProps, Wt = d.foldedComponentIds, Ke = d.styledComponentId, Gt = d.target, Ft = ue.useContext(zt), Zt = ut(), Ne = d.shouldForwardProp || Zt.shouldForwardProp;
      process.env.NODE_ENV !== "production" && qe(Ke);
      var R = function(le, se, pe) {
        for (var X, F = k(k({}, se), { className: void 0, theme: pe }), je = 0; je < le.length; je += 1) {
          var de = ee(X = le[je]) ? X(F) : X;
          for (var Y in de)
            F[Y] = Y === "className" ? Q(F[Y], de[Y]) : Y === "style" ? k(k({}, F[Y]), de[Y]) : de[Y];
        }
        return se.className && (F.className = Q(F.className, se.className)), F;
      }(U, l, bn(l, Ft, Yt) || $), oe = R.as || Gt, ie = {};
      for (var P in R)
        R[P] === void 0 || P[0] === "$" || P === "as" || P === "theme" || (P === "forwardedAs" ? ie.as = R.forwardedAs : Ne && !Ne(P, oe) || (ie[P] = R[P], Ne || process.env.NODE_ENV !== "development" || qt(P) || dt.has(P) || !We.has(oe) || (dt.add(P), console.warn('styled-components: it looks like an unknown prop "'.concat(P, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Ce = function(le, se) {
        var pe = ut(), X = le.generateAndInjectStyles(se, pe.styleSheet, pe.stylis);
        return process.env.NODE_ENV !== "production" && qe(X), X;
      }(Rt, R);
      process.env.NODE_ENV !== "production" && d.warnTooManyClasses && d.warnTooManyClasses(Ce);
      var ke = Q(Wt, Ke);
      return Ce && (ke += " " + Ce), R.className && (ke += " " + R.className), ie[De(oe) && !We.has(oe) ? "class" : "className"] = ke, ie.ref = G, Bt(oe, ie);
    }(A, b, I);
  }
  process.env.NODE_ENV !== "production" && (S.displayName = f);
  var A = ue.forwardRef(S);
  return A.attrs = y, A.componentStyle = x, A.shouldForwardProp = w, process.env.NODE_ENV !== "production" && (A.displayName = f), A.foldedComponentIds = r ? Q(o.foldedComponentIds, o.styledComponentId) : "", A.styledComponentId = g, A.target = r ? o.target : e, Object.defineProperty(A, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(b) {
    this._foldedDefaultProps = r ? function(I) {
      for (var d = [], l = 1; l < arguments.length; l++)
        d[l - 1] = arguments[l];
      for (var G = 0, U = d; G < U.length; G++)
        Fe(I, U[G], !0);
      return I;
    }({}, o.defaultProps, b) : b;
  } }), process.env.NODE_ENV !== "production" && (wn(f, g), A.warnTooManyClasses = function(b, I) {
    var d = {}, l = !1;
    return function(G) {
      if (!l && (d[G] = !0, Object.keys(d).length >= 200)) {
        var U = I ? ' with the id of "'.concat(I, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(b).concat(U, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), l = !0, d = {};
      }
    };
  }(f, g)), Je(A, function() {
    return ".".concat(A.styledComponentId);
  }), i && Nt(A, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), A;
}
function ft(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var ht = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function nr(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  if (ee(e) || te(e)) {
    var r = e;
    return ht(H(ft(Ee, K([r], t, !0))));
  }
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string" ? H(o) : ht(H(ft(o, t)));
}
function Qe(e, t, n) {
  if (n === void 0 && (n = $), !t)
    throw re(1, t);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++)
      i[s - 1] = arguments[s];
    return e(t, n, nr.apply(void 0, K([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Qe(e, t, k(k({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Qe(e, t, k(k({}, n), o));
  }, r;
}
var Lt = function(e) {
  return Qe(tr, e);
}, Ot = Lt;
We.forEach(function(e) {
  Ot[e] = Lt(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var me = "__sc-".concat(V, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[me] || (window[me] = 0), window[me] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[me] += 1);
function rr(e) {
  const [t, n] = mt(0);
  return /* @__PURE__ */ Be(or, { onClick: () => n(t + 1), children: [
    t,
    " ",
    e.text ? e.text : "Clicks"
  ] });
}
const or = Ot.button`
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border: 0;
`, ir = "data:image/png;base64,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";
function sr() {
  return /* @__PURE__ */ N("div", { children: /* @__PURE__ */ N("img", { src: ir }) });
}
const ar = "_label_p6yqr_1", cr = {
  label: ar
};
function ur(e) {
  return /* @__PURE__ */ N("label", { className: cr.label, children: e.text ? e.text : "Sample" });
}
const lr = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjMxLjg4IiBoZWlnaHQ9IjMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjU2IDI1NyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJJY29uaWZ5SWQxODEzMDg4ZmUxZmJjMDFmYjQ2NiIgeDE9Ii0uODI4JSIgeDI9IjU3LjYzNiUiIHkxPSI3LjY1MiUiIHkyPSI3OC40MTElIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNDFEMUZGIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQkQzNEZFIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9Ikljb25pZnlJZDE4MTMwODhmZTFmYmMwMWZiNDY3IiB4MT0iNDMuMzc2JSIgeDI9IjUwLjMxNiUiIHkxPSIyLjI0MiUiIHkyPSI4OS4wMyUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkVBODMiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjguMzMzJSIgc3RvcC1jb2xvcj0iI0ZGREQzNSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0ZGQTgwMCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGZpbGw9InVybCgjSWNvbmlmeUlkMTgxMzA4OGZlMWZiYzAxZmI0NjYpIiBkPSJNMjU1LjE1MyAzNy45MzhMMTM0Ljg5NyAyNTIuOTc2Yy0yLjQ4MyA0LjQ0LTguODYyIDQuNDY2LTExLjM4Mi4wNDhMLjg3NSAzNy45NThjLTIuNzQ2LTQuODE0IDEuMzcxLTEwLjY0NiA2LjgyNy05LjY3bDEyMC4zODUgMjEuNTE3YTYuNTM3IDYuNTM3IDAgMCAwIDIuMzIyLS4wMDRsMTE3Ljg2Ny0yMS40ODNjNS40MzgtLjk5MSA5LjU3NCA0Ljc5NiA2Ljg3NyA5LjYyWiI+PC9wYXRoPjxwYXRoIGZpbGw9InVybCgjSWNvbmlmeUlkMTgxMzA4OGZlMWZiYzAxZmI0NjcpIiBkPSJNMTg1LjQzMi4wNjNMOTYuNDQgMTcuNTAxYTMuMjY4IDMuMjY4IDAgMCAwLTIuNjM0IDMuMDE0bC01LjQ3NCA5Mi40NTZhMy4yNjggMy4yNjggMCAwIDAgMy45OTcgMy4zNzhsMjQuNzc3LTUuNzE4YzIuMzE4LS41MzUgNC40MTMgMS41MDcgMy45MzYgMy44MzhsLTcuMzYxIDM2LjA0N2MtLjQ5NSAyLjQyNiAxLjc4MiA0LjUgNC4xNTEgMy43OGwxNS4zMDQtNC42NDljMi4zNzItLjcyIDQuNjUyIDEuMzYgNC4xNSAzLjc4OGwtMTEuNjk4IDU2LjYyMWMtLjczMiAzLjU0MiAzLjk3OSA1LjQ3MyA1Ljk0MyAyLjQzN2wxLjMxMy0yLjAyOGw3Mi41MTYtMTQ0LjcyYzEuMjE1LTIuNDIzLS44OC01LjE4Ni0zLjU0LTQuNjcybC0yNS41MDUgNC45MjJjLTIuMzk2LjQ2Mi00LjQzNS0xLjc3LTMuNzU5LTQuMTE0bDE2LjY0Ni01Ny43MDVjLjY3Ny0yLjM1LTEuMzctNC41ODMtMy43NjktNC4xMTNaIj48L3BhdGg+PC9zdmc+";
function pr() {
  return /* @__PURE__ */ N("div", { children: /* @__PURE__ */ N("img", { src: lr, alt: "Your SVG" }) });
}
const dr = (e) => /* @__PURE__ */ D.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", className: "iconify iconify--logos", width: 31.88, height: 32, preserveAspectRatio: "xMidYMid meet", viewBox: "0 0 256 257", ...e }, /* @__PURE__ */ D.createElement("defs", null, /* @__PURE__ */ D.createElement("linearGradient", { id: "IconifyId1813088fe1fbc01fb466", x1: "-.828%", x2: "57.636%", y1: "7.652%", y2: "78.411%" }, /* @__PURE__ */ D.createElement("stop", { offset: "0%", stopColor: "#41D1FF" }), /* @__PURE__ */ D.createElement("stop", { offset: "100%", stopColor: "#BD34FE" })), /* @__PURE__ */ D.createElement("linearGradient", { id: "IconifyId1813088fe1fbc01fb467", x1: "43.376%", x2: "50.316%", y1: "2.242%", y2: "89.03%" }, /* @__PURE__ */ D.createElement("stop", { offset: "0%", stopColor: "#FFEA83" }), /* @__PURE__ */ D.createElement("stop", { offset: "8.333%", stopColor: "#FFDD35" }), /* @__PURE__ */ D.createElement("stop", { offset: "100%", stopColor: "#FFA800" }))), /* @__PURE__ */ D.createElement("path", { fill: "url(#IconifyId1813088fe1fbc01fb466)", d: "M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z" }), /* @__PURE__ */ D.createElement("path", { fill: "url(#IconifyId1813088fe1fbc01fb467)", d: "M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z" }));
function fr() {
  return /* @__PURE__ */ N("div", { children: /* @__PURE__ */ N(dr, {}) });
}
function yr() {
  return /* @__PURE__ */ Be("div", { children: [
    /* @__PURE__ */ N(Xt, {}),
    /* @__PURE__ */ N("br", {}),
    /* @__PURE__ */ N(ur, {}),
    /* @__PURE__ */ N("br", {}),
    /* @__PURE__ */ N(sr, {}),
    /* @__PURE__ */ N("br", {}),
    /* @__PURE__ */ N(pr, {}),
    /* @__PURE__ */ N("br", {}),
    /* @__PURE__ */ N(fr, {}),
    /* @__PURE__ */ N("br", {}),
    /* @__PURE__ */ N(rr, {})
  ] });
}
export {
  yr as TheMonorepoDemo
};

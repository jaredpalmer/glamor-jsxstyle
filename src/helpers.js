import { css } from 'glamor';

export const style = css;

export function select(selector, ...styles) {
  if (!selector) {
    return style(styles);
  }
  return css({ [selector]: styles });
}

export const $ = select;

export function parent(selector, ...styles) {
  return css({ [`${selector} &`]: styles });
}

export const merge = css;
export const compose = css;

export function media(query, ...rules) {
  return css({ [`@media ${query}`]: rules });
}

export function pseudo(selector, ...styles) {
  return css({ [selector]: styles });
}
export function active(x) {
  return pseudo(':active', x);
}

export function any(x) {
  return pseudo(':any', x);
}

export function checked(x) {
  return pseudo(':checked', x);
}

export function disabled(x) {
  return pseudo(':disabled', x);
}

export function empty(x) {
  return pseudo(':empty', x);
}

export function enabled(x) {
  return pseudo(':enabled', x);
}

export function _default(x) {
  return pseudo(':default', x); // note '_default' name
}

export function first(x) {
  return pseudo(':first', x);
}

export function firstChild(x) {
  return pseudo(':first-child', x);
}

export function firstOfType(x) {
  return pseudo(':first-of-type', x);
}

export function fullscreen(x) {
  return pseudo(':fullscreen', x);
}

export function focus(x) {
  return pseudo(':focus', x);
}

export function hover(x) {
  return pseudo(':hover', x);
}

export function indeterminate(x) {
  return pseudo(':indeterminate', x);
}

export function inRange(x) {
  return pseudo(':in-range', x);
}

export function invalid(x) {
  return pseudo(':invalid', x);
}

export function lastChild(x) {
  return pseudo(':last-child', x);
}

export function lastOfType(x) {
  return pseudo(':last-of-type', x);
}

export function left(x) {
  return pseudo(':left', x);
}

export function link(x) {
  return pseudo(':link', x);
}

export function onlyChild(x) {
  return pseudo(':only-child', x);
}

export function onlyOfType(x) {
  return pseudo(':only-of-type', x);
}

export function optional(x) {
  return pseudo(':optional', x);
}

export function outOfRange(x) {
  return pseudo(':out-of-range', x);
}

export function readOnly(x) {
  return pseudo(':read-only', x);
}

export function readWrite(x) {
  return pseudo(':read-write', x);
}

export function required(x) {
  return pseudo(':required', x);
}

export function right(x) {
  return pseudo(':right', x);
}

export function root(x) {
  return pseudo(':root', x);
}

export function scope(x) {
  return pseudo(':scope', x);
}

export function target(x) {
  return pseudo(':target', x);
}

export function valid(x) {
  return pseudo(':valid', x);
}

export function visited(x) {
  return pseudo(':visited', x);
}

// parameterized pseudoclasses
export function dir(p, x) {
  return pseudo(`:dir(${p})`, x);
}
export function lang(p, x) {
  return pseudo(`:lang(${p})`, x);
}
export function not(p, x) {
  // should this be a plugin?
  let selector = p.split(',').map(x => x.trim()).map(x => `:not(${x})`);
  if (selector.length === 1) {
    return pseudo(`:not(${p})`, x);
  }
  return select(selector.join(''), x);
}
export function nthChild(p, x) {
  return pseudo(`:nth-child(${p})`, x);
}
export function nthLastChild(p, x) {
  return pseudo(`:nth-last-child(${p})`, x);
}
export function nthLastOfType(p, x) {
  return pseudo(`:nth-last-of-type(${p})`, x);
}
export function nthOfType(p, x) {
  return pseudo(`:nth-of-type(${p})`, x);
}

// pseudoelements
export function after(x) {
  return pseudo('::after', x);
}
export function before(x) {
  return pseudo('::before', x);
}
export function firstLetter(x) {
  return pseudo('::first-letter', x);
}
export function firstLine(x) {
  return pseudo('::first-line', x);
}
export function selection(x) {
  return pseudo('::selection', x);
}
export function backdrop(x) {
  return pseudo('::backdrop', x);
}
export function placeholder(x) {
  // https://github.com/threepointone/glamor/issues/14
  return css({ '::placeholder': x });
}

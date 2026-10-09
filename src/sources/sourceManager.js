/**
 * Swap / crossfade between field, image, and lyric sources.
 * Phase 0 only has the generative field.
 */
export function createSourceManager(field) {
  let current = 'field';
  return {
    get current() { return current; },
    get field() { return field; },
    use(name) { current = name; },
    evaluate(t) { return field.evaluate(t); },
    resize(w, h) { return field.resize(w, h); },
  };
}

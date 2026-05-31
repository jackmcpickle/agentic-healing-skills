// Shared counter so each <Slide> gets a unique, source-order anchor id.
// Module state persists across renders, so reset it once per page render
// (call resetSlideIds() at the top of the page frontmatter).
let n = 0;

export function nextSlideId(): string {
    return `slide-${++n}`;
}

export function resetSlideIds(): void {
    n = 0;
}

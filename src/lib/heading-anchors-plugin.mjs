// A "§" link after every Markdown heading, pointing at the heading itself.
//
// A Sätteri hast plugin that needs the heading ids, so it must come after
// satteriHeadingIdsPlugin() in astro.config.mjs. The link is empty: the
// stylesheet draws the "§" (and shows it on hover), which keeps the sign out
// of the heading's own text.

export default {
  name: 'heading-anchors',
  element: {
    filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    visit(heading, ctx) {
      ctx.appendChild(heading, {
        type: 'element',
        tagName: 'a',
        properties: { className: ['anchor'], href: `#${heading.properties.id}`, ariaLabel: '§' },
        children: [],
      });
    },
  },
};

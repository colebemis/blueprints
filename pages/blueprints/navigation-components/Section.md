---
title: Section
path: navigation-components/section
---

A `Section` gets a `path` and optional children. If it has children it will
render those and prepend each child's `href` prop with the provided `path`.
This means that you can do:

```.jsx
<Section path="/section">
  <SectionLink href="foo">Links to /section/foo</SectionLink>
</Section>
```

If no children are provided, it renders a [`NavList`](/blueprints/nav-components/NavList) with the provided
`path`.

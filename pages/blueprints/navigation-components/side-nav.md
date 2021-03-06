---
title: SideNav
path: navigation-components/side-nav
---


Container component that takes children and nests them in a Router with layout styling. The `SideNav` of this site uses `Section` components to show both the Content Components and Navigation Components sections. See [the `Section` docs](/blueprints/navigation-components/section) for more details.

You may also use the `RouteMatch` components in your `SideNav` to conditionally show specific navigation links in the SideNav depending on where you are on the docs site. See [`RouteMatch` docs](/blueprints/navigation-components/section) for more details.


```.jsx
<SideNav>
  <RouteMatch path="/blueprints">
    <Section path="content-components" />
  </RouteMatch>
</SideNav>
```

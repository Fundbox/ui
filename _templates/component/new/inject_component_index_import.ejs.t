---
inject: true
to: src/components/index.js
skip_if: Fbx<%= name %> from
prepend: true
---
import Fbx<%= name %> from './Fbx<%= name %>';

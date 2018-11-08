---
inject: true
to: src/main.stories.js
skip_if: <%= name %>
after: "// Directives"
---
import Fbx<%= name %> from './directives/Fbx<%= name %>/Fbx<%= name %>.stories.js';
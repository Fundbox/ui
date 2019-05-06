---
inject: true
to: src/main.stories.js
skip_if: <%= name %>
after: '// Components'
---
import './components/Fbx<%= name %>/Fbx<%= name %>.stories.js'
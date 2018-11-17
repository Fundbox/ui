---
inject: true
to: src/components/index.js
skip_if: <%= name %>
after: 'export {'
---
  Fbx<%= name %>,

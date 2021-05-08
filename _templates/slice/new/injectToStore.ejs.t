---
inject: true
to: src/store/index.ts
skip_if: <%= name %>
after: "const reducer = {"
---
  <%= name %>: <%= name %>Reducer,
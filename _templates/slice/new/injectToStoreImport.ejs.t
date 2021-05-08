---
inject: true
to: src/store/index.ts
after: "import"
append: true
---
import { <%= name %>Reducer } from './slices/<%= name %>';
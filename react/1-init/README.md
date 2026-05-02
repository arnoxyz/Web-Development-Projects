# React + Vite
npm start in react/vite world:
```
npm run dev
```
## Summary
- Components and JSX
- Sending data from parent -> child (Unidirectional), using props ({name="defaultName"})
- Conditional rendering
- Keys (React stuff, gen keys using crypto.randomUUID() function)
- State
- React Hooks (prefix: use, e.g. useState)
## Deployed on gh pages: [react_mini](https://arnoxyz.github.io/react_min)
### For Deploy:
Set vite base path in vite.config.js
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/react_mini/",
  plugins: [react()],
})
```
Build the app, artifacts in the /dist folder
```
npm run build
```
Create new repo upload, /dist and publish as github page.

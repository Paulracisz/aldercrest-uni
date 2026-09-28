import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//
// IMPORTANT: `base` must match your GitHub repo name so that assets resolve
// correctly on GitHub Pages (https://<username>.github.io/<repo-name>/).
// If you rename the repo, update this to match.
export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/Paulracisz/aldercrest-uni',
})

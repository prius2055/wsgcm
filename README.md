# WSGCM Website (React + Vite)
```
npm install
npm run dev      # local preview
npm run build    # production build in /dist (Netlify-ready; public/_redirects is included)
```
- Replace every `[bracketed]` placeholder in `src/data/content.js` with verified church details.
- Replace `ImagePlaceholder` usages with real photos and `VideoPlaceholder` with a YouTube/Vimeo embed.
- Forms show the confirmation message only. Connect `onSubmit` in `DynamicForm` to a form service (Netlify Forms, Formspree, etc.).
- All doctrine, giving and privacy wording must be approved by church leadership before launch.

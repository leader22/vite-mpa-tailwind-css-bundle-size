# vite-mpa-tailwind-css-bundle-size

```
$ npm run build

> vite-mpa-tailwind-css-bundle-size@1.0.0 build
> vite build

vite v2.5.0 building for production...
transforming (17) node_modules/react/cjs/react.production.min.js
warn - You have enabled the JIT engine which is currently in preview.
warn - Preview features are not covered by semver, may introduce breaking changes, and can change at any time.
✓ 29 modules transformed.
dist/app1/index.html                             0.45 KiB
dist/app2/index.html                             0.45 KiB
dist/assets/modulepreload-polyfill.b7f2da20.js   0.69 KiB / brotli: 0.32 KiB
dist/assets/app2.de9c9aef.js                     0.84 KiB / brotli: 0.38 KiB
dist/assets/app1.1540d493.js                     3.51 KiB / brotli: 1.08 KiB
dist/assets/app2.74ba676f.css                    8.40 KiB / brotli: 2.14 KiB
dist/assets/app1.e7a3cdc9.css                    8.40 KiB / brotli: 2.13 KiB
dist/assets/vendor.3d9c5d49.js                   127.59 KiB / brotli: 36.08 KiB
```

As shown above, `app1.css` and `app2.css` have the same size.

Even though `app2` only have a few class usage...😢

As a work-around, you need to overwrite bundled assets by Vite like this to optimize.

```
NODE_ENV=production ./node_modules/.bin/tailwindcss -i ./app2/style.css -o ./dist/assets/app2.74ba676f.css --minify --purge ./app2/**/*.jsx
```

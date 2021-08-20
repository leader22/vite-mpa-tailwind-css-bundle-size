# vite-css-modules

```
$ npm run build

> vite-mpa-tailwind-css-bundle-size@1.0.0 build
> vite build

vite v2.5.0 building for production...
transforming (20) node_modules/object-assign/index.js
warn - You have enabled the JIT engine which is currently in preview.
warn - Preview features are not covered by semver, may introduce breaking changes, and can change at any time.
✓ 29 modules transformed.
dist/app2/index.html                             0.43 KiB
dist/app1/index.html                             0.43 KiB
dist/assets/modulepreload-polyfill.b7f2da20.js   0.69 KiB / brotli: 0.32 KiB
dist/assets/app2.bb482d2d.js                     0.84 KiB / brotli: 0.38 KiB
dist/assets/app1.2c2f52a6.js                     1.93 KiB / brotli: 0.65 KiB
dist/assets/app2.dc7792bd.css                    7.11 KiB / brotli: 1.88 KiB
dist/assets/app1.1a5b9a74.css                    7.11 KiB / brotli: 1.88 KiB
dist/assets/vendor.3d9c5d49.js                   127.59 KiB / brotli: 36.08 KiB
```

As shown above, `app1.css` and `app2.css` have the same size.

Even though `app2` only have a few class usage...😢

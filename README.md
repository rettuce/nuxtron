# Nuxt3 ssr + Electron

### docs

http://blog.rettuce.com/nuxt3/nuxt3-ssr-electron/

### modules

```bash
"electron": "^22.0.0",
"electron-packager": "^17.1.1",
"npm-run-all": "^4.1.5",
"nuxt": "3.0.0"
```

### scripts

```bash
# yarn
$ yarn install

# nuxt dev + electron browser
$ yarn dev
# or
# nuxt dev only
$ yarn nuxt:dev

# nuxt build (for before electron:packing)
$ yarn nuxt:build

# electron dev
$ yarn electron:start

# packing for production
$ yarn pkg # for mac+win
$ yarn pkg:mac
$ yarn pkg:win # not tried.

```

---
to: packages/<%= name %>/package.json
---
{
  "name": "@xp.css/<%= name %>",
  "version": "0.0.0",
  "type": "module",
  "exports": {
    "require": "./dist/<%= name %>.cjs",
    "default": "./dist/<%= name %>.modern.js"
  },
  "main": "./dist/<%= name %>.cjs",
  "module": "./dist/<%= name %>.module.js",
  "unpkg": "./dist/<%= name %>.umd.js",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "microbundle --sourcemap false"
  },
  "dependencies": {
    "react": "17.0.2"
  },
  "devDependencies": {
    "@types/react": "17.0.2",
    "typescript": "^4.6.4"
  }
}

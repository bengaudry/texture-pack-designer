# Texture pack designer


## 👀 Overview

Texture pack designer is a free software that allows minecraft users (Java version only for now) to create their own texture packs easily with a lot of tools such as in-app texture modification, visual scripting...

## 🛫 Quick start

```shell
git clone https://github.com/bengaudry/texture-pack-designer
cd texture-pack-designer
npm install
npm run dev
```

## 🖥️ Technologies

This project uses some libraries, frameworks and bundlers such as :
- React
- TypeScript
- Electron
- Sass
- Vite

## 📦 Bundle

To bundle the app, run these commands in the project folder : 

```sh
npm run build
npm i -g electron-packager
electron-packager ./dist texture-pack-designer --platform=win32 --arch=x64
```

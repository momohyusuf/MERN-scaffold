# MERN SCAFFOLD

mern-scaffold is a CLI tool that helps you to quickly develop basic boilerplate code for your MERN app.
You can generate boilerplate code for your Frontend or Backend.
You can also generate them as a full stack project.

# Installation

By using [npm](http://npmjs.org) (the recommended way):

npm install -g mern-scaffold

````

mern-scaffold will be installed globally to your system path.

# Usage

After downloading, on you Command line just type

```bash
mern-scaffold
````

# Frontend app

The frontend uses vite-plugin-react-swc
[![vite-plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc.git)]

Speed up your Vite dev server with [SWC](https://swc.rs/)

- ✅ A fast Fast Refresh (~20x faster than Babel)
- ✅ Enable [automatic JSX runtime](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)

The following folders and files will be generated

```ts
- 📂 layouts
- 📂 pages
- 📂 public
- 📂 src
- 📄 .env
- 📄 .eslintrc.cjs
- 📄 .gitignore
- 📄 index.html
- 📄 package.json
- 📄 postcss.config.js
- 📄 README.MD
- 📄 tailwind.config.js
- 📄 vite.config.js
```

## Extra default packages

The frontend also comes with the following default packages installed:

- Tailwindcss [TailwindCSS](https://tailwindcss.com/)
- React router dom [React router](https://reactrouter.com/)
- Validator [validator](https://www.npmjs.com/package/validator/)
- Axios [axios](https://www.npmjs.com/package/axios/)

## Component library

You can select a component library to add
The two options presently supported are

- Ant Design [antd](https://ant.design/)
- Material UI [MUI](https://mui.com/)

# The Backend

The backend contains basic boilerplate code for an express app

The following folders and files will be generated

```ts
- 📂 config
- 📂 controllers
- 📂 middleware
- 📂 model
- 📂 routes
- 📂 utils
- 📂 public
- 📄 .env
- 📄 .gitignore
- 📄 index.js
- 📄 package.json
- 📄 README.MD
```

The backed also comes with the following default dependencies installed:

- Bcrypt [bcrypt](https://www.npmjs.com/package/bcrypt/)
- Cors [cors](https://www.npmjs.com/package/cors/)
- Dotenv [React router](https://reactrouter.com/)
- Express [express](https://www.npmjs.com/package/express/)
- Express async Errors [express-async-errors](https://www.npmjs.com/package/express-async-errors/)
- Json web token [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken/)
- Mongoose [mongoose](https://www.npmjs.com/package/mongoose/)
- Morgan [morgan](https://www.npmjs.com/package/morgan/)
- Validator [validator](https://www.npmjs.com/package/validator/)

# Full-stack

This consist of:

- Everything in frontend
- Everything in Backend

# Starting Application

After The respected folders has been generated run

```bash
cd folder_name
npm install
npm run dev
```

# support

If you would like to support me, you can [buy me a coffee ☕](https://www.buymeacoffee.com/momoh/)

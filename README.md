# Project objectives: Build question test app; familiarize yourself with using React, Vite.

# Guild to deploy React project to GithubPage

## Config the Vite base

Remember to configure vite base to avoid path errors

```javascript
// vite.config.js
export default defineConfig({
  base: "./",
})
```

### Build the static files

In the terminal: 
 
```bash
npm run build
```

Now u can see directory /dist. 

### Deploy the static files

In the terminal dowload: 

```bash
npm i -D gh-pages
```

Then add to package.json:

```javascript
// package.json
"scripts": {
  "deploy": "gh-pages -d dist -b your_branch_to_deploy_statics"
}
```

Run this command in the terminal:

```bash
npm run deploy
```

We have done it. See the result in the Deployment path!
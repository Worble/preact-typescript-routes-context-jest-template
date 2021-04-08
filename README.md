# Install Dependencies

`npm i`

# Run Local Dev Server

`npm run serve`

# Run Tests

`npm run test`

# Build for Production

`npm run build`

# Ditching IE11

- Open `babel.config.js`
- Update targets to a browserslist query that doesn't include IE11 
    - e.g "> 0.5%, not IE 11"
    - See https://github.com/browserslist/browserslist#queries
- Remove `modules: "cjs"` from `"@babel/preset-env"` 
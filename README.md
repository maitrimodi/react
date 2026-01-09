# React Brushup ⏣

# Parcel

- Dev Build
- Local Server
- HMR - Hot Module Reload
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Content Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Transpilation
- Different build for dev and prod bundles

/\*\*

- Header
- - Logo
- - Nav items
- Body
- - Search
- - RestaurantContainer
- - RestaurantCard
-      - Img
-      - Name of res, Star rating, cuisine, delivery time
- Footer
- - CopyRight
- - Links
- - Address
- - Contact
    \*/

// React.createElement => Object => HTMLElement(render)

Two types of Export/Import

- Default Export/Import
  export default Component;
  import Component from "path"

- Named Export/Import
  export const Component
  import { Component } from "path";

# React Hooks

(Normal JS utility functions)

- useState()
- useEffect()

# 2 types of Routing in web apps

- Client side routing
- Server side routing(when you make a network call and aboutUs.html page is coming from server )

# Redux Toolkit

- Install @reduxjs/toolkit & react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector

# Types of testing (developer)

- Unit Testing (testing a single unit of the code e.g. Header)
- Integration Testing (testing the integration of the component e.g. search)
- End to End Testing - e2e testing (user) (Selenium, cypress, Puppeteer)

# Setting up testing in our app

- install React Testing Library
- install jest
- install babel dependencies
- configure babel(babel.config.js)
- configure parcel config file to disable default babel transpilation(.parcelrc)
- Jest configuration ( npm init jest@latest )
- Install JSDOM library
- Install @babel/preset-react to make JSX work in test cases
- Include @babel/preset-react inside my babel config.
- Install @testing-library/jest-dom

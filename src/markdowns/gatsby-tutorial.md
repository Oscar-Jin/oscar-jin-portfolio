---
title: "Gatsby Tutorial"
category: "Gatsby"
type: "Tutorial"
---


# Gatsby Tutorial

## 0. Set Up Your Development Enviroment

### Install

✓ Node.js 

✓ Git

✓ Gatsby CLI

`npm install -g gatsby-cli`

## 1. Get to Know Gatsby Building Blocks


```bash
gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world

gatsby new [SITE_DIRECTORY_NAME] [URL_OF_STARTER_GITHUB_REPO]
```

- 👏 `gatsby develop`
- 👏 hot reload
- 👏 page component 
- 👏 sub component 
- 👏 `<Link />`
- 👏 `gatsby build -> surge public/`


## 2. Introduction to Styling in Gatsby

### Using global styles (standard CSS)

- 👏 gatsby-browser.js
- 👏 import & require👌

### Using component-scoped CSS Modules

- 👏 foo.module.css
- 👏 `import style from "" --> style.avatar`
- 👏 CSS-in-JS

## 3. Creating Nested Layout Components

### Using Gatsby plugins

- 👏 plugins
- 👏 Typography.js
- 👏 gatsby-config.js

### Creating layout components

- 👏 layout component

## 4. Data in Gatsby 

- markdown blog
- - graph ql, markdown support

- emotion

- 👏 siteMetadata
- 👏 `graphql query {}`

> page queries live **outside** of the component definition - by convention at the **end** of a page component file - and are only available on **page components**. 

## 5. Source Plugins 

- 🥧 source plugin

- 👏 GraphiQL

> source plugins fetch data from their source

- 👏 `npm install gatsby-source-filesystem`

## 6. Transformer plugins

- 🥧 transformer plugin

source plug --> transformer plug

data sourcing --> data transformation

### Steps

- 🍙 sweet-pandas-eating-sweets.md
- 🍙 `npm install gatsby-transformer-remark`
- 🍙 GraphiQL --> `allMarkdownRemark`
- 🍙 `graphql query{...}`


## 7. Programatically Create Pages from Data

- 🥧 data layer 

- 👏 slug (path)
- 👏 `onCreateNode`
- 👏 `createPages`
- 👏 ++ gatsby-node.js











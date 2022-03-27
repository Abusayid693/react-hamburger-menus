# react-animated-navbars

<div>
  <img src="https://img.shields.io/npm/v/react-animated-navbars">
  <img src="https://img.shields.io/npm/l/react-animated-navbars">
  <img src="https://img.shields.io/node/v-lts/react-animated-navbars">
  <img src="https://img.shields.io/github/languages/top/abusayid693/react-animated-navbars">
  <img src="https://img.shields.io/github/release-date/abusayid693/react-animated-navbars">
</div>

Congrats! You just saved yourself hours of work by using react-animated-navbars library for creating animated navigation panels

## Demo
[Take a look at the live demo!](https://victorcazanave.github.io/react-svg-map/)

## Installation
### npm

`npm i react-animated-navbars`

### yarn

`yarn add react-animated-navbars`

## Usage


### Ghost Navbar

- Import `GhostNavbar` component from `react-animated-navbars`
- Import styles `react-animated-navbars/dist/react-animated-navbars.cjs.development.css`

```javascript
import React from "react";
import GhostNavbar from "react-animated-navbars";
import "react-animated-navbars/dist/react-animated-navbars.cjs.development.css";

const App = ()=>{
  <GhostNavbar>
   <ul>
    <li>ABOUT</li>
    <li>PROJECTS</li>
    <li>ELEMENTS</li>
    <li>CONTACT</li>
   </ul>
  </GhostNavbar>
}

```
### API 

#### Props

| Prop                | Type             | Default               | Description                                                                                                      |
| ------------------- | ---------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| children                 | ReactNode `(ul > li)`        | **optional**          | Navbar items    |
| className                 | string      | **optional**          | Base class    |
| styles                 | styles object      | **optional**          | Base styles    |

#### STYLES

| Property                | Type             | Default               | Description                                                                                                      |
| ------------------- | ---------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| navigation                 | React CSS Properties           | **optional**          | Base styling       |
| navigationButton                 | React CSS Properties           | **optional**          | Ghost button styling       |
| navigationIcon                 | React CSS Properties           | **optional**          | Ghost icon styling       |
| navigationBackground                 | React CSS Properties           | **optional**          | Panel background styling      |
| floatButtonSize                 | number          | **optional**          | Ghost button size (just number)      |
| floatButtonX                 | string          | `85%`      | Ghost button X position from right      |
| floatButtonY                 | string          | `2%`        | Ghost button Y position from top      |
| listHoverColor                 | [string, string]          | `[color 1, color 2]`       | Hover animation color     |
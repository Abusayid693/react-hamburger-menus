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
[Take a look at the live demo!](https://codesandbox.io/s/react-animated-navbars-9svje8?file=/src/App.js:0-821)

<img src="https://i.imgur.com/X19NnPi.png"/>

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
import { GhostNavbar } from "react-animated-navbars";
import "react-animated-navbars/dist/react-animated-navbars.cjs.development.css";

const App = () => {
  return (
    <>
      <GhostNavbar
        styles={{
          floatButtonSize: 0.9,
          floatButtonX: 6,
          floatButtonY: 4
        }}
      >
        <ul>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>ELEMENTS</li>
          <li>CONTACT</li>
        </ul>
      </GhostNavbar>
    </>
  );
};

export default App;
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
| floatButtonX                 | number          | `85`      | Ghost button X position from right      |
| floatButtonY                 | number          | `2`        | Ghost button Y position from top      |
| listHoverColor                 | [string, string]          | `[color 1, color 2]`       | Hover animation color     |
| font- Color, Size, HoverColor                 | **optional**         | string      |  common text styling     |

### Ghost Button

```javascript
import React from "react";
import { GhostButton } from "react-animated-navbars";
import "react-animated-navbars/dist/react-animated-navbars.cjs.development.css";

const App = () => {
  return (
    <>
      <GhostButton
        styles={{
          floatButtonX: 85,
          floatButtonY: 7
        }}
      >
          <ul>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>ELEMENTS</li>
          <li>CONTACT</li>
        </ul>
        </GhostButton>
    </>
  );
};

export default App;
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
| navigationCard                 | React CSS Properties           | **optional**          | Panel pop-up card styling      |
| floatButtonSize                 | number          | **optional**          | Ghost button size (just number)      |
| floatButtonX                 | number          | `85`      | Ghost button X position from right      |
| floatButtonY                 | number          | `2`        | Ghost button Y position from top      |
| font- Color, Size, HoverColor                 | **optional**         | string      |  common text styling     |
# react-hamburger-menus

<div>
  <img src="https://img.shields.io/npm/v/react-hamburger-menus">
  <img src="https://img.shields.io/npm/l/react-hamburger-menus">
  <img src="https://img.shields.io/node/v-lts/react-hamburger-menus">
  <img src="https://img.shields.io/github/languages/top/abusayid693/react-animated-navbars">
  <img src="https://img.shields.io/github/release-date/abusayid693/react-animated-navbars">
</div>

Congrats! You just saved yourself hours of work by using react-animated-navbars library for creating animated navigation panels

## Demo
[Take a look at the live demo!](https://codesandbox.io/s/react-hamburger-menu-9svje8?file=/src/App.js)

<img src="https://i.imgur.com/c888gsC.png"/>

## Installation
install it using npm or yarn to include it in your own React project

You will also need to import css modules in root your project before using it. `dist/react-animated-navbars.cjs.development.css`

### npm

`npm i react-hamburger-menus`

### yarn

`yarn add react-hamburger-menus`

## Usage

- [Ghost Navbar](#ghost-navbar)
- [Responsive Navbar](#responsive-navbar)
- [Ghost Button](#ghost-button)


# Ghost Navbar

- Import `GhostNavbar` component from `react-animated-navbars`
- Import styles `react-animated-navbars/dist/style.css`

```javascript
import React from "react";
import { GhostNavbar } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";

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

#### Using with next js/ Gatsby js or other React Framework for application routing


```js
import Link from 'next/link'
.
.
  <ul>
    <li>
      <Link href="/"> Home </Link>
    </li>  
    .
    .
```

### 🔨 API 

####  Props
Direct props use `ul` tag with `li` or else animations wont be applied

| Prop                | Type             | Default               | Description                                                                                                      |
| ------------------- | ---------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| children                 | ReactNode `(ul > li)`        | **optional**          | Navbar items    |
| className                 | string      | **optional**          | Base class    |
| styles                 | styles object      | **optional**          | Base styles    |
| iconHeight, iconWidth, iconColor                 | string          | **optional**          | Icon style     |
| floatButtonX                 | number          | `85`      | Ghost button X position from right      |
| floatButtonY                 | number          | `2`        | Ghost button Y position from top      |
| listHoverColor                 | [string, string]          | `[color 1, color 2]`       | Hover animation color     |
| fontColor, fontSize, fontHoverColor                 | **optional**         | string      |  common text styling     |
| zIndex                 | number          | **optional**          |  z-Index  (1000)      |
| leftReveal, rightReveal, backgroundBox, backgroundCircle                 | string         | `leftReveal backgroundCircle`       | annimation types    |

#### STYLES

If you want custom styles pass your CSS styling(`Javascript Object`) in Styles props using specific key mentioned below to apply styling correctly.

[Take a look at the live demo for custom styling!](https://codesandbox.io/s/react-hamburger-menu-9svje8?file=/src/GhostNavbar1.js)

| Property                | Type             | Default               | Description                                                                                                      |
| ------------------- | ---------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| navigation                 | React CSS Properties           | **optional**          | Base styling       |
| navigationButton                 | React CSS Properties           | **optional**          | Ghost button styling       |
| navigationIcon                 | React CSS Properties           | **optional**          | Ghost icon styling       |
| navigationBackground                 | React CSS Properties           | **optional**          | Panel background styling      |


# Responsive Navbar

#### Preview
Small screen

<img src="https://i.imgur.com/5jfZk9x.gif"/>

Large screen

<img src="https://i.imgur.com/wMaBYfA.png"/>

```javascript
import React from "react";
import { ResponsiveNavbar } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";

export const Default = () => (
  <ResponsiveNavbar
    logo={<p>Logo</p>}
    styles={{
      navigation: { fontFamily: 'Arial, Helvetica, sans-serif' },
      navigationBarSmall: {
        backgroundColor: 'aliceblue',
      },
      navigationCardSmall: {
        backgroundColor: 'aliceblue',
      },
    }}
  >
      <ul>
        <li>ABOUT</li>
        <li>PROJECTS</li>
        <li>ELEMENTS</li>
        <li>CONTACT</li>
      </ul>

  </ResponsiveNavbar>
);

```

### 🔨 API 

####  Props
Direct props use `ul` tag with `li` or else animations wont be applied

| Prop                | Type             | Default               | Description                                                                                                      |
| ------------------- | ---------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| children                 | ReactNode `(ul > li)`        | **optional**          | Navbar items    |
| className                 | string      | **optional**          | Base class    |
| styles                 | styles object      | **optional**          | Base styles    |
| logo                 | ReactNode      | **optional**          | Navbar logo   |
| iconColor, iconWidth,  iconHeight             | string          | **optional**          | Icon styling (***toggle***)     |
| zIndex                 | number          | **optional**          |  z-Index  (1000)      |
| animationDelay                 | number | string          | **optional**          |  animation delay      |
| toggleNavigationBarSmallValue       | boolean         | **optional**          |  manual toggle value     |
| toggleNavigationBarSmallFunction       | VoidFunction         | **optional**          |  manual toggle function     |

#### STYLES

If you want custom styles pass your CSS styling(`Javascript Object`) in Styles props using specific key mentioned below to apply styling correctly.

[Take a look at the live demo for custom styling!](https://codesandbox.io/s/react-hamburger-menu-9svje8?file=/src/GhostNavbar1.js)

| Property                | Type             | Default               | Description                                                                                                      |
| ------------------- | ---------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| navigation                 | React CSS Properties           | **optional**          | Base styling       |
| navigationBarSmall                | React CSS Properties           | **optional**          | Navbar small screen styling     |
| navigationButtonSmall                | React CSS Properties           | **optional**          | Navbar button small screen styling (***toggle***)     |
| navigationCardSmall                | React CSS Properties           | **optional**          | Navbar card small screen styling (***toggle***)     |
| navigationBarLarge                | React CSS Properties           | **optional**          | Navbar card large screen styling (***toggle***)     |

# Ghost Button

```javascript
import React from "react";
import { GhostButton } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";

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

#### Using icon or html (as icon)

```js
.
  <GhostButton
    icon={
      <p style={{ fontSize: '19px', borderBottom: '1px solid grey' }}>Users</p>
    }
    />
.
.
```


### 🔨 API 

#### Props

| Prop                | Type             | Default               | Description                                                                                                      |
| ------------------- | ---------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| children                 | ReactNode `(ul > li)`        | **optional**          | Navbar items    |
| className                 | string      | **optional**          | Base class    |
| styles                 | styles object      | **optional**          | Base styles    |
| icon                 | ReactNode      | **optional**          | custom icon   |
| floatButtonSize                 | number          | **optional**          | Ghost button size (just number)      |
| floatButtonX                 | number          | `85`      | Ghost button X position from right      |
| floatButtonY                 | number          | `2`        | Ghost button Y position from top      |
| fontColor, fontSize                 | **optional**         | string      |  common text styling     |
| iconHeight, iconWidth, iconColor                 | string          | **optional**          | Icon style     |
| listHoverColor                 | string         | `aqua`       | Hover animation color     |
| zIndex                 | number          | **optional**          |  z-Index  (1000)      |

#### STYLES
[Take a look at the live demo for custom styling!](https://codesandbox.io/s/react-hamburger-menu-9svje8?file=/src/GhostButton2.js)

| Property                | Type             | Default               | Description                                                                                                      |
| ------------------- | ---------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| navigation                 | React CSS Properties           | **optional**          | Base styling       |
| navigationButton                 | React CSS Properties           | **optional**          | Ghost button styling       |
| navigationIcon                 | React CSS Properties           | **optional**          | Ghost icon styling       |
| navigationCard                 | React CSS Properties           | **optional**          | Panel pop-up card styling      |


### 🐛 Bug Reporting
`The Library is in developing stage`
- Feel free to Open an [issue on GitHub](https://github.com/Abusayid693/react-hamburger-menus/issues) to request any additional features you might need for your use case.
- Connect with me on [LinkedIn](https://www.linkedin.com/in/rehan-choudhury-66842a164/). I'd love ❤️️ to hear where you are using this library.

### Browser support
Because this project uses CSS3 features, it's only meant for modern browsers. Some browsers currently fail to apply some of the animations correctly.

It is well tested for chrome, safari and firefox.


### 📜 License

This software is open source, licensed under the [MIT License](./LICENSE).
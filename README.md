# 🥞 Loopstarter Spool UIkit

[![Version](https://img.shields.io/npm/v/@loopstarter/special-uikit)](https://www.npmjs.com/package/@loopstarter/uikit) [![Size](https://img.shields.io/bundlephobia/min/@loopstarter/special-uikit)](https://www.npmjs.com/package/@loopstarter/special-uikit)

Loopstarter special-uikit is a set of React components and hooks used to build pages on Loopstarter's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @loopstarter/special-uikit`

## Setup

### Theme

Before using Loopstarter UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@loopstarter/special-uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@loopstarter/special-uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://loopstarter.github.io/loopstarter-uikit/)

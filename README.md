# React with Redux Boilerplate

<pre>/*
                 ┌────────────────────────┐
                 │                        │
                 │       S T O R E        │
                 │                        │
              ┌──│ object literal (POJO)  │◀──┐
              │  │ of all state and data  │   │
              │  │                        │   │
              │  └────────────────────────┘   │
              │                               │
              │                               │
              ▼                               │
 ┌────────────────────────┐                   │
 │                        │                   │
 │    P R O V I D E R     │                   │
 │                        │                   │
 │ makes store available  │                   │
 │   to all containers    │      ┌────────────────────────┐
 │                        │      │                        │
 └────────────────────────┘      │    R E D U C E R S     │
              │                  │                        │
              │                  │ functions that take in │
              ▼                  │   actions and update   │
 ┌────────────────────────┐      │   part of the state    │
 │                        │      │                        │
 │  C O N T A I N E R S   │      └────────────────────────┘
 │                        │                   ▲
 │  fetch app state data  │                   │
 │   and use to render    │                   │
 │       components       │                   │
 │                        │                   │
 └────────────────────────┘      ┌────────────────────────┐
              │                  │                        │
              │                  │     A C T I O N S      │
              ▼                  │                        │
 ┌────────────────────────┐      │ any change made to the │
 │                        │      │   applications state   │
 │  C O M P O N E N T S   │      │                        │
 │                        │      └────────────────────────┘
 │     react statless     │                   ▲
 │       components       │                   │
 │                        │                   │
 │                        │                   │
 └────────────────────────┘                   │
              │                               │
              │                               │
              │                               │
              │         ___                   │
              │        /\  \                  │
              │        \:\  \       ___       │
              │         \:\  \     /\__\      │
              │     ___  \:\  \   /:/__/      │
              └─▶  /\  \  \:\__\ /::\  \     ─┘
                   \:\  \ /:/  / \/\:\  \__
                    \:\  /:/  /   ~~\:\/\__\
                     \:\/:/  /       \::/  /
                      \::/  /        /:/  /
                       \/__/         \/__/

*/</pre>

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

It is forked from [buckyrobert's React-Redux-Boilerplate](https://github.com/buckyroberts/React-Redux-Boilerplate)

It has been changed/tweaked to:

- separate out the components as mentioned in Bucks video tutorials
- use [stateless components](https://javascriptplayground.com/blog/2017/03/functional-stateless-components-react/)
- removed Sass, replaced with [Rebass](http://jxnblk.com/rebass/) styled-components)
- use Bill Murry as the image [placeholders](http://www.fillmurray.com/) :)

<img width="318" alt="scrren shot" src="https://user-images.githubusercontent.com/1597761/32547194-556925c2-c479-11e7-87e6-85e88b5cee1d.png">

View build: https://eesur.github.io/React-Redux-Boilerplate

-------------------------

## Getting Started

Clone the repo:
```
> git clone https://github.com/eesur/React-Redux-Boilerplate.git
```
Goinside the downloaded directory:
```
> cd React-Redux-Boilerplate
```
To get started, first install all the necessary dependencies.
```
> npm install
```
Start the development server (changes will now update live in browser)
```
> npm run start
```

To view your project, go to: [http://localhost:3000/](http://localhost:3000/)


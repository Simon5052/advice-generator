# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)



## Overview

The challenge was to build out this advice generator app using the Advice Slip API and get it looking as close to the design as possible.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

*

### Screenshot

![image](https://user-images.githubusercontent.com/9645059/159400897-a0d28733-3e1d-42a3-875f-7448419f789e.png)




### Links

- Solution URL: [github](https://github.com/Simon5052/advice-generator/tree/feature-sabi-version)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

i created a react app using `npx create-react-app`
i then made a components folder to hold my card, button and content components.
within the card component, i wrapped a div around props.children, so that any component i wrap the card around it will get the children elements inside the card component.
i then moved on the styling the card and the content plus the button,
after i was done with the styling it was now time to make an api call to fetch the data.
i created a function to fetch the data, then i set it to state, then i created a side effect to load the data when the made loads once.
i set the data into an empty array and passed the data down through props so i can display them.
i then created an event to fetch and display new advice any time the a button is clicked

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library



### What I learned

I learned how to fetch data with async await and display them,

```js
const getAdviceData = async () => {
  const response = await fetch("url");
};
```



### Continued development

I will continue work on how to use async await effectively

## Author

- Frontend Mentor - [@SabiMantock](https://www.frontendmentor.io/profile/SabiMantock)


# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Links

- Solution URL: [here](https://github.com/rafaeldevvv/intro-component-with-signup-form)
- Live Site URL: [click here](https://rafaeldevvv.github.io/intro-component-with-signup-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- SASS/SCSS
- JAVASCRIPT

### What I learned

In this part, the paragraph has to be together with the input field, because DOM nodes are created even for the white spaces between nodes. Without doing this, the nextSibling property would not be able to access this paragraph and change its content to show the warning message.

```html
<div>
  <input
    type="text"
    name="firstName"
    autofocus
    placeholder="First Name"
    class="form-field"
  />
  <p class="error-message"></p>
</div>
```

I think this animation is pretty nice.

```scss
@keyframes swing {
  0% {
    transform: translateX(0px);
  }
  25% {
    transform: translateX(-25px);
  }
  50% {
    transform: translateX(25px);
  }
  75% {
    transform: translateX(-25px);
  }
  100% {
    transform: translateX(0px);
  }
}
```

### Continued development

I want to continue improving my ability to create utility classes. I think these make the code shorter and easier to read.

### Useful resources

- [Stack Overflow](https://stackoverflow.com/questions/54714117/how-to-select-next-sibling-of-a-certain-type-with-js) - This question helped me figure out how to access the error message paragraphs without creating tangledness. I tried a query selector with the string _"[name=${child.name}] ~ .error-message"_ to get the error message near an input field but then I did something even simpler.

## Author

- Frontend Mentor - [@rafaeldevvv](https://www.frontendmentor.io/profile/rafaeldevvv)
- Instagram - [@rafaeldevvv](https://www.instagram.com/rafaeldevvv)

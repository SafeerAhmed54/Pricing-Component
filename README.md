# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [AI Collaboration](#ai-collaboration)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard
- See pricing switch between annual and monthly when toggling

### Links

- Solution URL: [GitHub Repository](https://github.com)
- Live Site URL: [Live Demo](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (variables for colors, spacing, etc.)
- Flexbox for layout
- Mobile-first responsive design
- Vanilla JavaScript for toggle functionality
- CSS transitions for smooth animations

### What I learned

Working on this project, I gained experience with:

1. **Toggle Switch Implementation** - Building an accessible toggle component that works with both mouse and keyboard input
2. **CSS Custom Properties** - Using CSS variables to create a consistent color scheme and maintain DRY code
3. **Flexbox Layout** - Positioning pricing cards responsively and managing gaps between elements
4. **Event Handling in JavaScript** - Listening to checkbox changes and dynamically updating DOM content
5. **Accessibility** - Understanding the importance of proper `for` and `id` attributes for form labels

Key code example from the JavaScript toggle functionality:

```js
const toggle = document.getElementById('pricing-toggle');

toggle.addEventListener('change', function() {
    const headings = document.querySelectorAll('.card h1');
    if (this.checked) {
        headings[0].textContent = '$199.99';
        headings[1].textContent = '$249.99';
        headings[2].textContent = '$349.99';
    }
    else {
        headings[0].textContent = '$19.99';
        headings[1].textContent = '$24.99';
        headings[2].textContent = '$34.99';
    }  
});
```

### Continued development

In future projects, I want to focus on:

- Adding more complex animations when switching between pricing tiers
- Implementing form validation for a "Subscribe" button
- Creating a fully responsive mobile-first design with tablet breakpoints
- Exploring CSS Grid for more complex card layouts
- Building more interactive features with vanilla JavaScript

## AI Collaboration

I used GitHub Copilot as my AI assistant throughout this project:

- **Debugging CSS layout issues** - Got help identifying why utility classes were conflicting with flexbox layout
- **HTML accessibility** - Learned about proper label-input associations through guided questions
- **JavaScript debugging** - Used Copilot to verify the toggle functionality and understand event listeners
- **CSS review** - Had Copilot explain the toggle switch styles and suggest improvements

The AI helped me think through problems systematically rather than just providing answers, which strengthened my problem-solving skills.

## Author

- Safeer Ahmad Rana - [@safeerahmadrana](https://safeer-ahmad-rana.vercel.app/)

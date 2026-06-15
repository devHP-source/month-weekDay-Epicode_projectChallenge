# Epicode Bootstrap Travel Agency

## Overview
This is a front-end UI project built with Bootstrap 5.3. The primary goal of this exercise was to construct a fully responsive travel agency landing page by strictly adhering to Bootstrap's grid system (`container` > `row` > `col`) before applying custom graphics and details. 

The UI has been CUSTOMIZED to feature an "Apple-inspired" like design, focusing on clean typography, glassmorphism effects, and highly fluid CSS transitions.

## Features
* **Responsive Grid:** Complex grid layouts that adapt across mobile, tablet, and desktop viewports (e.g., fluidly shifting from 6 cards down to 2 cards per row).
* **Glassmorphism Navbar:** A fixed navigation bar utilizing `backdrop-filter` for a blurred effect, paired with a custom Vanilla JS ScrollSpy that highlights the user's active section.
* **Refined UI Transitions:** Replaced standard instant-hide mechanics with CSS Grid-based transitions (`1fr` to `0fr`) for buttery-smooth collapsing/expanding of sections.
* **Responsive Asymmetry:** A "Deal of the Day" section that handles a 66/33 layout split on desktop, while smoothly stacking and adjusting padding on mobile screens.
* **DOM Manipulation:** Included JavaScript functionality to count active destination cards, smoothly fade and clear cards from the DOM, and handle modal triggers.

## Tech Stack
* HTML5
* CSS3 
* Vanilla JavaScript
* Bootstrap 5.3 (Local files)
* [Ionicons](https://ionic.io/ionicons) (Chosen over Bootstrap Icons for consistent stroke weight and premium aesthetic)

## Project Structure
* `index.html` - The main markup containing the layout hierarchy.
* `styles.css` - CUSTOM STYLING, animation curves (`cubic-bezier`), shadow buffers, and layout overrides.
* `main.js` - Logic for section collapsing, DOM node counting, and Bootstrap modal instantiation.
* `/css/bootstrap.css` & `/js/bootstrap.bundle.js` - Core framework dependencies.

## Setup Instructions
1. Clone or download this repository to your local machine.
2. Ensure the local Bootstrap CSS and JS files are located in their respective `/css` and `/js` folders as referenced in the HTML.
3. Open `index.html` in any modern web browser. No build tools or local servers are required to run this project.

## Key Development Notes
* **ScrollSpy Layout Nav:** Nav-link active states rely on a micro `text-shadow` instead of `font-weight` adjustments. This prevents the navigation text from expanding and shifting the layout when a user scrolls down the page.
* **Shadow Buffering:** CUSTOM padding buffers were engineered into the collapse wrappers. This ensures that Bootstrap card shadows (`box-shadow`) are not clipped by `overflow: hidden` boundaries during the CSS Grid height transitions.
* **Specificity Control:** CUSTOM STYLES were integrated naturally into the cascade without the use of `!important` tags.

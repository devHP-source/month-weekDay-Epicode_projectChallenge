# Epicode - Web Design Course Mockup
### Module 3 • Week 3 Project

## Overview

This project is a responsive recreation of a modern e-learning platform inspired by the Geeks UI layout.
The goal of the assignment was to practice advanced HTML, CSS, Bootstrap, and JavaScript concepts by building a complete landing page with dynamic components and responsive behavior.
The application includes multiple sections such as a navigation bar, hero banner, featured benefits, course carousels, interactive course cards, and a custom profile dropdown menu.

---

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (Vanilla JS)
- Ionicons

---

## Features

### Responsive Layout
The entire page adapts to different screen sizes using Bootstrap's grid system and custom media queries.

### Dynamic Course Carousel
A custom JavaScript engine automatically adjusts the number of visible course cards based on the current viewport:

- Desktop: 4 cards
- Tablet: 3 cards
- Mobile: 2 cards

### Bookmark System
Users can save and remove courses using the bookmark button.

Features include:

- Toggle state management
- Icon updates
- Synchronization between duplicated carousel cards

### Course Card Pop-Out Effect
Inspired by streaming platforms such as Netflix and Prime Video.

When hovering over a course card:

- The card expands
- Additional course information becomes visible
- A smooth animation is displayed

### Profile Dropdown Menu
Custom dropdown functionality built with JavaScript.

Features include:

- Open/close toggle
- Automatic closing when clicking outside
- ESC key support

### Interactive UI Elements
Additional interactions include:

- Notification indicators
- Hover animations
- Carousel navigation controls
- Responsive navigation menu

---

## Learning Objectives

Through this project I practiced:

- Responsive Web Design
- Bootstrap Components
- DOM Manipulation
- Event Delegation
- Dynamic Rendering
- JavaScript State Management
- CSS Animations and Transitions
- User Interface Design Principles

---

## JavaScript Functionality

The project is organized into four main modules:

### initializeBookmarkToggle()

Handles:

- Bookmark activation
- Bookmark removal
- Icon state updates

### initializeResponsiveDeckEngine()

Handles:

- Carousel generation
- Responsive card grouping
- Window resize updates

### initializePopoutEngine()

Handles:

- Course card hover effects
- Dynamic card cloning
- Pop-out animations

### initializeProfileDropdown()

Handles:

- Dropdown visibility
- Outside-click detection
- Keyboard interactions

---

## Challenges Faced

Some of the most challenging parts of the project were:

- Keeping carousel cards synchronized after cloning
- Building a responsive carousel without external libraries
- Managing hover interactions without affecting performance
- Creating smooth pop-out animations while maintaining responsive behavior

---

## Future Improvements

Possible future enhancements include:

- Local Storage support for bookmarks
- Search and filtering system
- Course detail pages
- User authentication
- Backend integration
- Dark mode support

---

## Author

**devByPau**

Epicode - Full Stack Web Developer Course

Module 3 • Week 3

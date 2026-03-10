# NicheCheck

A rich, interactive React application designed to help users efficiently explore products through real-time search and smooth category filtering. 

## Features

- **Real-Time Search**: Case-insensitive live filtering of products by name.
- **Staggered Category Menu**: An animated side menu for exploring and applying product categories (Electronics, Clothing, Home), powered by GSAP.
- **Modern Typography & UI**: A custom-designed interface utilizing a specialized color palette (`#fdfcee`, `#839958`, `#d3968c`), fluid glassmorphic cards, and beautiful web fonts (*Vend Sans* for the main header, *Poiret One* for body copy).
- **Animated Title**: An eye-catching "ShinyText" effect applied to the "NicheCheck" header.
- **Component-Driven Architecture**: Clean functional React components, neatly organized logic, and state management using `useState`.

## Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Vanilla CSS, leveraging CSS Variables for consistent theming.
- **Animation**: GSAP (GreenSock Animation Platform) and Motion for complex orchestrations.

## Getting Started

Follow these instructions to run the project on your local machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed along with `npm`.

### Installation

1. **Clone the repository** (if you haven't already/if applicable) and navigate to the project root:
   ```bash
   cd "Internal project fullstack"
   ```

2. **Install all dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **View the app**:
   Open the Local URL provided in your terminal (usually `http://localhost:5173/`) in your browser to start exploring products!

## Project Structure

- `src/App.jsx`: Main application container, responsible for data filtering and state management.
- `src/data.js`: The initial dataset of products used within the app.
- `src/StaggeredMenu.jsx` & `src/StaggeredMenu.css`: An elegant sliding side menu component handling the category selection. 
- `src/ShinyText.jsx` & `src/ShinyText.css`: The sub-component providing the animated shimmer to the main title.
- `src/index.css`: Global styles, CSS resets, and card layouts.

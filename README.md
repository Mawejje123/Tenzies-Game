# Tenzies Game 🎲

**A fun, addictive dice game built with React!**

Roll until all 10 dice show the same number.  
Click a die to **freeze** it — then roll again until every die matches.  
Classic Tenzies gameplay — simple, satisfying, and surprisingly strategic.

[Live Demo → https://tenzies-game-w0k6.onrender.com](https://tenzies-game-w0k6.onrender.com)

## Why this project matters

This is one of my favorite React learning projects because it teaches:

- Managing complex state (array of objects with `id`, `value`, `isHeld`)
- Immutable updates with `.map()` and spread operator
- Conditional rendering & UI feedback (win state, button text change)
- Component composition (parent → child props & callbacks)
- Clean separation of concerns (game logic vs UI)

It’s a great showcase of **real React patterns** used in many production apps.

## Screenshots

### Game in progress
![Tenzies gameplay - dice with some held](https://github.com/Mawejje123/Tenzies-Game/blob/main/tenzies2.png)  

### You win!
![Tenzies win screen - all dice same and held](https://github.com/Mawejje123/Tenzies-Game/blob/main/tenzies.png)  

## Live Demo

🎮 Play right now:  
https://tenzies-game-w0k6.onrender.com

(First load might take 10–40 seconds)

## Tech Stack

- React (with hooks)
- Vite (fast dev server & build tool)
- nanoid (for unique die IDs)
- CSS (pure, no frameworks)
- Hosted on Render (free tier)

## How to Run Locally

1. **Clone the repo**
git clone https://github.com/Mawejje-Eliphaz/Tenzies.git
cd Tenzies
2. Install dependencies
npm install
3. Start development server
npm run dev→ Open http://localhost:5173 (or the port Vite shows)
4. Build for production (optional)Bashnpm run build

   ```bash
   git clone https://github.com/Mawejje-Eliphaz/Tenzies.git
   cd Tenzies

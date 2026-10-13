# Paradise Nursery Shopping Application

Paradise Nursery is a responsive houseplant shop where visitors can browse a curated catalogue, add plants to a Redux-powered cart, adjust quantities, and review their order total. The landing page introduces the nursery and its approach to plant quality and customer care.

## Features

- Landing page with a responsive garden photograph, welcome message, and working Get Started link.
- About section describing the company's mission, vision, plant benefits, quality, and customer support.
- Eighteen houseplants arranged across three categories, with images, descriptions, stable product IDs, and prices.
- Shared navigation and live cart quantity across the plant catalogue and cart.
- Cart quantity controls, item removal, line totals, grand total, empty-cart state, and a Coming Soon checkout message.

## Technology

- React and JavaScript
- Redux Toolkit and React Redux
- React Router
- Vite
- HTML and CSS
- Lucide icons

## Installation and Usage

Use Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To create a production build, run:

```bash
npm run build
```

The app starts on the landing page. Use Get Started to open `/plants`; the cart is available at `/cart`.

## Project Structure

```text
.
├── .gitignore        # Generated files excluded from Git
├── AboutUs.jsx       # Nursery story and commitments
├── App.css           # Global, landing, catalogue, and cart styles
├── App.jsx           # Landing page and application routes
├── CartItem.jsx      # Cart view and quantity controls
├── CartSlice.jsx     # Redux cart reducers and actions
├── Navbar.jsx        # Shared shop navigation and live cart count
├── package.json      # Dependencies and npm scripts
├── package-lock.json # Reproducible dependency versions
├── ProductList.jsx   # Categorized plant catalogue
├── index.html        # Vite HTML entry point
├── main.jsx          # React, Redux Provider, and router setup
├── plants.js         # Product data and plant photography URLs
├── store.js          # Redux store configuration
└── vite.config.js    # Vite configuration
```
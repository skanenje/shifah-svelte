# Shifah Hospital & Dialysis Center Website

A modern, responsive website for Shifah Hospital built with SvelteKit and Tailwind CSS v4.

## Features

- 🏥 Modern Material Design 3 aesthetic
- 📱 Fully responsive design
- ⚡ Fast SvelteKit-powered navigation
- 🎨 Custom design tokens matching hospital branding
- 🗺️ Interactive location map
- 📋 Appointment booking form
- 👨‍⚕️ Medical team showcase
- 🏗️ Bento grid layouts for services

## Pages

- **Home** (`/`) - Hero, about, services overview, doctors, appointment form
- **Services** (`/services`) - Detailed services and facilities information
- **Contact** (`/contact`) - Location map and contact form

## Tech Stack

- SvelteKit 2.x
- Tailwind CSS v4
- Google Fonts (Manrope & Inter)
- Material Symbols Icons

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design System

The site uses a custom Material Design 3 color palette with primary colors:
- Primary: `#004c58` (Teal)
- Primary Container: `#0c6574`
- Surface: `#fcf9f8` (Warm white)

Typography:
- Headlines: Manrope (bold, extrabold)
- Body: Inter (regular, medium, semibold)

## Project Structure

```
src/
├── lib/
│   └── components/
│       ├── About.svelte
│       ├── Appointment.svelte
│       ├── Doctors.svelte
│       ├── Facilities.svelte
│       ├── Footer.svelte
│       ├── Header.svelte
│       ├── Hero.svelte
│       ├── Location.svelte
│       ├── Partners.svelte
│       └── Services.svelte
├── routes/
│   ├── +layout.svelte
│   ├── +page.svelte
│   ├── services/
│   │   └── +page.svelte
│   └── contact/
│       └── +page.svelte
└── app.css
```

## License

© 2024 Shifah Hospital and Dialysis Center. All rights reserved.

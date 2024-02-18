# Next Spotify

This repository contains a Spotify clone built using **Next.js** and **TailwindCSS**. Users can log in with their Spotify account and view playlists, artists, and albums they follow.

## Key Features

- Song upload
- Stripe integration
- Sleek UI design with Tailwind
- Responsive layout for all devices
- Credential authentication with Supabase
- Github authentication integration
- File and image upload using Supabase storage
- Client form validation with react-hook-form
- Server error handling with react-toast
- Favorites system
- Playlists / Liked songs system
- Advanced Player component
- Stripe recurring payment integration
- Fetching data directly from the database in server React components (WITHOUT API!)

## Prerequisites

- Node version 14.x

## Installation

1. Clone this repository: `git clone https://github.com/ggmnjjbkkv/next-spotify-clone.git`
2. Navigate to the project directory: `cd next-spotify-clone`
3. Install dependencies: `npm install`

## Setup

1. Create an `.env` file with the following environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
2. Use the `database.sql` file to create the necessary tables (songs and liked_songs).

## Usage

1. Start the development server: `npm run dev`
2. Open your browser and visit [http://localhost:3000](http://localhost:3000)

## Deployment

For deployment, consider using platforms like Vercel or Netlify.

## Contribute

Contributions are welcome! Feel free to create a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

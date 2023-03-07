/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['m.media-amazon.com','image.tmdb.org']
  },
  env:{
    API_KEY_TMDB: process.env.API_KEY_TMDB,
    NEXT_PUBLIC_API_KEY_TMDB: process.env.NEXT_PUBLIC_API_KEY_TMDB,
  }
}

module.exports = nextConfig

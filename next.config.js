/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['m.media-amazon.com','image.tmdb.org']
  },
  env:{
    API_KEY_TMDB: 'dda84b4335fd6e6fc0efd05d5cf2bbc4',
    NEXT_PUBLIC_API_KEY_TMDB: 'dda84b4335fd6e6fc0efd05d5cf2bbc4',
  }
}

module.exports = nextConfig

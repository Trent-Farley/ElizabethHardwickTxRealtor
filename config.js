const dev = process.env.NODE_ENV !== 'production';
export const get_listings = dev ? 'http://localhost:8000/api/get_listings' : 'https://www.elizabethhardwickrealtor.com/.netlify/functions/next_api_get_listings'
export const server = dev ? 'http://localhost:3000' : 'https://projectpuma.netlify.app/.netlify/functions/next_api_get_listings';

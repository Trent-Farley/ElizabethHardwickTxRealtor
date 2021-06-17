const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://projectpuma.netlify.app/.netlify/functions/next_api_get_listings';
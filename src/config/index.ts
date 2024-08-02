const config = {
  GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY as string || 'AIzaSyDNvXnFCILW3tjoqVymLlSduiQN6VWBRjM',
  GOOGLE_MAPS_MAP_ID: process.env.GOOGLE_MAPS_MAP_ID as string || '76b36125cbfedc4f',
  API_URL: process.env.API_URL as string || 'http://localhost:3001',
}

export default config
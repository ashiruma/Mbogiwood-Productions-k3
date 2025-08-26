module.exports = {
  reactStrictMode: true,
  images: {
    // Allow images from any host for demo purposes. In production, lock this down to specific domains.
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' }
    ]
  }
};

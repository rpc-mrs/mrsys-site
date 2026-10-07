/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Если картинки лежат в public/ — эта секция не обязательна,
    // но если грузишь с внешних адресов — пропиши домены:
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // пока разрешаем все, потом сузишь
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // Принудительно статичный экспорт, если сайт не требует SSR
  // output: 'export', // раскомментируй, если сайт полностью статичный
};

export default nextConfig;

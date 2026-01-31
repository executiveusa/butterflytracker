import { useState, useEffect } from 'react';

interface UnsplashImage {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
}

export const useUnsplash = (query: string = 'monarch butterfly', count: number = 10) => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

        if (!accessKey) {
          // Fallback to static images if no API key
          setImages([
            {
              id: 'fallback-1',
              urls: {
                small: '/placeholder.svg',
                regular: '/placeholder.svg',
                full: '/placeholder.svg'
              },
              alt_description: 'Mariposa monarca en vuelo',
              user: { name: 'Monarch Tracker' }
            }
          ]);
          setLoading(false);
          return;
        }

        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${count}&orientation=landscape`,
          {
            headers: {
              Authorization: `Client-ID ${accessKey}`
            }
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }

        const data = await response.json();
        setImages(data.results);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        // Fallback images
        setImages([
          {
            id: 'fallback-1',
            urls: {
              small: '/placeholder.svg',
              regular: '/placeholder.svg',
              full: '/placeholder.svg'
            },
            alt_description: 'Mariposa monarca en vuelo',
            user: { name: 'Monarch Tracker' }
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, count]);

  return { images, loading, error };
};
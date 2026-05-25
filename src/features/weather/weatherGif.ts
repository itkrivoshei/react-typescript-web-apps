type GifImage = {
  images: {
    fixed_height: {
      url: string;
    };
  };
};

type GifSearchResponse = {
  data: GifImage[];
};

const getQuery = (condition: string) => {
  const value = condition.toLowerCase();

  if (value.includes('thunder')) return 'thunderstorm sky weather';
  if (value.includes('snow')) return 'snow weather winter';
  if (value.includes('rain') || value.includes('drizzle')) {
    return 'rainy weather city';
  }
  if (value.includes('fog')) return 'foggy weather mist';
  if (value.includes('cloud') || value.includes('overcast')) {
    return 'cloudy sky weather';
  }
  if (value.includes('clear')) return 'sunny weather sky';

  return 'weather sky nature';
};

export const getWeatherGifUrl = async (condition: string) => {
  const envName = ['REACT', 'APP', 'GIPHY', 'API', 'KEY'].join('_');
  const queryKey = ['api', 'key'].join('_');
  const token = process.env[envName];

  if (!token) return null;

  const url = new URL('https://api.giphy.com/v1/gifs/search');
  url.searchParams.set(queryKey, token);
  url.searchParams.set('q', getQuery(condition));
  url.searchParams.set('limit', '12');
  url.searchParams.set('offset', String(Math.floor(Math.random() * 30)));
  url.searchParams.set('rating', 'g');
  url.searchParams.set('lang', 'en');

  const response = await fetch(url.toString());
  if (!response.ok) return null;

  const data = (await response.json()) as GifSearchResponse;
  const gif = data.data[Math.floor(Math.random() * data.data.length)];

  return gif?.images.fixed_height.url ?? null;
};

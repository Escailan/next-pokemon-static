const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};

const toggleFavorite = (id: number) => {
  let favorites: number[] = pokemons();
  if (favorites.includes(id)) {
    favorites = favorites.filter((poke) => id !== poke);
  } else {
    favorites.push(id);
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const existsFavorite = (id: number): boolean => {
  if (typeof window === 'undefined') return false;
  let favorites: number[] = pokemons();
  return favorites.includes(id);
};

const toggle = { toggleFavorite, existsFavorite, pokemons };

export default toggle;

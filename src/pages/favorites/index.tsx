import { Layout } from '@/components/layouts';
import FavoritePokemons from '@/components/ui/FavoritePokemons';

import NoFavorites from '@/components/ui/NoFavorites';
import { localFavorites } from '@/utils';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Favoritos: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Favoritos">
      {favoritePokemons.length === 0 ? <NoFavorites /> : <FavoritePokemons pokemons={favoritePokemons} />}
    </Layout>
  );
};

export default Favoritos;

import React from 'react';
import { Card, Container, Grid, Image, Text } from '@nextui-org/react';
import FavoriteCardPokemon from './FavoriteCardPokemon';

interface Props {
  pokemons: number[];
}

const FavoritePokemons = ({ pokemons }: Props) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavoriteCardPokemon id={id} key={id} />
      ))}
    </Grid.Container>
  );
};

export default FavoritePokemons;

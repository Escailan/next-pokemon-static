import { Container, Image, Text } from '@nextui-org/react';
import React from 'react';

const NoFavorites = () => {
  return (
    <>
      <Container
        css={{
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100vh - 100px)',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>No hay favoritos</Text>
        <Image
          css={{ marginTop: 10, opacity: 0.75 }}
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/101.svg"
          alt="pokemon"
        />
      </Container>
    </>
  );
};

export default NoFavorites;

import { Layout } from '@/components/layouts';
import { Pokemon } from '@/interfaces';
import { localFavorites } from '@/utils';
import { getPokemonInfo } from '@/utils/getPokemonInfo';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React, { useEffect, useState } from 'react';

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorite, setIsInFavorite] = useState(false);
  useEffect(() => {
    setIsInFavorite(localFavorites.existsFavorite(pokemon.id));
  }, []);

  const onToggleFavorite = () => {
    console.log(pokemon.name);
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorite((prev) => !prev);
    if (!isInFavorite) {
      confetti({
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: { y: 0.1, x: 0.9 },
      });
    }
  };

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                alt="pokemon"
                width="100%"
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button color="gradient" ghost onPress={onToggleFavorite}>
                {isInFavorite ? 'Borrar de ' : 'Agregar a '}Favoritos
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex">
                <Image src={pokemon.sprites.front_default} alt="front" width={100} height={100} />
                <Image src={pokemon.sprites.back_default} alt="front" width={100} height={100} />
                <Image src={pokemon.sprites.front_shiny} alt="front" width={100} height={100} />
                <Image src={pokemon.sprites.back_shiny} alt="front" width={100} height={100} />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  let paths = [];
  for (let id = 1; id <= 151; id++) {
    paths.push({ params: { id: id.toString() } });
  }
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  return {
    props: {
      pokemon: await getPokemonInfo(id),
    }, // will be passed to the page component as props
  };
};

export default PokemonPage;

import { Link, Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import NextLink from 'next/link';

import React from 'react';

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        background: theme?.colors.gray400.value,
      }}>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        width={70}
        height={70}
        alt="Icono app"
      />
      <Text color="white" h2>
        P
      </Text>
      <NextLink href="/">
        <Text color="white" h3>
          okémon
        </Text>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites">
        <Text color="white">Favoritos</Text>
      </NextLink>
    </div>
  );
};

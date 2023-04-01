import Head from 'next/head';
import { FC, ReactElement } from 'react';
import { Navbar } from '../ui';

interface Props {
  children: ReactElement | ReactElement[];
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Marcelo" />
        <meta name="description" content={`Info pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Informacion sobre el pokemon ${title}`} />
        <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
        <meta
          property="og:image"
          content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png"
        />
      </Head>

      <Navbar />

      <main
        style={{
          padding: '0 20px',
        }}>
        {children}
      </main>
    </>
  );
};

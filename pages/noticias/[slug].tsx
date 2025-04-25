import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Layout from '../../components/Layout';

export default function Noticia({ noticia }: { noticia: { title: string } }) {
  return (
    <Layout>
      <h1>{noticia.title}</h1>
      {/* Conteúdo da notícia */}
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return { props: { noticia: { title: 'Título de exemplo' }}, revalidate: 60 };
};

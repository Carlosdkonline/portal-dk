import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Layout from '../../components/Layout';

export default function Espetaculo({ espetaculo }: { espetaculo: { title: string } }) {
  return (
    <Layout>
      <h1>{espetaculo.title}</h1>
      {/* Detalhes do espetáculo */}
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return { props: { espetaculo: { title: 'Título de exemplo' }}, revalidate: 60 };
};

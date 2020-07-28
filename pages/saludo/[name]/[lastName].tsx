import React from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

interface TextProps {
  name: string;
  lastName: string;
}

const Text = ({name, lastName}: TextProps): JSX.Element => {
  const text = `Hola ${name} ${lastName}`;
  const estilo = {
    color: '#ff0',
  };
  
  return (
    <div>
      <h1 style={estilo}>{text}</h1>
      <Link href='/'>
        <a href="/">
          Ir a home
        </a>
      </Link>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<TextProps> = async ({params}) => {  
  return {
    props: {
      name: `${params.name}`,
      lastName: `${params.lastName}`,
    },
  };
};

export default Text;
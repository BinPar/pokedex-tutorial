import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  // eslint-disable-next-line no-console
  console.log('Health Check...');
  context.res.end('OK');
  return {
    props: {
    },
  };
};

export default (): JSX.Element => null;

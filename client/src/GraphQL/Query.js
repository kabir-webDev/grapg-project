import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const getALL = gql`
  {
    getAll {
      id
      title
      description
    }
  }
`;

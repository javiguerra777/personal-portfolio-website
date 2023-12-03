import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
  query {
    projects {
      _id
      name
      deployedLink
      description
      image
      link
    }
  }
`;
export default {};

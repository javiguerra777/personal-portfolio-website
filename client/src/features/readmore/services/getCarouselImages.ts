import { gql } from '@apollo/client';

export const GET_CAROUSEL_IMAGES = gql`
  query filesInCarouselImages {
    filesInCarouselImages {
      public_id
      format
      version
      url
      secure_url
    }
  }
`;

export default {};

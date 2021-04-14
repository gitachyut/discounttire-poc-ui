import { gql, useQuery } from '@apollo/client';
import { POLL_INTERVAL_MS } from '../../config/config';

const query = gql`
    query Categories {
      Categories {
        name
        id
        Products {
          main_image
          name
          price
          seo_description
          description
        }
      }
    }
`;

export default function useCategories() {
  const { error, data, loading } = useQuery(query, {
    pollInterval: POLL_INTERVAL_MS
  });
  return { error, data, loading };
}
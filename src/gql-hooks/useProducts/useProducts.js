import { gql, useQuery } from '@apollo/client';
import { POLL_INTERVAL_MS } from '../../config/config';

const query = gql`
  query Products {
    Products {
      Images {
        image_url
      }
      description
      id
      main_image
      name
      price
      seo_description
      Category {
        name
      }
    }
  }
`;

export default function useProducts() {
  const { error, data, refetch, loading: isLoading } = useQuery(query, {
    pollInterval: POLL_INTERVAL_MS
  });
  return { isLoading, error, data, refetch };
}
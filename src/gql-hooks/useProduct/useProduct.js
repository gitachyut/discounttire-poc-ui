import { gql, useQuery } from '@apollo/client';
import { POLL_INTERVAL_MS } from '../../config/config';

const query = gql`
    query Products_by_pk($id: Int!) {
      Products_by_pk(id: $id) {
        category_id
        description
        id
        main_image
        name
        price
        seo_description
        Category {
          name
        }
        Images {
          image_url
          id
        }
      }
    }
`;

export default function useProduct(id) {
  const { error, data, refetch, loading: isLoading } = useQuery(query, {
    variables: { id },
    pollInterval: POLL_INTERVAL_MS
  });
  return { isLoading, error, data, refetch };
}
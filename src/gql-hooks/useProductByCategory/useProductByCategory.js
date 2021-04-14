import { gql, useQuery } from '@apollo/client';
import { POLL_INTERVAL_MS } from '../../config/config';

const query = gql`
  query ProductsByCategory($id: Int!) {
    Products(where: {Category: {id: {_eq: $id}}}) {
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
    }
  }
`;

export default function useProductByCategory(id) {
  const { error, data, refetch, loading: isLoading } = useQuery(query, {
    variables: { id },
    pollInterval: POLL_INTERVAL_MS
  });
  return { isLoading, error, data, refetch };
}
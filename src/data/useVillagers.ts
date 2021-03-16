import { gql, QueryHookOptions, useQuery } from "@apollo/client";

const GET_VILLAGERS = gql`
  query getVillagers($month: Int) {
    villagers(month: $month) {
      id
      name
      birthday
      image
    }
  }
`;
const useVillagers = (options?: QueryHookOptions<any>) => {
  return useQuery(GET_VILLAGERS, options);
};
export default useVillagers;

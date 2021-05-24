import { QueryKeys } from "./common/query-keys";
import { useFetch } from "@context/fetch";
import { UseQueryOptions, UseQueryResult, useQuery } from "react-query";

const ITEMS_ENDPOINT = "/items";

type UseSearchParams = {
  search: string;
};

type ItemAttr = {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  location?: string;
};

type SearchAttr = {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: ItemAttr[];
};

const useSearch = (
  params: UseSearchParams,
  config?: UseQueryOptions<SearchAttr>
): UseQueryResult<SearchAttr> => {
  const { request } = useFetch();

  const queryResult = useQuery(
    [QueryKeys.search, params],
    async () =>
      (await request.get<SearchAttr>(ITEMS_ENDPOINT, { params })).data,
    config
  );

  return queryResult;
};

type ItemByIdAttr = {
  sold_quantity: number;
  category_id: string;
  categories: string[];
  description: string;
} & Partial<ItemAttr>;

const useItemById = (
  id: string,
  config?: UseQueryOptions<ItemByIdAttr>
): UseQueryResult<ItemByIdAttr> => {
  const { request } = useFetch();

  const queryResult = useQuery(
    [QueryKeys.search, id],
    async () =>
      (await request.get<ItemByIdAttr>(`${ITEMS_ENDPOINT}/${id}`)).data,
    config
  );

  return queryResult;
};

export type { UseSearchParams, SearchAttr, ItemAttr, ItemByIdAttr };
export { useSearch, useItemById };

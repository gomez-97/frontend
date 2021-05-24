import { Breadcrumb } from "@components/breadcrumb";
import { Item } from "@screens/main-search/search-list-items/items";
import queryString from "query-string";
import styles from "./styles.module.sass";
import { useLocation } from "react-router-dom";
import { useSearch } from "@services/search";

export const SearchListItems = (): React.ReactElement => {
  const location = useLocation();
  const params = queryString.parse(location.search);

  const { data, isFetched } = useSearch(
    { search: (params?.search as string) ?? "" },
    { enabled: params?.search != null && params?.search != "" }
  );

  return (
    <div className={styles.container}>
      <Breadcrumb paths={data?.categories ?? []} />
      {isFetched && (
        <div className={styles["list-items"]}>
          {data?.items.slice(0, 4).map((item) => (
            <Item key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

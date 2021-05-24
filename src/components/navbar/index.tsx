/* eslint-disable no-console */
import { UseSearchParams } from "@services/search";
import logo from "@assets/images/Logo_ML.png";
import search from "@assets/images/ic_Search.png";
import styles from "./styles.module.sass";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

type NavBarProps = {
  handleSearch: (search: string) => void;
};

export const NavBar = ({ handleSearch }: NavBarProps): React.ReactElement => {
  const { register, handleSubmit, setValue, getValues } = useForm();

  const mutable_history = useHistory();

  const onSubmit = handleSubmit((data: UseSearchParams) =>
    handleSearch(data.search)
  );

  const handleOnBack = (): void => {
    setValue("search", "", { shouldValidate: false });
    mutable_history.push("/");
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logo} alt="logo" onClick={handleOnBack} role="presentation" />
        <div className={styles["text-field"]}>
          <input
            {...register("search")}
            type="text"
            autoComplete="off"
            placeholder="Nunca dejes de buscar"
            onKeyPress={(e: React.KeyboardEvent) =>
              e.key === "Enter" && handleSearch(getValues("search"))
            }
          />
          <div
            className={styles["search-img"]}
            onClick={onSubmit}
            role="presentation"
          >
            <img src={search} alt="search" />
          </div>
        </div>
      </header>
    </div>
  );
};

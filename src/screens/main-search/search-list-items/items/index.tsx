import { ItemAttr } from "@services/search";
import free from "@assets/images/ic_shipping@2x.png";
import styles from "./styles.module.sass";
import { useHistory } from "react-router-dom";

type ItemProps = {
  data: ItemAttr;
};

export const Item = ({ data }: ItemProps): React.ReactElement => {
  const mutable_history = useHistory();

  const handleOnClick = (id: string): void =>
    mutable_history.push(`/items/${id}`);

  return (
    <div className={styles.container}>
      <div
        className={styles.img}
        onClick={() => handleOnClick(data.id)}
        role="presentation"
      >
        <img src={data.picture} alt="item" />
      </div>
      <div className={styles.content}>
        <h2 className={styles.price}>
          {new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: data.price.currency,
          }).format(data.price.amount)}
          {data.free_shipping && (
            <img className={styles["free-img"]} src={free} alt="free" />
          )}
        </h2>
        <p
          className={styles.name}
          onClick={() => handleOnClick("1")}
          role="presentation"
        >
          {data.title}
        </p>
      </div>
      <div className={styles.footer}>
        <span className={styles.location}>{data.location}</span>
      </div>
    </div>
  );
};

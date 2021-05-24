import { Breadcrumb } from "@components/breadcrumb";
import React from "react";
import styles from "./styles.module.sass";
import { useItemById } from "@services/search";
import { useParams } from "react-router-dom";

export const ItemsPreview = (): React.ReactElement => {
  const { id } = useParams<{ id: string }>();

  const { data, isFetched } = useItemById(id, {
    enabled: id != null && id != "",
  });

  return (
    <div className={styles.container}>
      <Breadcrumb paths={data?.categories ?? []} />
      <div className={styles["preview-item"]}>
        {isFetched && (
          <React.Fragment>
            <div className={styles["img-container"]}>
              <img src={data?.picture} alt="item" />
              <div className={styles["basic-information"]}>
                <span>{`${data?.condition ?? ""} - ${
                  data?.sold_quantity ?? 0
                } vendidos`}</span>
                <h2>{data?.title}</h2>
                <h1>
                  {new Intl.NumberFormat("es-AR", {
                    style: "currency",
                    currency: data?.price?.currency,
                    minimumFractionDigits: 0,
                  }).format(data?.price?.amount ?? 0)}
                </h1>
                <button>Compar</button>
              </div>
            </div>
            <div className={styles["description-container"]}>
              <h2>Descripción del producto</h2>
              <p>{data?.description}</p>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

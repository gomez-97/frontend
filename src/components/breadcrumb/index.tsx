import styles from "./styles.module.sass";

type BreadcrumbProps = {
  paths: string[];
};

export const Breadcrumb = ({ paths }: BreadcrumbProps): React.ReactElement => (
  <ol className={styles.breadcrumb}>
    {paths.map((path, index) => {
      return <li key={`${path}-${index}`}> {path} </li>;
    })}
  </ol>
);

import styles from "./loading.module.scss";

export interface LoadingProps {
  active: boolean;
}

const Loading: React.FC<LoadingProps> = ({ active }) => {
  const classname = [styles.container, !active ? styles.hide : ""].join(" ");

  return (
    <div className={classname}>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;

import styles from "./Notification.module.scss";

type Props = {
  children: React.ReactNode,
  type: string
}

const Notification = ({children, type}:Props) => {
  return (
    <div className={`${styles["pr-message"]} ${styles[type]}`}>
        <span className={styles["pr-message__icon"]}></span>
        <div className={styles["pr-message__items"]}>{children}</div>
    </div>
  )
}

export default Notification
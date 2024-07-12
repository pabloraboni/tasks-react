import styles from './TaskList.module.scss';

//Components
import Notification from './Notification';

//Interfaces
import { ITask } from '../interfaces/ITasks';

interface Props {
  taskList: ITask[],
}

const TaskList = ({ taskList }: Props) => {
  return (
    <>
      <div className={styles["pr-list"]}>
        {
          taskList.length > 0 ? taskList.map((item) => (
              <div key={item.id} className={styles["pr-list__item"]}>
                <p className={styles["pr-item__title"]}>{item.title}</p>
                <p className={styles["pr-item__difficulty"]}>Dificuldade: <span>{item.difficulty}</span></p>
              </div>
          )) : (
            <Notification type="--warning"><p>Não há tarefas</p></Notification>
          )
        }
      </div>
    </>
  )
}

export default TaskList
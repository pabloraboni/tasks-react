import styles from './TaskList.module.scss';

//Components
import Notification from './Notification';

//Interfaces
import { ITask } from '../interfaces/ITasks';

interface Props {
  taskList: ITask[],
  deleteTask: (id: number) => void,
  editTask: (task: ITask) => void
}

const TaskList = ({ taskList, deleteTask, editTask }: Props) => {
  return (
    <>
      <div className={styles["pr-list"]}>
        {
          taskList.length > 0 ? taskList.map((item) => (
              <div key={item.id} className={styles["pr-list__item"]}>
                <p className={styles["pr-item__title"]}>{item.title}</p>
                <p className={styles["pr-item__difficulty"]}>Dificuldade: <span>{item.difficulty}</span></p>
                <div className={styles["pr-item__actions"]}>
                  <a className='pr-icon-delete --color-negative' onClick={() => deleteTask(item.id)}></a>
                  <a className='pr-icon-edit --color-gray' onClick={() => editTask(item)}></a>
                </div>
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
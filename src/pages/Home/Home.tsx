import { useState } from 'react';
import styles from './Home.module.scss'

//Components
import TaskForm from '../../components/TaskForm'
import TaskList from '../../components/TaskList'

//Interfaces
import { ITask } from '../../interfaces/ITasks';

const Home = () => {

    const [taskList, setTaskList] = useState<ITask[]>([]);

    return (
        <>
            <div className="pr-page__content --f-center">
                <div className={styles["pr-page__home"]}>
                    <div className={styles["pr-box"]}>
                        <h1>O que você vai fazer</h1>
                        <TaskForm btnText="Adicionar Tarefa" taskList={taskList} setTaskList={setTaskList}/>
                    </div>

                    <div className={styles["pr-box"]}>
                        <h1>Suas tarefas</h1>
                        <TaskList taskList={taskList}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
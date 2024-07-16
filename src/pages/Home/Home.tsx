import { useState } from 'react';
import styles from './Home.module.scss'

//Components
import TaskForm from '../../components/TaskForm'
import TaskList from '../../components/TaskList'

//Interfaces
import { ITask } from '../../interfaces/ITasks';
import Modal from '../../components/Modal';

const Home = () => {

    const [taskList, setTaskList] = useState<ITask[]>([]);
    const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);
    const [showModalEdit, setShowModalEdit] = useState<Boolean>(false);

    const deleteTask = (id: number) => {
        setTaskList(
            taskList.filter((task) => {
                return task.id !== id
            })
        )
    }

    const editTask = (task: ITask) => {
        setShowModalEdit(true);
        setTaskToUpdate(task);
    }
    const cancelEdit = () => {
        setShowModalEdit(false);
    }
    const updateTask = (id:number, title:string, difficulty:number) => {
        const updatedTask: ITask = { id, title, difficulty };
        const updatedItems = taskList.map((task) => {
            return task.id === updatedTask.id ? updatedTask : task;
        })
        setTaskList(updatedItems);
        setShowModalEdit(false);
    }

    return (
        <>
            {showModalEdit &&
                <Modal title='Editar tarefa' showActions={false} width='800px' onCancel={cancelEdit}>
                    <TaskForm btnText="Editar Tarefa" taskList={taskList} setTaskList={setTaskList} taskToUpdate={taskToUpdate} updateTask={updateTask}/>
                </Modal>
            }
            <div className="pr-page__content --f-center">
                <div className={styles["pr-page__home"]}>
                    <div className={styles["pr-box"]}>
                        <h1>O que você vai fazer</h1>
                        <TaskForm btnText="Adicionar Tarefa" taskList={taskList} setTaskList={setTaskList} />
                    </div>

                    <div className={styles["pr-box"]}>
                        <h1>Suas tarefas</h1>
                        <TaskList taskList={taskList} deleteTask={deleteTask} editTask={editTask} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
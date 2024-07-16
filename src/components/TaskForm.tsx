import { useState, ChangeEvent, FormEvent, useEffect } from 'react';


//Interfaces
import { ITask } from '../interfaces/ITasks';

interface Props {
  btnText: String,
  taskList: ITask[],
  taskToUpdate?: ITask | null,
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>,
  updateTask?(id:number, title:string, difficulty:number): void
}

const TaskForm = ({ btnText, taskList, taskToUpdate, setTaskList, updateTask }: Props) => {

  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (taskToUpdate) {
      setId(taskToUpdate.id);
      setTitle(taskToUpdate.title);
      setDifficulty(taskToUpdate.difficulty);
    }
  }, [taskToUpdate])

  const addTaskHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (updateTask) {
      updateTask(id, title, difficulty);
    } else {
      const id = Math.floor(Math.random() * 1000);
      const newTask: ITask = { id, title, difficulty }
      setTaskList!([...taskList, newTask]);
      setTitle("");
      setDifficulty(0);
    }
  }

  return (
    <>
      <form className="pr-box__form" onSubmit={addTaskHandle}>
        <div className="--wd-100 --frow-center --fgap-10">
          <label className="pr-box__input --flex-2">
            <input type="text" name="title" required value={title} onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} placeholder="Digite o nome da tarefa"></input>
          </label>
          <label className="pr-box__input --flex-1">
            <input type="text" name="difficulty" required value={difficulty} onChange={(e: ChangeEvent<HTMLInputElement>) => setDifficulty(parseInt(e.target.value))} placeholder="Dificuldade da tarefa"></input>
          </label>
          <button type="submit" className="pr-button pr-icon-add">{btnText}</button>
        </div>
      </form>
    </>
  )
}

export default TaskForm
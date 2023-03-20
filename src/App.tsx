import React, { FC, ChangeEvent, useState } from "react";
import { ITask } from "./Interfaces";
import { TodoTask } from "./components/TodoTask";

const App: FC = () => {
    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<number>(0);
    const [todoList, setTodoList] = useState<ITask[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.name === "task") {
            setTask(e.target.value);
        } else {
            setDeadline(Number(e.target.value));
        }
    };

    const addTask = (): void => {
        const newTask = {
            index: Math.random(),
            taskName: task,
            deadline: deadline,
        };
        setTodoList([...todoList, newTask]);
        setTask("");
        setDeadline(0);
    };

    const completeTask = (taskIndexToDelete: number): void => {
        setTodoList(
            todoList.filter((task) => {
                return task.index != taskIndexToDelete;
            })
        );
    };

    return (
        <div className='flex flex-col items-center h-screen w-full'>
            <header className='flex justify-center items-center py-5'>
                <div className='flex flex-col'>
                    <input
                        name='task'
                        type='text'
                        value={task}
                        placeholder='task..'
                        className='rounded-l-md border-2 border-slate-500 bg-slate-100 px-1 py-0.5 w-max-10 overflow-scroll'
                        onChange={handleChange}
                    />
                    <input
                        name='deadline'
                        type='number'
                        value={deadline}
                        placeholder='Deadline (in days)...'
                        className='rounded-l-md border-2 border-slate-500 bg-slate-100 px-1 py-0.5'
                        onChange={handleChange}
                    />
                </div>
                <button
                    className='rounded-r-md bg-slate-500 shadow-md w-32 h-full hover:bg-slate-600 cursor-pointer'
                    onClick={addTask}
                >
                    Add Task
                </button>
            </header>
            <div className='h-9/12 w-full flex flex-col items-center'>
                {todoList.length > 0 ? (
                    <h1 className='font-semibold text-lg'>
                        Here is your TODOs:
                    </h1>
                ) : (
                    <h1 className='font-semibold text-lg'>
                        There is no TODOs so far. Add smth
                    </h1>
                )}

                <ul className='flex flex-col w-full'>
                    {todoList.map((task: ITask, key: number) => {
                        return (
                            <TodoTask
                                key={key}
                                task={task}
                                completeTask={completeTask}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default App;

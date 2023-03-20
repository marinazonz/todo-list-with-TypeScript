import { ITask } from "../Interfaces";

interface Props {
    task: ITask;
    completeTask(taskIndexToDelete: number): void;
}

export const TodoTask = ({ task, completeTask }: Props) => {
    return (
        <li className='border-2 border-stone-700 rounded-md shadow-sm p-1 flex items-center justify-between my-1 w-1/2 self-center'>
            <div className='flex flex-col'>
                <p className='font-bold text-green-700 text-lg'>
                    {task.taskName}
                </p>
                <p>{task.deadline} days</p>
            </div>

            <button
                onClick={() => {
                    completeTask(task.index);
                }}
                className='border-2 border-slate-500 shadow-sm rounded-md w-9 bg-slate-200 hover:bg-slate-400'
            >
                X
            </button>
        </li>
    );
};

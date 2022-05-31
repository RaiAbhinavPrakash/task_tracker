import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle  }) => {
    // const[tasks, setTasks] = useState([
            // {
            //     id: 1,
            //     text: "Doctor's Appointment",
            //     day: 'Feb 5th at 2:30pm',
            //     reminder: true,
            // },
            // {
            //     id: 2,
            //     text: "Meeting at school",
            //     day: 'Feb 6th at 1:30pm',
            //     reminder: true,
            // },
            // {
            //     id: 3,
            //     text: "trading",
            //     day: 'Feb 7th at 10:30am',
            //     reminder: false,
            // }
   //   ]
    // )
  return (
    <>
        {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
        ))}
    </>
  )
}

export default Tasks

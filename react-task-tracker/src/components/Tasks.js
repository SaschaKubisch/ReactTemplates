const tasks = [
    {
        id:1,
        text: 'eins',
        day: 'mo',
        reminder: 'true',
    },
    {
        id:2,
        text: 'zwei',
        day: 'di',
        reminder: 'true',
    },
    {
        id:3,
        text: 'drei',
        day: 'mi',
        reminder: 'false',
    },
]

const Tasks = () => {
  return (
    <>
        {tasks.map((task) => (<h3>{task.id}</h3>))}
    </>
  )
}

export default Tasks
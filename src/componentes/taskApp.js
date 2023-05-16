import React, { useState, useEffect } from 'react';
import InicioApp from './todoList'
import './taskApp.css';
import AddTasks from './AddTask';
import handleDelete from '../hooks/delete';


function TaskTable(props) {
  
  const [tasks, setTasks] = useState([]);  

  useEffect(() => {
    fetch('http://localhost:5000/task', {method:'GET'})
      .then(response => response.json())
      .then(data => setTasks(data.task));
  }, [tasks]);


  return (
    <>
    
    <InicioApp/>
   


    <div className="contenedor-todlist">
      
      <div className="contenedor-tasks">
        <AddTasks/>


      <table className='table' >
        <thead>
          <tr>
            <th>ID</th>
            <th>Detalles</th>
            <th>Estado</th>
            <th>editar</th>
            <th>eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map((task, index) => (
            <tr key={task.id}>
              <td hidden>{task.id}</td>
              <td>{index+1}</td>
              <td>{task.detalles}</td>
              <td>{task.estado}</td>
              
              <td><button className='btn-edit'
              
              >edit</button>
              </td>

              <td><button className='btn-delete' onClick={handleDelete} data-id={task.id}>delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      </div>

      </>
  )
  
}

export default TaskTable
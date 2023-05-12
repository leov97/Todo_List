import React, { useState, useEffect } from 'react';
import InicioApp from './todoList'
import './taskApp.css';
import AddTasks from '../hooks/AddTask';

function TaskTable() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/task')
      .then(response => response.json())
      .then(data => setTasks(data.task));

      
  }, []);


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
            <tr key={index+1}>
              <td>{task.id}</td>
              <td>{task.detalles}</td>
              <td>{task.estado}</td>
              <td>editar</td>
              <td>eliminar</td>
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
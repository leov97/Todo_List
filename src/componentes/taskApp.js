import React, { useState, useEffect } from 'react';
import './style/Addtask.css';
import './style/taskApp.css';
import "./style/todoList.css"
import handleDelete from '../api/delete';
import { useGet } from '../api/useGet';
import { useAdd } from '../api/useAddTask';



function TaskTable(props) {
  const {register, handleSubmit, setDetalles}= useAdd()
  const tasks = useGet()

  return (
    <>
    
    <div className="Todo-List">
        <header className="header-todolist">
        <h1>Todo List</h1>
        </header>
    </div>
   


    <div className="contenedor-todlist">
      
      <div className="contenedor-tasks">
        <form onSubmit={handleSubmit} className="addtask" >
            <label>Add task</label>
             <input 
             type='text'
             className='inp-registro' 
             onChange={(add)=> 
                setDetalles(add.target.value)} 
                {...register("example")} />
            
             <button type="submit" >Add task</button>
            
        </form>

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
              
              <td>
              <button 
              className='btn-edit'
             
              
              >edit</button>
              </td>

              <td>
              <button 
              className='btn-delete' 
              onClick={handleDelete} 
              data-id={task.id}>delete
              </button>
              </td>

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
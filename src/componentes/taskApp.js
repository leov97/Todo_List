import './style/Addtask.css';
import './style/taskApp.css';
import "./style/todoList.css"
import "./style/styleEdit.css"
import { useGet } from '../api/useGet';
import { useAdd } from '../api/useAddTask';
import { useEdit } from '../api/useEdit';
import { useUpdate } from '../api/useUpdate';
import { handleDelete } from '../api/delete';





function TaskTable() {
  const {register, handleSubmit, setDetalles}= useAdd()
  
  const { setEditTask, handleEdit, handleSave, modeEdit,registertask, handleCancele }= useEdit()
  const {handleUpdate,estado} = useUpdate()

  const tasks= useGet()


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
                {...register("add-task")} 
                  required
                />

             <button type="submit" ><i className="bi bi-database-fill-add"></i></button>
            
        </form>

      <table className='table' >
        <thead>
          <tr className="encabezado">
            <th >#</th>
            <th>Detalles</th>
            <th>Estado</th>
            <th></th>
            <th>editar</th>
            <th>eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map((task, index) => (
            <tr key={task.id}>
              <td hidden>{task.id}</td>
              <td className='task-detalles'>{index+1}.</td>
              <td className="task-detalles">{task.detalles}</td>
              <td className='task-detalles'>
              {task.estado }
              </td>

              <td>

               
              <button className='task-estado'
              type='submit' 
              onClick={() => {
                console.log(estado);
                handleUpdate(task.id)}} >
 
                <i className="bi bi-exclamation-circle-fill"></i>
              
              </button>
              </td>
           
              <td>
              <button 
              className='btn-edit'
              onClick={() => handleEdit(task.id)}
              data-id={task.id}
              ><i className="bi bi-pencil-fill"></i></button>
              </td>

              <td>
              <button 
              className='btn-delete' 
              onClick={handleDelete} 
              data-id={task.id}><i className="bi bi-trash-fill"></i>
              </button>
              </td>

            </tr>
          ))}
        </tbody>

        
      </table>
      
      </div>
      

{modeEdit &&(
        <div className="W-edit">
          <div className="edit-content">
            <button className="cancele-edit" onClick={handleCancele}><i  className="bi bi-x-circle-fill"></i></button>
            <h3 id="h3-titulo">Editar Valor</h3>
            <form onSubmit={handleSave} className='edit-form'>
            
              <div className='container-input-edit'>
              <label id="h3-titulo">detalles:  </label>
              <input className='input-edit' type="text"  onChange={(e) => setEditTask(e.target.value)}
              {...registertask ("edit-task")}
               />
              </div>
              
             

              <button  type="submit">
              <i className="bi bi-cloud-arrow-up-fill"></i>
              </button>
            </form>
          </div>
        </div>
      )}

      </div>

  

      </>
  )
  
}

export default TaskTable
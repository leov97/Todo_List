import { useForm} from 'react-hook-form';
import { useState, useCallback } from 'react';
import { handleUpdate } from '../api/updateTask';
import './Addtask.css';
import { updateTask } from '../api/updateTask';

const AddTasks = (props) =>{
    const{register,watch, reset}=useForm()
    const [detalles, setDetalles,] = useState('');

    const handleClick = () => {
      updateTask({
        task: props.task,
        newDetails: detalles,
        onUpdateTask: props.onUpdateTask
      });
    };




    const handleSubmit = useCallback((add)=> {
      add.preventDefault();
      fetch('http://localhost:5000/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ detalles: watch("example") })
      })
      .then(response => response.json())
      
      .then(data => {
        console.log(data)
        reset();    
    })

      .catch(error => {console.error(error)});
    }, [reset]);
  
  
   
    return (
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
    )
}

export default AddTasks
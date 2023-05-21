import { useCallback, useState } from "react";
import { useForm} from 'react-hook-form';

export const useEdit = () => {
  const [editTask, setEditTask] = useState('');
  const [modeEdit, setModeEdit] = useState(false);
  const{register,watch}=useForm()
  const registertask= register
  
  const handleEditTask = useCallback(async (event, id) => {
    event.preventDefault()
    try {
      const editResponse = await fetch(`http://localhost:5000/task/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ detalles: watch('edit-task')})
      });

      const editData = await editResponse.json();
      console.log(editData);
    } catch (error) {
      console.log(error);
    }
  }, [watch]);


  const handleEdit=useCallback((id)=>{
    setModeEdit(true);
    setEditTask(id);
},[]);

const handleSave=useCallback((event)=>{
    event.preventDefault()
    setModeEdit(false);
    handleEditTask(event,editTask)
},[editTask])

const handleCancele=useCallback(()=>{
  setModeEdit(false);
},[])




  return { setEditTask, handleEdit, handleSave,modeEdit, registertask,handleCancele };
};
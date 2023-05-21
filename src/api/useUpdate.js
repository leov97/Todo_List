import { useState, useCallback, useEffect } from 'react';


export const useUpdate = ( ) => {
  const [estado, setEstado] = useState(null);

  const handleUpdateTask = useCallback( async (id) => {
    try {
      
      const editResponse = await fetch(`http://localhost:5000/task/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ estado: !estado }),
      });

      const data =await editResponse.json();
      setEstado(data);
      console.log(data); // Actualiza el estado después de una solicitud exitosa
    } catch (error) {
      console.error(error);
    }
  },[estado])

 
const handleUpdate=(id) => {
  setEstado()
  handleUpdateTask(id);
} 

useEffect(() => {
  
  
  }, [estado]);



  return {estado, handleUpdate, setEstado}
  
};


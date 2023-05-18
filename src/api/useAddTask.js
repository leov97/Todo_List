import { useForm} from 'react-hook-form';
import { useState, useCallback } from 'react';

export const useAdd = () =>{
    const{register,watch, reset}=useForm()
    const [detalles, setDetalles,] = useState('');


    const handleSubmit = useCallback(async(add)=> {
      add.preventDefault();
      try{
      const response =await fetch('http://localhost:5000/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ detalles: watch("example") })
      })
      const data = await response.json()
      
        console.log(data)
     
        reset();    }catch (error) {
          console.log(error)}
    },[reset])

      
  


    return {register,  handleSubmit, setDetalles}
  
}
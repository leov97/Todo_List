import { useEffect, useState} from "react";


export const useGet = ()=> {
const [tasks, setTasks] = useState([]); 

const fetchData = async() =>{
  try{
  const response = await fetch('http://localhost:5000/task', {method: 'GET'})
  if (response.ok){
    const data = await response.json()
    setTasks(data.task)
    console.log("todo bien")
  }else{
    console.log('Respuesta de red OK pero respuesta de HTTP no OK')
  }
  }catch(error){
      console.log(error)
      return []
  } 
  }

useEffect(() => {
  
  fetch('http://localhost:5000/task')
      .then(response => response.json())
      .then(data => setTasks(data.task));
    
}, []);

return tasks
}
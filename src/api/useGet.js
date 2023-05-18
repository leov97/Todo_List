import { useEffect, useState, useCallback } from "react";
import { apiRequest } from './apiRequest';

export const useGet = ()=> {
const [tasks, setTasks] = useState([]);  


  const fetchData=useCallback( async()=>{
    const response= await apiRequest()
    const getData = response.task;
    console.log(getData)
    setTasks(getData)
  },[tasks])

useEffect(() => {
  fetchData()
}, [tasks]);

return tasks
}
import { useCallback, useState } from "react";

export const useEdit=()=>{
    const [editTask, setEditTask]=useState('')

    const handleEdit = useCallback( async(edit) => {

        try{
        const id = edit.target.dataset.id;
        const editResponse = await fetch(`http://localhost:5000/task/${id}`,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ detalles: editTask })
    })
        const editData = await editResponse.json()
        console.log(editData)
        }catch(error){
            console.log(error)
        }
    },[editTask])

    return {setEditTask, handleEdit}
}
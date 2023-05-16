import { useEffect } from "react";

const handleDelete = (event) => {

    const id = event.target.dataset.id;
    fetch(`http://localhost:5000/task/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  }

  


export default handleDelete
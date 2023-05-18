const handleDelete = async(event) => {
  try{
    const id = event.target.dataset.id;
    const deleteResponse= await fetch(`http://localhost:5000/task/${id}`, {
      method: 'DELETE'
    })
    const deleteData = await deleteResponse.json()
    console.log(deleteData)
    }
    catch(error) {
      console.error(error);
    };
  }

  


export default handleDelete



 export async function getTask() {
    const response = await fetch('http://localhost:5000/task');
    const data = await response.json();
    console.log(data);
  }
  
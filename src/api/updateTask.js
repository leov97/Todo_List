export function updateTask(props) {
  fetch(`/task/${props.task.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ detalles: props.newDetails })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data.mensaje);
      props.onUpdateTask(props.task.id, props.newDetails);
    })
    .catch(error => console.error(error));
}
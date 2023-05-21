from flask import Flask, request, jsonify
import mysql.connector
from flask_cors import cross_origin

app = Flask(__name__)

@app.route("/task", methods=["GET"])
@cross_origin()
def get_task():
    bdTask = mysql.connector.connect(
        host="localhost",
        user="root",
        password="system21711227",
        database="todo_list"
    )

    cursor = bdTask.cursor()
    query = ("SELECT id, detalles, "
             "CASE estado "
             "   WHEN 1 THEN 'completado' "
             "   ELSE 'pendiente' "
             "END AS estado "
             "FROM task")

    cursor.execute(query)  
    task = []

    for (id, detalles, estado) in cursor:
        task.append({"id": id, "detalles": detalles, "estado": estado})
    cursor.close()
    bdTask.close()
    return jsonify({'task': task}), 200

@app.route("/task", methods=["POST"])
@cross_origin()
def add_task():
    bdTask = mysql.connector.connect(
        host="localhost",
        user="root",
        password="system21711227",
        database="todo_list")
    cursor = bdTask.cursor()

    detalles = request.json['detalles']
    query = ("INSERT INTO task (detalles) VALUES (%s)")
    values= (detalles,)
    cursor.execute(query, values)
    bdTask.commit()
    response = {'mensaje': 'registro exitoso'}

    cursor.close()

    return jsonify(response), 200

@app.route("/task/<int:id>", methods=["DELETE"])
@cross_origin()
def Delete_task(id):
    bdTask = mysql.connector.connect(
        host="localhost",
        user="root",
        password="system21711227",
        database="todo_list")
    cursor = bdTask.cursor()
    query = ("DELETE FROM task WHERE id = %s")
    values = (id,)
    cursor.execute(query, values)
    bdTask.commit()
    response = {'mensaje':'registro eliminado'}
    cursor.close()
    bdTask.close()
    return jsonify(response), 200

@app.route("/task/<int:id>", methods=["PUT"])
@cross_origin()
def Update_task(id):
    bdTask = mysql.connector.connect(
        host="localhost",
        user="root",
        password="system21711227",
        database="todo_list")
    cursor = bdTask.cursor()

    detalles = request.json.get('detalles')  # Utilizar get() para obtener el valor sin generar error si no está presente
    estado = request.json.get('estado')  # Utilizar get() para obtener el valor sin generar error si no está presente
    
    # Verificar qué campos se proporcionaron y construir la consulta SQL dinámicamente
    if detalles is not None and estado is not None:
        query = "UPDATE task SET detalles = %s, estado = %s WHERE id = %s"
        values = (detalles, bool(estado), id)
    elif detalles is not None:
        query = "UPDATE task SET detalles = %s WHERE id = %s"
        values = (detalles, id)
    elif estado is not None:
        query = "UPDATE task SET estado = %s WHERE id = %s"
        values = (bool(estado), id)
    else:
        # Si no se proporciona ningún campo válido para actualizar, devolver una respuesta de error
        response = {'mensaje': 'No se proporcionaron campos válidos para actualizar'}
        return jsonify(response), 400

    cursor.execute(query, values)
    bdTask.commit()
    response = {'mensaje':'registro actualizado'}
    cursor.close()
    bdTask.close()
    return jsonify(response), 200
    
        

if __name__ == "__main__":
    app.run(debug=True)
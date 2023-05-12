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

if __name__ == "__main__":
    app.run(debug=True)
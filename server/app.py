from flask import Flask, request
import psycopg2
from dotenv import load_dotenv
from datetime import datetime, timezone
import os
# from flask_sqlalchemy import SQLAlchemy

#Queries
# CREATE_ROOMS_TABLE = "CREATE TABLE IF NOT EXISTS rooms (id SERIAL PRIMARY KEY, name TEXT);"
# INSERT_ROOM_RETURN_ID = "INSERT INTO rooms (name) VALUES (%s) RETURNING id;"


load_dotenv()

db_uri = os.getenv('DB_URI')
connection = psycopg2.connect(db_uri)
app = Flask(__name__)

# @app.post("/api/room")
# def create_room():
#     data = request.get_json()
#     name = data["name"]
#     with connection:
#         with connection.cursor() as cursor:
#             cursor.execute(CREATE_ROOMS_TABLE)
#             cursor.execute(INSERT_ROOM_RETURN_ID, (name,))
#             room_id = cursor.fetchone()[0]
#     return {"id": room_id, "message": f"Room {name} created."}, 201


@app.post("/updateStat")
def update_stat():
    data = request.get_json()
    #received data from the client


@app.route("/getStat")
def get_stat():
    with connection:

    pass
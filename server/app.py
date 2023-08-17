from flask import Flask, request
import psycopg2
from dotenv import load_dotenv
from datetime import datetime, timezone
import os
# from flask_sqlalchemy import SQLAlchemy

#Queries
# CREATE_ROOMS_TABLE = "CREATE TABLE IF NOT EXISTS rooms (id SERIAL PRIMARY KEY, name TEXT);"

# GET_USER_STAT_QUERY = '''SELECT login_time, MAX(clear_count) as max_clear_count FROM USAGE WHERE email = (%s);
# '''

GET_USER_STAT_QUERY = '''
SELECT login_time, clear_count FROM usage
    WHERE email =
'''

# "INSERT INTO rooms (name) VALUES (%s) RETURNING id;"



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


@app.route("/stat", methods=["POST"])
def update_stat():
    data = request.get_json()
    #received data from the client


@app.route("/stat", methods=["get"])
def user_stat():
    data = request.get_json()
    email = data['email']
    print('email:  '+ email)
    with connection:
        try:
            with connection.cursor() as cursor:
                cursor.execute(GET_USER_STAT_QUERY, (email,))
                print(cursor.fetchone())
                user_stat = cursor.fetchone()[0]
            return jsonify(user_stat)
        except Exception as e:
            print(e)

    # return user_stat

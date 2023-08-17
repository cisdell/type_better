from flask import Flask, request, jsonify
import psycopg2
from dotenv import load_dotenv

from datetime import datetime, timezone
import os

#maybe use ORM later
# from flask_sqlalchemy import SQLAlchemy

#Queries


# GET_USER_STAT_QUERY = '''SELECT login_time, MAX(clear_count) as max_clear_count FROM USAGE WHERE email = (%s);
# '''

GET_USER_STAT_QUERY = '''
SELECT u.email, us.clear_count, us.login_time
FROM USERS u FULL JOIN USERS_STAT us
ON u.email = us.email
WHERE us.clear_count = (SELECT MAX(t2.clear_count) FROM USERS_STAT t2 WHERE t2.email = (%s));
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
    # print('email:  '+ email)
    with connection:
        try:
            with connection.cursor() as cursor:
                cursor.execute(GET_USER_STAT_QUERY, (email,))
                user_stat = cursor.fetchone()

                if user_stat:
                    response_data = {
                        "email": user_stat[0],
                        "max": user_stat[1],
                        "time_occured": user_stat[2]
                    }
                    return jsonify(response_data), 200
                else:
                    return "User not found", 404

        except Exception as e:
            print(e)
            return "An error occurred", 500

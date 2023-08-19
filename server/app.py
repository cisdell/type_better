from flask import Flask, request, jsonify
import psycopg2
from dotenv import load_dotenv
import queries
import models
from datetime import datetime, timezone
import os

#maybe use ORM later
# from flask_sqlalchemy import SQLAlchemy

load_dotenv()
db_uri = os.getenv('DB_URI')
connection = psycopg2.connect(db_uri)
app = Flask(__name__)

@app.route("/stat", methods=["POST"])
def update_stat():
    data = request.get_json()
    newdata = models.UserStatRequest(
        email=data['email'],
        login_time=data['login_time'],
        time_spent=data['time_spent'],
        clear_count=data['clear_count']
    )
    with connection:
        try:
            with connection.cursor() as cursor:
                cursor.execute(queries.INSERT_SESSION_DATA, (newdata.email, newdata.login_time, newdata.time_spent, newdata.clear_count))
                return "successful creation", 201

        except Exception as e:
            print(e)
            return "An error occured", 500

    #received data from the client

#gets the best attempt data
@app.route("/stat", methods=["GET"])
def user_stat():
    data = request.get_json()
    email = data['email']
    print('email:  '+ email)
    with connection:
        try:
            with connection.cursor() as cursor:
                # print(queries.GET_USER_STAT_QUERY)
                cursor.execute(queries.GET_USER_STAT_QUERY, (email,))
                user_stat = cursor.fetchone()
                print(user_stat)

                if user_stat:

                    response_data = models.UserStatResponse(
                        email= user_stat[0],
                        max= user_stat[1],
                        time_occured= user_stat[2]
                        )
                    return jsonify(response_data.dict()), 200
                else:
                    return "User not found", 404

        except Exception as e:
            print(e)
            return "An error occurred", 500

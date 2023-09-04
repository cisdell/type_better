from flask import Flask, request, jsonify, Blueprint
import psycopg2
import queries  # this is the SQL query
import models
from datetime import datetime, timezone
import os

# Initialize the app instance here
routes = Blueprint("routes", __name__)
db_uri = os.getenv("DB_URI")
connection = psycopg2.connect(db_uri)


@routes.route("/stat", methods=["POST"])
def update_stat():
    data = request.get_json()
    newdata = models.UserStatRequest(
        email=data["email"],
        login_time=data["login_time"],
        time_spent=data["time_spent"],
        clear_count=data["clear_count"],
    )
    with connection:
        try:
            with connection.cursor() as cursor:
                cursor.execute(
                    queries.INSERT_SESSION_DATA_QUERY,
                    (
                        newdata.email,
                        newdata.login_time,
                        newdata.time_spent,
                        newdata.clear_count,
                    ),
                )
                return "successful creation", 201

        except Exception as e:
            print(e)
            return "An error occured", 500

    # received data from the client


# gets the best attempt data
@routes.route("/stat", methods=["GET"])
def user_stat():
    data = request.get_json()
    email = data["email"]
    print("email:  " + email)
    with connection:
        try:
            with connection.cursor() as cursor:
                # print(queries.GET_USER_STAT_QUERY)
                cursor.execute(queries.INSERT_SESSION_DATA_QUERY, (email,))
                user_stat = cursor.fetchone()
                print(user_stat)

                if user_stat:
                    response_data = models.UserStatResponse(
                        email=user_stat[0],
                        max_cleared=user_stat[1],
                        time_occured=user_stat[2],
                    )
                    return jsonify(response_data.model_dump()), 200
                else:
                    return "User not found", 404

        except Exception as e:
            print(e)
            return "An error occurred", 500


#get leaderboard
@routes.route('/leaderboard', methods=["GET"])
def get_leaderboard():
    with connection:
        try:
            with connection.cursor() as cursor:
                cursor.execute(queries.GET_LEADERBOARD_QUERY)
                leaderboard_data = cursor.fetchall()
                # print(leaderboard_data)

                if leaderboard_data:
                    response_data = []
                    for item in leaderboard_data:
                        each_data = models.LeaderboardResponse(
                            email=item[0],
                            clear_count=item[1],
                            login_time=item[2],
                        )
                        response_data.append(each_data.model_dump())
                    print(response_data)
                    return jsonify(response_data), 200

        except Exception as e:
            print(e)
            return "An error occured", 500
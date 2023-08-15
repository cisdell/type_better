from flask import Flask, request
import psychopg2
from dotenv import load_dotenv
import os
# from flask_sqlalchemy import SQLAlchemy
CREATE_ROOMS_TABLE = (
    "CREATE TABLE IF NOT EXISTS rooms (id SERIAL PRIMARY KEY, name TEXT);"
)



load_dotenv()

db_uri = os.getenv('DB_URI')
connection = psycopg2.connect(db_uri)
app = Flask(__name__)

@app.route("/api/room")
def create_room():
    data = request.get_json()
    name = data["name"]
    with connection:
        with connection.cursor() as cursor:
            cursor.execute(CREATE_ROOMS_TABLE)



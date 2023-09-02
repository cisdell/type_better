from flask import Flask, request, jsonify
from flask_cors import CORS

import psycopg2

from dotenv import load_dotenv
from datetime import datetime, timezone
import os
import routes
#maybe use ORM later
# from flask_sqlalchemy import SQLAlchemy
#https://realpython.com/flask-blueprint/#what-a-flask-application-looks-like
load_dotenv()
# db_uri = os.getenv('DB_URI')
app = Flask(__name__)
CORS(app)
app.register_blueprint(routes.routes)

# routes.init_app(app)

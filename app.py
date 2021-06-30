# Dependencies
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from os import environ

# Create Flask Instance
app = Flask(__name__)
# Add Database
#app.config["SQLALCHEMY_DATABASE_URI"] = envirn.get("DATABASE_URL", "<postgresql connection string>")
# Initialize the Database
#db = SQLAlchemy(app)

# Create a Class


@app.route("/")
def index():
    return "This is where our Pokemon Dashboard will be!"

if __name__ == "__main__":
    app.run(debug=True)
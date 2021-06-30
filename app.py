# Dependencies
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from os import environ

# Create Flask Instance
app = Flask(__name__)
# Add Database
#app.config["SQLALCHEMY_DATABASE_URI"] = environ.get("DATABASE_URL", "<postgresql+psycopg2://username:password@host:port/database>")

# Initialize the Database
#db = SQLAlchemy(app)

# Create a Class
#class pokemon(db.Model):
    # against_bug
    # against_dark
    # against_dragon
    # against_electric
    # against_fairy
    # against_fight
    # against_fire
    # against_flying
    # against_ghost
    # against_grass
    # against_ground
    # against_ice
    # against_normal
    # against_poison
    # against_psychic
    # against_rock
    # against_steel
    # against_water
    # attack
    # base_egg_steps
    # base_happiness
    # base_total
    # defense
    # experience_growth
    # height_m
    # hp
    # name
    # percentage_male
    # pokedex_number
    # sp_attack
    # sp_defense
    # speed
    # type1
    # type2
    # weight_kg
    # generation
    # is_legendary

@app.route("/")
def index():
    return "This is where our Pokemon Dashboard will be!"

if __name__ == "__main__":
    app.run(debug=True)
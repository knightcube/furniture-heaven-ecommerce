from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_smorest import Api, Blueprint, abort
from dummy_db import stores,items
from resources.item import blp as ItemBlueprint

app = Flask(__name__)
app.config["PROPOGATE_EXCEPTIONS"] = True
app.config["API_TITLE"] = "My API"
app.config["API_VERSION"] = "v1"
app.config["OPENAPI_VERSION"] = "3.0.2"
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///market.db'
# db = SQLAlchemy(app)
api = Api(app)
api.register_blueprint(ItemBlueprint)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.get("/items")
def get_all_items():
    return {"items": items}


# @app.get("/items/<string:item_id>")
# def get_item(item_id):
#     try:
#         return items[item_id]
#     except KeyError:
#         abort(404, message="Item not found")
    
# @app.delete("/items/<string:item_id>")
# def delete_item(item_id):
#     try:
#         del items[item_id]
#         return {"message":"Item Deleted"}
#     except:
#         abort(404, message="Item not found")
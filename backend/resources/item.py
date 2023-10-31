import uuid
from flask import request
from flask.views import MethodView
from flask_smorest import Blueprint, abort
from dummy_db import items

blp = Blueprint("Items", __name__, description="Operations on items")

@blp.route("/item/<string:item_id>")
class Store(MethodView):
    def get(self, item_id):
        try:
            return items[item_id]
        except KeyError:
            abort(404, message="Item not found")

    def delete_item(item_id):
        try:
            del items[item_id]
            return {"message":"Item Deleted"}
        except:
            abort(404, message="Item not found")
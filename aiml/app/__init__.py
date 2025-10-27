from flask import Flask
from flask_cors import CORS
from .routes import bp

def create_app():
    app = Flask(__name__)

    # Allow CORS for frontend (React on port 5173)
    CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

    # Register routes blueprint
    app.register_blueprint(bp)

    return app

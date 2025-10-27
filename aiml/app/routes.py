from flask import Blueprint, request, jsonify
from app.model_utils import get_predicted_value, helper
import numpy as np  # ✅ Add this

bp = Blueprint('bp', __name__)

@bp.route('/')
def home():
    return jsonify({"message": "API is working"})

@bp.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        user_symptoms = data.get("symptoms", [])

        if not user_symptoms:
            return jsonify({"error": "No symptoms provided"}), 400

        # 🧠 Predict the disease
        predicted_disease = get_predicted_value(user_symptoms)

        # ✅ Convert NumPy types (int32, float32, etc.) to Python-native types
        if isinstance(predicted_disease, (np.integer, np.floating)):
            predicted_disease = predicted_disease.item()
        elif isinstance(predicted_disease, np.ndarray):
            predicted_disease = predicted_disease.tolist()

        # 🔍 Fetch related info
        dis_des, precautions, medications, rec_diet, workout = helper(predicted_disease)

        return jsonify({
            "predicted_disease": str(predicted_disease),  # ✅ ensure JSON-safe
            "description": dis_des,
            "precautions": precautions[0] if precautions else [],
            "medications": medications,
            "diet": rec_diet,
            "workout": workout
        })

    except Exception as e:
        # 🔥 Send clean error message for debugging
        return jsonify({"error": str(e)}), 500

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/submit', methods=['POST'])
def submit_form():
    try:
        data = request.get_json()  # Parse JSON request body
        
        # Validation: Check required fields
        required_fields = ["firstName", "lastName", "dob", "gender", "phone", "email", "emergencyContactName", "emergencyPhone"]
        for field in required_fields:
            if field not in data or not data[field]:
                return jsonify({"error": f"Missing required field: {field}"}), 400
        
        # Simulate saving to database (replace with actual DB logic)
        print("Received patient data:", data)

        return jsonify({"message": "Patient data submitted successfully!", "data": data}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)  # Change host if needed

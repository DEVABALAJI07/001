from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/contact", methods=["POST"])
def contact():
    name = request.form.get("name")
    phone = request.form.get("phone")
    message = request.form.get("message")

    print("NEW ENQUIRY")
    print(name, phone, message)

    return jsonify({
        "status": "success",
        "message": "Thank you! PRABHU STUDIO will contact you shortly."
    })

if __name__ == "__main__":
    app.run(debug=True)

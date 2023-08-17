from flask import Flask, render_template

app = Flask(__name__, static_folder="static")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/register", methods=["POST", "GET"])
def register():
    return render_template("login.html")

@app.route("/create_acc")
def create_acc():

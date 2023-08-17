from flask import Flask, render_template, request, redirect, url_for, g

app = Flask(__name__)

DATABASE = 'users.db'

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/register", methods=["POST", "GET"])
def register():
    return render_template("login.html")

@app.route("/create_acc")
def create_acc():
    return render_template("create_acc.html")

if __name__ == "__main__":
    app.run(debug=True)

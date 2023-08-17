from flask import Flask, render_template, request, redirect, url_for, g

app = Flask(__name__)

DATABASE = 'users.db'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

@app.route("/")
def index():
    return render_template("index.html")

@app.route('/create_acc', methods=["POST", "GET"])
def create_acc():
    if request.method == "POST":
        nickname = request.form['nickname']
        password = request.form['password']
        confirm_password = request.form['confirm_password']

        if password == confirm_password:
            db = get_db()
            cursor = db.cursor()


if __name__ == "__main__":
    app.run(debug=True)

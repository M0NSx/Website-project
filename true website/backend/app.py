from flask import Flask, render_template, request, redirect, url_for, session
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.secret_key = '414Çbbadhgjgruuq23213Ç'

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nickname = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)

class Combo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    fruit = db.Column(db.String(50), nullable=False)
    fighting_style = db.Column(db.String(50), nullable=False)
    sword = db.Column(db.String(50), nullable=False)
    gun = db.Column(db.String(50), nullable=False)
    combo_name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/create_combo")
def create_combo():
    return render_template("create_combo.html")

@app.route("/dashboard")
def dashboard():
    user_nickname = session.get('user_nickname')
    return render_template("dashboard.html", user_nickname=user_nickname)

@app.route('/create_combo', methods=["POST", "GET"])
def create_combo():
    if request.method == "POST":
        user = User.query.filter_by(nickname=session['user_nickname']).first()


@app.route('/create_acc', methods=["POST", "GET"])
def create_acc():
    if request.method == "POST":
        nickname = request.form['nickname']
        password = request.form['password']
        confirm_password = request.form['confirm_password']

        if password == confirm_password:
            new_user = User(nickname=nickname, password=password)
            db.session.add(new_user)
            db.session.commit()
            return redirect(url_for("register"))
        else:
            return "Passwords do not match. Account creation failed."

    return render_template("create_acc.html")

@app.route('/register', methods=["POST", "GET"])
def register():

    if request.method == "POST":
        nickname = request.form['nickname']
        password = request.form['password']

        user = User.query.filter_by(nickname=nickname, password=password).first()

        if user:
            session['user_nickname'] = user.nickname
            return redirect(url_for("dashboard"))
        else:
            return "Login failed. Invalid credentials."

    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)

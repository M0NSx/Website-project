from flask import Flask, render_template, request, redirect, url_for, g

app = Flask(__name__)

DATABASE = 'users.db'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:

if __name__ == "__main__":
    app.run(debug=True)

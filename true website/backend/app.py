from flask import Flask, render_template, request, redirect, url_for, g

app = Flask(__name__)

DATABASE = 'users.db'



if __name__ == "__main__":
    app.run(debug=True)

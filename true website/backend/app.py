from flask import Flask, render_template, redirect, request, flash, url_or

app = Flask(__name__)

@app.route("/")
@app.route("/index")
def index():

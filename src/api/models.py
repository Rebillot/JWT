from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(150), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def __init__(self, email, password, is_active):
        self.email = email,
        self.password = password,
        self.is_active = is_active

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
        }
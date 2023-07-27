from peewee import *

db = SqliteDatabase("db.sqlite")

class User(Model):
    email = CharField()
    firstname = CharField()
    lastname = CharField()
    username = CharField()
    password = CharField()
    class Meta:
        database = db

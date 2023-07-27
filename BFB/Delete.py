from peewee import *
from Models import User

db = SqliteDatabase("db.sqlite")
user = User()


def drop_table():
    db.drop_tables([User])

drop_table()
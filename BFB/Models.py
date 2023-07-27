from peewee import *

db = SqliteDatabase("db.sqlite")

class Person(Model):
    name = CharField()
    age = IntegerField()
    account = FloatField()
    class Meta:
        database = db

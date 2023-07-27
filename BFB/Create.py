from peewee import *
from Models import Person

db = SqliteDatabase("db.sqlite")

def create_table():
    db.create_tables([Person])
    
def drop_table():
    db.drop_tables([Person])

drop_table()
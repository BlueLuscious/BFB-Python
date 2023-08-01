from peewee import *
from models.Models import User
from Create import insert_user

db = SqliteDatabase("db.sqlite")
user = User()

def update_user(user_id):
    user = User.get(User.id == user_id)
    insert_user(user)
    
#user_id = input("Enter the ID of the user you want to update: ")
#update_user(user_id)

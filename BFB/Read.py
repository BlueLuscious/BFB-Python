from peewee import *
from models.Models import User
from Create import insert_user

db = SqliteDatabase("db.sqlite")
user = User()

def select_user(user_id):
    user = User.select(User).where(User.id == user_id)
    for id in user:
        print(f"email: {id.email}, firstname: {id.firstname}, lastname: {id.lastname}, username: {id.username}")
    
#user_id = input("Enter the ID of the user you want to select: ")
#select_user(user_id)

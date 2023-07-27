from peewee import *
from models.Models import User

db = SqliteDatabase("db.sqlite")
user = User()


def drop_table_user():
    db.drop_tables([User])
    
def delete_user_by_id(user_id):
    try:
        user = User.get_by_id(user_id)
        user.delete_instance()
        print(f"User with ID {user_id} has been deleted.")
    except User.DoesNotExist:
        print(f"User with ID {user_id} does not exist.")

""" user_id = input("Enter the ID of the user you want to delete: ")
delete_user_by_id(user_id) """

""" drop_table_user() """
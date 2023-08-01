from peewee import *
from models.Models import User
from helpers.validations import Validations

db = SqliteDatabase("db.sqlite")
user = User()
validator = Validations()

def create_table_user():
    db.create_tables([User])
    
def insert_user(user):
    user.email = input("Enter your email: ")
    user.firstname = input("Enter your first name: ")
    user.lastname = input("Enter your last name: ")
    user.username = input("Enter your username: ")
    user.password = input("Enter your password: ")
    
    valdidatedEmail = validator.validate_exited_email(user.email)
    valdidatedUsername = validator.validate_exited_username(user.username)
    valdidatedPassword = validator.validate_exited_password(user.password)

    if valdidatedEmail and valdidatedUsername and valdidatedPassword:
        user.save()
    else:
        return False
    
#create_table_user()
#insert_user(user)
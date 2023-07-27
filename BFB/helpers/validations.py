from models.Models import User

user = User()

class Validations:
    @staticmethod
    def validate_exited_email(userEmail):
        exitedEmail = User.select().where(User.email == userEmail)
        if exitedEmail:
            print("This email already has an account")
            return False
        else:
            return True
    
    @staticmethod
    def validate_exited_username(userUsername):
        exitedEmail = User.select().where(User.email == userUsername)
        if exitedEmail:
            print("This username already exists")
            return False
        else:
            return True
        
    @staticmethod
    def validate_exited_password(userPassword):
        exitedEmail = User.select().where(User.email == userPassword)
        if exitedEmail:
            print("This password already exists")
            return False
        else:
            return True

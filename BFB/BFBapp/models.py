from django.db import models

# Create your models here.
class User(models.Model):
    email = models.EmailField(max_length=256)
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=100)
    username = models.CharField(max_length=25)
    password = models.CharField(max_length=15)
    repeat_password = models.CharField(max_length=15)
    
    def __str__(self) -> str:
        return self.firstname, self.lastname
    
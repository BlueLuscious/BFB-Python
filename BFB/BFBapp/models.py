from django.db import models

# Create your models here.
class Teacher(models.Model):
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=100)
    
    def __str__(self) -> str:
        return f"{self.firstname} {self.lastname}"
    
class Course(models.Model):
    name = models.CharField(max_length=50)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    subjects = models.CharField(max_length=50)
    description = models.TextField(max_length=256)
    
    def __str__(self) -> str:
        return f"{self.name}"

class User(models.Model):
    email = models.EmailField(max_length=256)
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=100)
    username = models.CharField(max_length=25)
    password = models.CharField(max_length=15)
    repeat_password = models.CharField(max_length=15)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, default=1)
    
    def __str__(self) -> str:
        return f"{self.firstname} {self.lastname}"

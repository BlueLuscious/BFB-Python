from django.contrib import admin
from .models import User, Course, Teacher

# Register your models here.
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    pass

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    pass

@admin.register(Teacher)
class TeacherAdmin(admin.ModelAdmin):
    pass
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def login_view(request):
    return render(request,"HTML/login.html")

def register_view(request):
    return render(request,"HTML/register.html")

def home_view(request):
    return render(request,"HTML/home.html")
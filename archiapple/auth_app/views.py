from django.shortcuts import render, redirect
from .models import User
from .forms import UserRegisterationForm
from django.contrib import messages
from django.contrib.auth import login, logout, authenticate

# Create your views here.

def register(request):
    if request.method == 'POST':
        form = UserRegisterationForm(request.POST)
        if form.is_valid():
            user = form.save()
            return redirect('login')
        else:
            messages.error(request, form.errors)
            return render(request, 'auth/registeration.html')
        return redirect('index')
    return render(request, 'auth/registeration.html')

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        user = authenticate(username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('index')
        messages.error(request, 'Invalid User Credentials!')
        return render(request, 'auth/login.html')
    return render(request, 'auth/login.html')

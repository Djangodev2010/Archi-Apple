from django.contrib.auth.forms import UserCreationForm
from django import forms
from .models import User

class UserRegisterationForm(UserCreationForm):
    password2 = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']


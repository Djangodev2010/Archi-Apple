from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    email = models.EmailField(unique=True)
    profile_picture = models.ImageField(upload_to='pfp/')
    level = models.PositiveIntegerField(default=1)
    xp = models.PositiveIntegerField(default=0)
    account_flags = models.PositiveIntegerField(default=0)

    def add_xp(self, action):
        if action:
            if action == 'UPLOAD_RESOURCE':
                self.xp += 10
            elif action == 'HELP_USER':
                self.xp += 15
        self.save()
        return self.xp

    def calculate_flags(self):
        if self.account_flags >= 50:
            self.is_active = False
        self.save()
        return self.is_active

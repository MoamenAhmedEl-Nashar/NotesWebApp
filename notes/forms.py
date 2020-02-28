from django import forms
from .models import *
from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.contrib.auth.forms import PasswordResetForm
from django.conf import settings
from datetime import timezone, date, datetime, timedelta


class CustomUserCreationForm(UserCreationForm):

    date_of_birth = forms.DateField(initial=date.today)

    class Meta(UserCreationForm.Meta):
        model = User
        fields = UserCreationForm.Meta.fields + ('email', 'mobile', 'language', 'region', 'date_of_birth', )
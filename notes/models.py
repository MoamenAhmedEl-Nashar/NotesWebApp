from django.db import models
from django.contrib.auth.models import AbstractUser
from languages.fields import LanguageField, RegionField
from phonenumber_field.modelfields import PhoneNumberField


class User(AbstractUser):
    """ Custom user model made when starting the project"""
    # describing the name of the field on the user model that is used as the unique identifier
    USERNAME_FIELD = 'email'
    name = models.TextField()
    email = models.EmailField(unique=True)
    password = models.TextField()
    mobile = PhoneNumberField(blank=True, null=True)
    language = LanguageField(max_length=8, default='en')
    region = RegionField(blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)

    # removes email from REQUIRED_FIELDS, and add username to be able to create superuser
    REQUIRED_FIELDS = ['username']

    class Meta:
        db_table = "User"
        managed = True


class Note(models.Model):
    """ """
    title = models.TextField()
    content = models.TextField()
    date = models.DateField(auto_now_add=True)
    user = models.ForeignKey('User', on_delete=models.CASCADE, null=True, blank=True)


    class Meta:
        db_table = "Note"
        managed = True

from django.shortcuts import render

from django.shortcuts import render, get_object_or_404, redirect, HttpResponseRedirect
from django.views import View
from django.views.generic import ListView, CreateView, DeleteView, UpdateView, FormView
from django.urls import reverse_lazy
from django.db.models import Sum
from .models import *
from .forms import *
from django.contrib.auth.forms import UserCreationForm


class SignUpPage(CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'signup.html'



class UserUpdateView(UpdateView):
    model = User
    success_url = '/'
    template_name = 'modify_user.html'
    fields = ['username', 'mobile', 'language', 'region']

    def get_object(self, *args, **kwargs):
        if self.request.user.is_authenticated:
            return self.request.user


class HomeView(ListView):
    model = Note
    context_object_name = "notes"
    template_name = "home.html"

    def get_queryset(self):
        if self.request.user.is_authenticated:
            return Note.objects.filter(user=self.request.user)


class NoteCreateView(CreateView):
    model = Note
    fields = ['title', 'content']
    success_url = '/'

    def form_valid(self, form):
        obj = form.save(commit=False)
        # define customer user field to be the current user.
        obj.user = self.request.user
        obj.save()        
        return HttpResponseRedirect(self.success_url)


class NoteTitleUpdateView(UpdateView):
    model = Note
    fields = ['title']
    success_url = '/'


class NoteContentUpdateView(UpdateView):
    model = Note
    fields = ['content']
    success_url = '/'


class NoteDeleteView(DeleteView):
    model = Note
    success_url = '/'

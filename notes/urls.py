from django.urls import path
from . import views
from django.contrib.auth.decorators import permission_required, login_required


urlpatterns = [
    path('signup/', views.SignUpPage.as_view(), name='signup'),
    path('modify_user/', login_required()(views.UserUpdateView.as_view()), name='modify_user'),
    path('', views.HomeView.as_view(), name='home'),
    path('create_note/', login_required()(views.NoteCreateView.as_view()), name='create_note'),
    path('update_note_title/<int:pk>/', login_required()(views.NoteTitleUpdateView.as_view()), name='update_note_title'),
    path('update_note_content/<int:pk>/', login_required()(views.NoteContentUpdateView.as_view()), name='update_note_content'),
    path('delete_note/<int:pk>/', login_required()(views.NoteDeleteView.as_view()), name='delete_note'),
]

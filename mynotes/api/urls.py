from django.urls import path
from .views import *

urlpatterns = [
    path('',getRoutes,name='routes'),
    path('coctails/',getCoctails,name='coctails'),
    # path('notes/create',createNote,name='create-note'),
    # path('notes/<int:pk>/update',updateNote,name='update-note'),
    # path('notes/<int:pk>/delete',deleteNote,name='delete-note'),

]

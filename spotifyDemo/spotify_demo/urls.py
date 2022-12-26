from . import views
from django.urls import path, include

urlpatterns = [
    path('spotify/', views.spotifyView.as_view(),name='spotify'),
]
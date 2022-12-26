from . import views
from django.urls import path, include
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('spotify/', csrf_exempt(views.spotifyView.as_view()),name='spotify'),
]
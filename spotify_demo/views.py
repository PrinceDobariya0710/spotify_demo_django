# Create your views here.
from django.shortcuts import render
from django.views.generic import View


class spotifyView(View):
    template_name = 'index.html'

    def get(self, request):
        return render(request, self.template_name)

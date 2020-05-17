from django.shortcuts import render
from django.views.generic import View

class ChessknightView(View):
    def get(self, request):
        return render(request, 'index.html')
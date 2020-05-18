from django.shortcuts import render
from django.views.generic import View

class ChessknightView(View):
    def get(self, request, start = "h8", variant = 1):
        return render(request, 'index.html')
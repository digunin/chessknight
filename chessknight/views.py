from django.shortcuts import render, redirect
from django.views.generic import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie

class ChessknightView(View):
    @method_decorator(ensure_csrf_cookie)
    def get(self, request, start = "0", variant = 0):
        if(start != "0"):
            if(int(variant)>10):
                return redirect("/"+start+"/10")
            if(int(variant) == 0):
                return redirect("/" + start + "/1")
        return render(request, 'index.html')
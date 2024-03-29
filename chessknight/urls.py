"""chessknight URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import re_path
from .views import ChessknightView
from graphene_django.views import GraphQLView
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('admin/', admin.site.urls),
    path('graphql/', GraphQLView.as_view(graphiql=settings.DEBUG)),
    path('', ChessknightView.as_view()),
    re_path(r'^(?P<start>[a-h][1-8])/$', ChessknightView.as_view()),
    re_path(r'^(?P<start>[a-h][1-8])/(?P<variant>\d\d?)/$', ChessknightView.as_view()),
]

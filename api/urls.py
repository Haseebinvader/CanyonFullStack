from django.contrib import admin
from django.urls import path, include
from .views import *
from rest_framework import routers

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'products', ProductViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api/', DataFetchView.as_view()),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

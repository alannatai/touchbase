"""server URL Configuration

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
from django.urls import include, path, re_path
from rest_framework import routers
from core.views import TBaseViewSet, OwnProfileViewSet, ProfileViewSet
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

"""
swagger docs
"""
api_info = openapi.Info(
    title="Touchbase API",
    default_version='v1',
    description="Touchbase Core Api",
)

schema_view = get_schema_view(
   public=True,
   permission_classes=[permissions.AllowAny],
)

router = routers.SimpleRouter()
router.register(r'^bases', TBaseViewSet)
# router.register(r'^users/me/$', MyProfileViewSet.as_view(
#     {'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'delete'}), name='myprofile')
# router.register(r'^users/', ProfileViewSet.as_view(
#     {'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'delete'}), name='myprofile')

router.register(r'^users/me/$', OwnProfileViewSet)
router.register(r'^users', ProfileViewSet)

urlpatterns = [
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^docs/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]


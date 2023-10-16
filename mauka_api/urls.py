from django.urls import path, include

from .views import (
    MaukaListApiView,
    userApi,
    userDetail,
    signalDetail,
    SignalListApiView
)

urlpatterns = [
    path('', MaukaListApiView.as_view()),
    path('user/', userApi),
    path('user/(?P<username>.+)/$', userDetail),
    path('signal/', signalDetail),
    path("test/", SignalListApiView.as_view())
]

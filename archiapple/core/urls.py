from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('sub-topic/<int:topic_id>/', views.sub_topics, name='sub_topics')
]


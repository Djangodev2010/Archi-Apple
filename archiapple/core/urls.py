from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('search-topics/', views.search_topics, name='search_topics'),
    path('topic-detail/<int:topic_id>/', views.topic_detail, name='topic_detail'),
    path('search-sub-topics/', views.search_sub_topics, name='search_sub_topics'),
    path('sub-topic-detail/<int:sub_topic_id>/', views.sub_topic_detail, name='sub_topic_detail'),
    path('search-resources/<int:topic_id>/<int:sub_topic_id>/', views.search_resources, name='search_resources'),
    path('search-resources/<int:topic_id>/', views.search_resources, name='search_resources'),
]

from django.shortcuts import render, get_object_or_404
from .models import Topic, SubTopic

# Create your views here.

def index(request):
    topics = Topic.objects.all()
    
    context = {
        'topics': topics
    }
    
    return render(request, 'index.html', context)

def topic_detail(request, topic_id):
    topic = Topic.objects.get(id=topic_id)

    context = {
        'topic': topic
    }

    return render(request, 'topic_detail.html', context)

def sub_topic_detail(request, sub_topic_id):
    sub_topic = SubTopic.objects.get(id=sub_topic_id)
    
    context = {
        'subtopic': sub_topic
    }
    
    return render(request, 'sub_topic_detail.html', context)

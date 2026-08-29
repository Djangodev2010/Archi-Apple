from django.shortcuts import render, get_object_or_404
from .models import Topic

# Create your views here.

def index(request):
    topics = Topic.objects.all()
    
    context = {
        'topics': topics
    }
    
    return render(request, 'index.html', context)

def sub_topics(request, topic_id):
    topic = get_object_or_404(Topic, id=topic_id)
    
    context = {
        'topic': topic
    }
    
    return render(request, 'sub_topics.html', context)

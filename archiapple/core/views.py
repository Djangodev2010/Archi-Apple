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
    sub_topics = SubTopic.objects.filter(topic=topic)

    context = {
        'topic': topic,
        'sub_topics': sub_topics
    }

    return render(request, 'topic_detail.html', context)

def search_topics(request):
    query = request.GET.get('query', '')

    topics = Topic.objects.filter(topic_name__icontains=query)

    context = {
        'topics': topics
    }
    
    return render(request, 'partials/topics.html', context)

def sub_topic_detail(request, sub_topic_id):
    sub_topic = SubTopic.objects.get(id=sub_topic_id)
    
    context = {
        'subtopic': sub_topic
    }
    
    return render(request, 'sub_topic_detail.html', context)

def search_sub_topics(request):
    query = request.GET.get('query', '')
    topic_id = request.GET.get('topic_id')
    topic = get_object_or_404(Topic, id=topic_id)
    sub_topics = SubTopic.objects.filter(topic=topic, name__icontains=query)

    context = {
        'sub_topics': sub_topics
    }
    
    return render(request, 'partials/sub_topics.html', context)

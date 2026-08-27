from django.db import models
from django.contrib.auth.models import User

# Create your models here.

# tech/language/topic/sub_topic(optional)/study_material

# study_material: type(online resources like blog posts, personal notes ki photos, video links), 
#                 resource link(if any), pictures(max 3), or video links,
#                 user
#                 topic
#                 title
#                 short description
#                 upvotes
#                 downvotes
#                 a dedicated discussions section(optional)
#                 extra context(if any) like some other links

class Topic(models.Model):
    """ A model class for all the topics of a programming language (e.g., Python-Django, JavaScript-React)"""
    
    language = models.CharField(max_length=255, default="")

    def __str__(self):
        return self.language

class SubTopic(models.Model):
    """A model class for all the sub-topic in a topic (e.g., Django-Models, React-React Apps)"""
    
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    name = models.CharField(max_length=355, default="")

    def __str__(self):
        return self.name

class Resource(models.Model):
    """The resource model containing the details for the resources uploaded"""

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255, default="")
    short_description = models.CharField(max_length=355, default="")
    upvotes = models.PositiveIntegerField(default=0)
    downvotes = models.PositiveIntegerField(default=0)
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    sub_topic = models.ForeignKey(SubTopic, on_delete=models.CASCADE, null=True, blank=True)
    resource_link = models.URLField(blank=True, null=True)
    extra_context_link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title

class ResourceImage(models.Model):
    """An images model for resources to upload multiple images"""
    
    resource = models.ForeignKey(Resource, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='media/resource_images')

    def __str__(self):
        return f'{self.resource.title}-Image'


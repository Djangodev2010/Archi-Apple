from django.contrib import admin
from .models import Topic, SubTopic, Resource, ResourceImage

# Register your models here.

admin.site.register(Topic)
admin.site.register(SubTopic)
admin.site.register(Resource)
admin.site.register(ResourceImage)

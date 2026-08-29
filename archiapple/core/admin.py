from django.contrib import admin
from .models import Topic, SubTopic, Resource, CommunityResource, CommunityResourceImage

# Register your models here.

admin.site.register(Topic)
admin.site.register(SubTopic)
admin.site.register(Resource)
admin.site.register(CommunityResource)
admin.site.register(CommunityResourceImage)

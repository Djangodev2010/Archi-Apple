from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError

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

    topic_name = models.CharField(max_length=255, default="")

    def __str__(self):
        return self.topic_name

class SubTopic(models.Model):
    """A model class for all the sub-topic in a topic (e.g., Django-Models, React-React Apps)"""

    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    name = models.CharField(max_length=355, default="")

    def __str__(self):
        return self.name

class Resource(models.Model):
    """The main resource model, provided by the platform by default"""

    title = models.CharField(max_length=255, default="")
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    sub_topic = models.ForeignKey(SubTopic, on_delete=models.CASCADE, null=True, blank=True)
    resource_link = models.URLField(blank=True, null=True)
    yt_video_link = models.URLField(blank=True, null=True)

    def __str__(self):
        return f'{self.title}-{self.topic}'

class CommunityResource(models.Model):
    """A separate resource model for resources uploaded by the community"""

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255, default="")
    short_description = models.CharField(max_length=355, default="")
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    sub_topic = models.ForeignKey(SubTopic, on_delete=models.CASCADE, blank=True, null=True)
    resource_link = models.URLField(blank=True, null=True)
    yt_video_link = models.URLField(blank=True, null=True)

    def clean(self):
        """Validating the resource to make sure only one type of resource is uploaded"""

        super().clean()

        # All the fields which we need to check
        key_fields = [self.resource_link, self.yt_video_link]
        populated_fields = 0

        # If the field isn't None or "", then add 1 to the populated field counter
        for val in key_fields:
            if val != None and val != "":
                populated_fields += 1

        # Raise a ValidationError as per the number of populated fields
        if populated_fields == 0:
            raise ValidationError("You Must Upload Atleast One Type Of Resource!")
        elif populated_fields > 1:
            raise ValidationError("You Can Only Upload One Type Of Resource!")


class CommunityResourceImage(models.Model):
    """An images model for resources allowing the upload of multiple images(the images must be limited to only 3)"""

    resource = models.ForeignKey(CommunityResource, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='media/resource_images')

    def clean(self):
        """Validate the number of images and restrict an upload of upto 3 images"""

        super().clean()

        # The count of all the images of the resource that we are uploading an image of
        image_count = self.resource.images.count()

        # The validation logic
        if image_count >= 3:
            raise ValidationError("You Can't Upload More Than 3 Images!")

    def __str__(self):
        return f'{self.resource.title}-Image'


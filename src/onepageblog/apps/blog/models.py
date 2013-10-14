import re

from django.contrib.auth.models import User
from django.db import models


class Tag(models.Model):
    """
    Blog post tag model.
    """
    name = models.CharField(max_length=50)

    @classmethod
    def get_tags(cls, post_type):
        posts = BlogPost.objects.filter(type=post_type)
        tags = {}
        max_count = 0
        for post in posts:
            for tag in post.tags.all():
                if tag.name not in tags.keys():
                    tags[tag.name] = 1
                else:
                    tags[tag.name] += 1
                if tags[tag.name] > max_count:
                    max_count = tags[tag.name]
        for name, count in tags.iteritems():
            tags[name] = cls.__get_scale__((count * 10) / max_count)

        return tags

    @classmethod
    def __get_scale__(cls, scale):
        if scale < 0:
            scale = 0
        if scale > 4:
            scale = 4
        return scale

    def __unicode__(self):
        return self.name


class BlogPost(models.Model):
    """
    Blog post model.
    """
    _title = models.CharField(max_length=200)
    content = models.TextField()
    user = models.ForeignKey(User, related_name='+')
    created_on = models.DateTimeField(auto_created=True)
    tags = models.ManyToManyField(Tag, null=True)
    published = models.BooleanField(default=True)
    slug = models.CharField(null=True, max_length=100)

    @property
    def short_content(self):
        pattern = re.compile(r'<[^>]*?>')
        text = pattern.sub('', self.content)
        return text[:240]

    def __unicode__(self):
        return self.post_title

    class Meta:
        ordering = ["-created_on"]

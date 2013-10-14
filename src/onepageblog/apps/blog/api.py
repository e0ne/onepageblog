from tastypie.resources import ModelResource

from onepageblog.apps.blog import models


class BlogResource(ModelResource):
    class Meta:
        queryset = models.BlogPost.objects.all()
        resource_name = 'posts'

from django.conf import settings

from tastypie import fields
from tastypie import resources

from onepageblog.apps.blog import models


class dict2obj(object):
    """
    Convert dictionary to object
    @source http://stackoverflow.com/a/1305561/383912
    """
    def __init__(self, d):
        self.__dict__['d'] = d

    def __getattr__(self, key):
        value = self.__dict__['d'][key]
        if type(value) == type({}):
            return dict2obj(value)

        return value


class BlogResource(resources.ModelResource):
    class Meta:
        queryset = models.BlogPost.objects.all()
        resource_name = 'posts'


class ContactsResourse(resources.Resource):
    name = fields.CharField(attribute='name')
    url = fields.CharField(attribute='url')
    city = fields.CharField(attribute='city')
    country = fields.CharField(attribute='country')
    email = fields.CharField(attribute='email')
    phone = fields.CharField(attribute='phone')

    class Meta:
        resource_name = 'contacts'

    def obj_get(self, request=None, **kwargs):
        return dict2obj(settings.CONTACTS)

    def obj_get_list(self, request=None, **kwargs):
        return [self.obj_get(request, **kwargs)]

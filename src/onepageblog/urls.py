from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.conf import settings

from tastypie.api import Api

from onepageblog.apps.blog import api
from onepageblog.apps.blog import views

v1_api = Api(api_name='v1')
v1_api.register(api.BlogResource())


admin.autodiscover()

urlpatterns = patterns('',
                       url(r'^admin/', include(admin.site.urls)),
                       )

if settings.DEBUG:
    urlpatterns += patterns('',
                            url(r'^media/(?P<path>.*)$',
                                'django.views.static.serve', {
                                    'document_root': settings.MEDIA_ROOT,
                                }),
                            url(r'^static/(?P<path>.*)$',
                                'django.views.static.serve', {
                                'document_root': settings.STATIC_ROOT,
                                }),
                            url(r'^$', views.index),
                            (r'^api/', include(v1_api.urls)),
                            )

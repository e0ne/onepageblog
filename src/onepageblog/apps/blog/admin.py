from django.contrib import admin

from onepageblog.apps.blog import models

admin.site.register(models.BlogPost, models.BlogPostAdmin)
admin.site.register(models.Tag)

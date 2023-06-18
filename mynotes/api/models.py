from django.db import models

# Create your models here.

class Coctail(models.Model):
    name = models.TextField(max_length=200,null=True,blank=True)
    image = models.ImageField(null=True,default='aperol_spritz-b0f28440.png')
    description = models.TextField(null=True)

    def __str__(self):
        return self.name
    
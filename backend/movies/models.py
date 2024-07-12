from django.db import models

# Create your models here.


class Movie(models.Model):
    title = models.CharField(max_length=255)
    year = models.IntegerField(null=True, blank=True)
    gross = models.BigIntegerField(null=True, blank=True)
    votes = models.BigIntegerField(null=True, blank=True)
    rating = models.FloatField(null=True, blank=True)

    def __str__(self):
        return self.title
from django.shortcuts import render
from rest_framework import generics
from .models import Movie
from .serializers import MovieSerializer

# Create your views here.

class MovieListView(generics.ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

class TopGrossMoviesView(generics.ListAPIView):
    serializer_class = MovieSerializer

    def get_queryset(self):
        year = self.kwargs['year']
        return Movie.objects.filter(year=year).order_by('-gross')[:5]

class TopVotedMoviesView(generics.ListAPIView):
    serializer_class = MovieSerializer

    def get_queryset(self):
        return Movie.objects.all().order_by('-votes')[:5]

class TopRatedMoviesView(generics.ListAPIView):
    serializer_class = MovieSerializer

    def get_queryset(self):
        year = self.kwargs['year']
        return Movie.objects.filter(year=year).order_by('-rating')[:10]

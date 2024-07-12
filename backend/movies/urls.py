from django.urls import path
from .views import MovieListView, TopGrossMoviesView, TopVotedMoviesView, TopRatedMoviesView

urlpatterns = [
    path('movies/', MovieListView.as_view(), name='movie-list'),
    path('movies/top-gross/<int:year>/', TopGrossMoviesView.as_view(), name='top-gross-movies'),
    path('movies/top-votes/', TopVotedMoviesView.as_view(), name='top-voted-movies'),
    path('movies/top-rated/<int:year>/', TopRatedMoviesView.as_view(), name='top-rated-movies'),
]

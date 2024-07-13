import csv, os
from django.core.management.base import BaseCommand
from movies.models import Movie
from movie_dashboard.settings import BASE_DIR
from pathlib import Path

class Command(BaseCommand):
    help = 'Load movies from CSV file'

    def handle(self, *args, **kwargs):
        def convert_gross(value):
            if value and value != 'null':
                if 'M' in value:
                    return int(float(value.replace('$', '').replace('M', '')) * 1000000)
                if 'K' in value:
                    return int(float(value.replace('$', '').replace('K', '')) * 1000)
            return None

        def convert_to_int(value):
            try:
                return int(float(value))
            except (ValueError, TypeError):
                return None

        def convert_to_float(value):
            try:
                return float(value)
            except (ValueError, TypeError):
                return None



        with open(os.path.join((BASE_DIR.parent.absolute()) / 'movies.csv'), newline='', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                Movie.objects.create(
                    title=row['MOVIES'],
                    year=convert_to_int(row['YEAR']),
                    gross=convert_gross(row['Gross']),
                    votes=convert_to_int(row['VOTES']),
                    rating=convert_to_float(row['RATING']),
                )
        self.stdout.write(self.style.SUCCESS('Successfully loaded movies'))

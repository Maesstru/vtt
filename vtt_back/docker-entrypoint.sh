#!/bin/bash
# Run migrations
python manage.py makemigrations
python manage.py makemigrations server
python manage.py migrate

# Start the Django server
exec "$@"
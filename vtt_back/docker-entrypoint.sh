#!/bin/bash
# Run migrations
python manage.py makemigrations
python manage.py makemigrations adicorp_backend
python manage.py migrate

# Start the Django server
exec "$@"
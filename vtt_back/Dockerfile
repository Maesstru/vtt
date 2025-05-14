# backend/Dockerfile
FROM python:3.12.10

WORKDIR /app

COPY . /app

RUN pip install --no-cache-dir -r req.txt

COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

EXPOSE 8000

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

FROM python:slim
WORKDIR /app/
RUN pip install flask
COPY flaskApp.py .
CMD ["flask", "--app", "flaskApp", "run", "--port", "8000", "--host", "0.0.0.0"]



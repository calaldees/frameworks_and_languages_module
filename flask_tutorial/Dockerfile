FROM python:slim
WORKDIR /app/
RUN pip install flask
COPY . .
#COPY flaskApp.py .
CMD ["flask", "--app", "app", "run", "--port", "8000", "--host", "0.0.0.0"]



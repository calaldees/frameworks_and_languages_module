FROM python:slim
WORKDIR /app/ 
#make sure the WORKDIR is correct
RUN pip install bottle
COPY . .
#CMD [ "python", "-m", "bottleApp.py" ]
CMD ["bottle_test", "--app", "bottleapp", "run", "--port", "8000", "--host", "0.0.0.0"]
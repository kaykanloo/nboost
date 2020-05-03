FROM python:3.7 AS build

WORKDIR /build
RUN git clone --branch dev https://github.com/kaykanloo/nboost.git

WORKDIR /build/nboost
RUN python setup.py sdist

FROM pytorch/pytorch:1.5-cuda10.1-cudnn7-runtime

RUN apt-get update && apt-get install -y \
    gcc

RUN pip install --upgrade pip

COPY --from=build /build/nboost/dist/nboost-0.3.6.tar.gz /tmp/
RUN pip install /tmp/nboost-0.3.6.tar.gz[pt]

COPY requirements.txt /tmp
RUN pip install -r /tmp/requirements.txt

COPY ./entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

COPY ./start.sh /app/start.sh
RUN chmod +x /app/start.sh

COPY ./gunicorn_conf.py /app/gunicorn_conf.py

COPY ./app /app
WORKDIR /app/

ENV PYTHONPATH=/app

EXPOSE 80

ENTRYPOINT ["/app/entrypoint.sh"]

# Run the start script, it will check for an /app/prestart.sh script (e.g. for migrations)
# And then will start Gunicorn with Meinheld
CMD ["/app/start.sh"]

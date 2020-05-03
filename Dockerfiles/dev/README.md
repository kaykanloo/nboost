# Build docker image
docker build -t nboost .

# Run the docker image
docker run -it --rm  -p 80:80 --gpus=all -e UHOST="172.17.0.2"  -e WEB_CONCURRENCY="1" -e MODEL_DIR="nboost/pt-bert-base-uncased-msmarco" nboost

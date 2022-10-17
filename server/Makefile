DOCKER_IMAGE:=server

run: build 
	docker run --rm -it --publish 8000:8000 ${DOCKER_IMAGE}
build:
	docker build --tag ${DOCKER_IMAGE} .

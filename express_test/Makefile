DOCKER_IMAGE:=freeCycle

run: build 
	docker run --rm -it --publish 8000:8000 ${DOCKER_IMAGE}
run_shell: build 
	docker run --rm -it --publish 8000:8000 --volume ${PWD}:/app/:ro --entrypoint /bin/sh ${DOCKER_IMAGE}
build:
	docker build --tag ${DOCKER_IMAGE} .
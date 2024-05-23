build_docker:
	docker build -t game/tg:latest -f docker/Dockerfile ./

start_docker:
	docker run -d --restart unless-stopped game/tg:latest

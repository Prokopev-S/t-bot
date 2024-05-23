build_docker:
	docker build -t game/tg:latest -f docker/Dockerfile ./

start_docker:a
	docker run -d --restart unless-stopped game/tg:latest

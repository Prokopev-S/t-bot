build_docker:
	docker build -t game/tg:latest -f docker/Dockerfile ./

start_docker:
	docker run --rm -d -p 3003:3003 game/tg:latest

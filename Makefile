.PHONY: production

DOCKER_COMPOSE := $(shell command -v docker-compose 2> /dev/null || echo "docker compose")

production:
	$(DOCKER_COMPOSE) run --rm assets sh -c "npm install && npm run build"
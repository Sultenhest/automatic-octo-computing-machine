.PHONY: up dev down restart url

# Build the image if needed and replace the node_modules volume, so dependency
# changes are always picked up
up: url
	docker compose up --build --renew-anon-volumes hundefotografi

# Same as up; kept for habit
dev: up

down:
	docker compose down

restart:
	docker compose restart hundefotografi

# Links for other devices on the same network
url:
	@echo "Local:   http://localhost:8080"
	@echo "Network: http://$$(scutil --get LocalHostName).local:8080"
	@echo "Network: http://$$(ipconfig getifaddr en0 || ipconfig getifaddr en1):8080"

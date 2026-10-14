up: url
	docker compose up hundefotografi

down:
	docker compose down

restart:
	docker compose down && docker compose up

# Rebuild the image and replace the node_modules volume, so dependency changes are picked up
dev: url
	docker compose up --build --renew-anon-volumes hundefotografi

# Links for other devices on the same network
url:
	@echo "Local:   http://localhost:8080"
	@echo "Network: http://$$(scutil --get LocalHostName).local:8080"
	@echo "Network: http://$$(ipconfig getifaddr en0 || ipconfig getifaddr en1):8080"

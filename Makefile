.PHONY: up dev down restart images url

# Start the dev server
up: url
	docker compose up hundefotografi

# Rebuild the image and replace the node_modules volume; use after dependency changes
dev: url
	docker compose up --build --renew-anon-volumes hundefotografi

down:
	docker compose down

restart:
	docker compose restart hundefotografi

# Rebuild the resized images in static/ from the originals in images-src/
images:
	docker compose exec hundefotografi node scripts/resize-images.js

# Links for other devices on the same network
url:
	@echo "Local:   http://localhost:8080"
	@echo "Network: http://$$(scutil --get LocalHostName).local:8080"
	@echo "Network: http://$$(ipconfig getifaddr en0 || ipconfig getifaddr en1):8080"

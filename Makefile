up:
	docker compose up hundefotografi

down:
	docker compose down

restart:
	docker compose down && docker compose up

dev:
	docker compose up --build hundefotografi
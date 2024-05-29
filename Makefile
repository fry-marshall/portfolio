dev:
	docker-compose -f docker-compose.dev.yml up -d

start:
	docker pull frymarshall/portfolio && docker compose -f docker-compose.prod.yml up -d
	
deploy:
	docker build -t portfolio -f Dockerfile.prod . && docker tag portfolio frymarshall/portfolio:latest && docker push frymarshall/portfolio:latest 
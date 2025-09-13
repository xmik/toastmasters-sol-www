# toastmasters-sol-www

This is a Speakers of Łódź Toastmasters club website.

## Run locally
Run the container:
```
docker-compose -f ./docker-compose.yml up -d
```

Visit: http://localhost:8000

Destroy the container:
```
docker-compose -f ./docker-compose.yml down
```

## Deployment

To deploy the website:

1. Build production assets:
   ```
   make production
   ```

2. Push to repository:
   ```
   git add .
   git commit -m "build: production assets"
   git push
   ```

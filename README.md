To run development environment using docker-compose:

```
docker-compose up
```

To run delevopment environment using docker:

```
docker build -t itsme .
```

```
docker run -it \
-v .:/usr/src/app \
-v /usr/src/app/node_modules \
-p 3000:3000 \
--rm \
itsme
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

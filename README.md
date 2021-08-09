# Installation - Docker
```bash
# start docker-compose
$ docker-compose up

# stop docker-compose
$ docker-compose down
```

# Installation - Local

```bash
# install dependencies
$ npm install

# set up configuration files
$ cp .env.dist .env
```

# Running the app - Local

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# API Docs
After running the app, the API Docs would be available at
- [API Docs](https://localhost:3000)
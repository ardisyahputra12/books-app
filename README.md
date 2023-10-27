# Books App

Build web-based applications that run inside Docker containers, it has CRUD features and uses a Postgresql database as storage.

# Endpoints

`/book` => [POST, GET, DELETE, PUT]

`/borrow` => [POST]

`/return` => [POST]

# How to run?

Use [Makefile](./Makefile) for simple commands.

## Requirements

- Make sure docker and docker-compose are installed
- Make sure service for docker is running

## Testing

To start container, use command:

```
docker-compose up
```

To build container, use command:

```
docker-compose up --build
```

To stop container, use command:

```
docker-compose down
```

To show log container, use command:

```
docker-compose logs -f
```

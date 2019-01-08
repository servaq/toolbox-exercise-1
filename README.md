# Toolbox - Exercise 1

Author: Sergio Vaquero

## Overview

Basic server and client with API REST developed with Node.js running on Docker with docker-compose.

## Technology

- Node.js 8
- Express 4
- Docker-Compose 3

## Server

### How to start the server?

- Requirements:
	- Docker
- Path: `/server`
- Run: `docker-compose build`
- Run: `docker-compose up -d`

## Client

### How to run che client?

- Requirements:
	- Node.js 8+
- Path: `/client`
- Run: `node client.js "message to test"`

## API REST specification:

GET: /hello/`<message>`

Returns body:
```
{
	"message": "<message>"
}
```

## Tests

- Path: `/server`
- Run: `npm test`

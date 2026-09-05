
# ArchiApple

A community-driven resource sharing platform to help beginners find the best resources to learn the things they want.


## Features

- A clean layout organised between Topics, Sub Topics and Resources
- Official platform recommendations for better learning
- A community-driven resource library
- Dynamic searching using HTMX

## Process
As a beginner, I always juggled between 10 different resources, wasting a ton of time and effort finding resources before actually learning from them. To solve that issue, I decided to create ArchiApple, a community-driven resource hub where users can find some of the best resources to learn from and even upload the resources that they think are good.
## Run Locally

Clone the project

```bash

  git clone https://github.com/Djangodev2010/Archi-Apple.git
```

Install dependencies

```bash
  uv sync
```

Go to the project directory

```bash
  cd archiapple
```

Migrate the database

```bash
  uv run manage.py makemigrations
  uv run manage.py migrate
```

Start the server

```bash
  uv run manage.py runserver
```

Open https://localhost:8000/

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

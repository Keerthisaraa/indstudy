FROM tiangolo/uvicorn-gunicorn-fastapi:python3.8

# Install Poetry
RUN curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | POETRY_HOME=/opt/poetry python && \
	cd /usr/local/bin && \
	ln -s /opt/poetry/bin/poetry && \
	poetry config virtualenvs.create false 

# Prod
COPY ./ ./
WORKDIR /app

RUN poetry install --no-root --no-dev

# CMD [ \
# 	"watchmedo", \
# 	"auto-restart", \
# 	"--directory", "./my_project", \
# 	"--patterns", "*.py", \
# 	"--recursive", \
# 	"--", \
# 	"celery", \
# 	"-A", "tasks", \
# 	"worker", \
# 	"-l", "INFO" \
# 	]

# RUN pip install -r requirements.txt
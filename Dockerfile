FROM oven/bun:latest

WORKDIR /portfolio

COPY package.json .
COPY bun.lock .

RUN bun i 

COPY . .

EXPOSE 3000

RUN bun run build

CMD ["bun","start"]

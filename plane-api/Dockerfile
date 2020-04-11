FROM node:12-alpine

RUN mkdir -p /var/publish/mid
ADD . /var/publish/mid

WORKDIR /var/publish/mid
ENV HOST 0.0.0.0
ENV PORT 6000
EXPOSE 6000

CMD ["npm","run","start:prod"]
docker build -t registry.cn-shanghai.aliyuncs.com/first_ry/bplane:v1.2 .
docker run -d -p 2000:2000 --name bplane registry.cn-shanghai.aliyuncs.com/first_ry/bplane:v1.2
docker push registry.cn-shanghai.aliyuncs.com/first_ry/bplane:v1.2

version: '2'

services:
  bplane:
    image: registry.cn-shanghai.aliyuncs.com/first_ry/bplane:v1
    restart: always
    ports:
      - 2000:2000
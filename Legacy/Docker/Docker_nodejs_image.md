# Nodejs & Docker

Docker file -> Docker Image -> ?

## package.json
- 프로젝트의 정보와 프로젝트에서 사용 중인 패키지의 의존성을 관리하는 곳

## server.js
- entry point(시작점)로서 가장 먼저 시작되는 파일

## Dockerfile Example
```
FROM node:10

WORKDIR /usr/src/app

COPY ./ ./

RUN npm install

EXPOSE 8080

CMD ["node","server.js"];
```

## COPY

- node:10 BaseImage에는 package.json과 같은 파일이 컨테이너에 존재하지 않는다. 
- 그래서 COPY를 통해 컨테이너에 추가로 필요한 파일을 복사해주어야 한다. 두 번째 파라미터의 경우 복사된 파일이 컨테이너에서 어디에 위치할 지를 지정한다.

## 생성된 컨테이너 내에 서버를 접근하기 위해서
- 네트워크는 로컬 네트워크에 있던 것을 컨테이너 내부에 있는 네트워크에 연결시켜주어야 접속이 가능하다
- -p 로컬호스트_네트워크_포트번호 : 컨테이너_서버_네트워크_포트번호

```
docker run -p 49160:8080 lutecebaek/nodejs:latest

my_computer <-> container

49160 <-> 8080
```

## WORKDIR(Working Directory)
- 이미지 안에서 어플리케이션 소스 코드를 갖고있을 디렉토리를 생성하는 것이다.
- 이 디렉토리가 어플리케이션에 working 디렉토리에 해당한다.

## 왜 별도로 working 디렉토리가 있어야 할까?
- 기존 시스템 파일에 영향을 줄 수 있음
- 프로젝트 별 관리가 용이하다


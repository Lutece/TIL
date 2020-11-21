# Docker 파일로 Docker 이미지 만들기

## Docker 이미지 생성 순서

순서
- Dockerfile 작성 -> Docker Client -> Docker Server -> 이미지 생성

Dockerfile 작성
- Docker File이란 Docker Image를 만들기 위한 설정파일이다.
- 컨테이너가 어떻게 행동해야 하는 지에 대한 설정들을 정의해준다.

Docker Client
- Docker File에 입력된 것들이 Docker Client에 전달되어야 한다.

Docker Server
- Docker Client에 전달된 모든 중요한 작업들을 하는 곳



## Docker File을 만드는 순서
(Docker 이미지가 필요한 것이 무언인지를 생각하기)

1. 베이스 이미지를 명시해준다. (파일 스냅샷에 해당)
2. 추가적으로 필요한 파일을 다운 받기 위한 몇가지 명령어를 명시해준다.
(파일 스냅샷에 해당)
3. 컨테이너 시작 시 실행될 명령어를 명시해준다.
(시작 시 실행될 명령어에 해당)

## 베이스 이미지란?
- Docker 이미지는 여러개의 레이어로 되어 있다. 그중에서 베이스 이미지는 이 이미지의 기반이 되는 부분이다.
- 레이어는 중간 단계의 이미지다.


-- 구조 --

레이어
    <- 레이어
레이어
베이스 이미지 (ex: OS)

## 도커 파일을 만들어보자!
```
# 베이스 이미지를 명시해준다.
FROM baseImage

# 추가적으로 필요한 파일들을 다운로드 받는다.
RUN command

# 컨테이너 시작시 실행 될 명령어를 명시해준다.
CMD [ "executable" ]
```

## 키워드
FROM
- 이미지 생성시 기반이 되는 이미지 레이어입니다.
<이미지 이름><태그> 형식으로 작성
태그를 안붙이면 자동적으로 가장 최신것으로 다운 받음
ex) ubuntu:14.04

RUN
- 도커 이미지가 생성되기 전에 수행할 쉘 명령어

CMD
- 컨테이너가 시작되었을 때 실행할 실행 파일 또는 쉘 스크립트입니다.
해당 명령어는 DockerFile 내 1회만 쓸 수 있습니다.

## Build
- Docker 파일에 입력된 것들이 Docker Client에 전달되어서 도커 서버가 인식할 수 있도록해야 합니다.
- docker build ./ or docker build .

## intermediate container
1. build가 실행 시 BaseImage 환경이 준비된다.
2. 임시 Container가 생성되고, BaseImage 환경과 함께 추가적으로 작성한 스크립트와 같은 내용들이 임시 Container에 적용됨. (새로운 명령어, 새로운 파일 스냅샷 등..)
3. 임시 컨테이너(모든 것이 들어간)를 기반으로 새로운 이미지를 생성하고, 임시 컨테이너는 제거됨

## 이미지에 이름 적용하기
- 기본적으로 이미지의 이름은 해시값이 적용된다.

```
docker run -it d7976aedec8a
```

### 도커 이미지의 이름 짓기
- -t 나의_도커_아이디/저장소_또는_프로젝트이름:버전

```
# 빌드를 통해 이미지 생성과 함께 이미지를 생성한다.
docker build ./ -t lutecebaek/hello-docker:latest

# 이름이 부여된 이미지의 경우 이미지 이름을 통해 이미지를 선택한다.
docker run -it lutecebaek/hello-docker:latest
```
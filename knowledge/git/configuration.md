# Git과 관련된 tip을 정리하는 공간

## 관련 URL
- (git 최초 설정)[https://git-scm.com/book/ko/v1/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%B5%9C%EC%B4%88-%EC%84%A4%EC%A0%95]

## git config --global
- 로컬 환경에서 push 명령어를 내릴 때 보내줘야할 정보를 미리 설정할 수 있음

## 추가로 정리
- git config credential

```
$ git config credential.helper store
$ git push http://example.com/repo.git
Username: <type your username>
Password: <type your password>
```
# Git과 관련된 tip을 정리하는 공간

## 관련 URL
- (git 최초 설정)[https://git-scm.com/book/ko/v1/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%B5%9C%EC%B4%88-%EC%84%A4%EC%A0%95]

## git config --global
- 로컬 환경에서 깃 계정 정보를 default로 설정해준다. 따라서 git 명령를 진행 시 git에 대한 account 정보를 반복적으로 알려주지 않아도 된다.

```
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```
## 설명
- 이 예제는 `webpack.js.org`의 `Guide / Getting Started`의 과정을 진행한 예제입니다.

```javascript
    npm init -y
    npm install --save-dev webpack
    //프로젝트 세팅 및 웹팩 설치

    ./node_modules/.bin/webpack src/index.js dist/bundle.js
    //웹팩을 직접 실행하는 스크립트

    ./node_modules/.bin/webpack --config webpack.config.js
    //웹팩 설정파일을 통해 실행하는 스크립트
```
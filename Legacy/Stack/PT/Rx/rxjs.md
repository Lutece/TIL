# RxJS에 대하여

---

# RxJS에 대하여
- Reactive Programming 이란?
    - 상태관리와 감시자 패턴
    - 프로그램 환경과 프로그램의 관계
        - 상호작용 시나리오
            - 푸시 시나리오
            - 풀 시나리오
- ReactiveX는 왜 나왔을까?
    - 에릭 마이어 왈
- RxJS 이해하기
     - 스트림
     - 쓰레드
     - 옵저버블과 옵저버
     - 쓰레드
     - 스케줄러
     
- RxJS에서 하는 일
    - 비동기 제어
    - 데이터 처리
    - 데이터 전파

---

### Rx가 하는 일
1. 비동기 제어
2. 데이터 처리
3. 데이터 전파

- 일관된 방식으로 비동기 상태에서 전달되는 데이터 스트림을 안전하게 처리하는 라이브러리


---

## 1. 비동기 제어

---

## 비동기 내의 데이터 형태

### Push 시나리오
![push](https://huns.me/assets/images/legacy/reactive-eric-1024x640.png)
- 외부 환경을 바라보고 있다가 외부 환경에서 데이터 스트림을 방출하면 그 떄 어플리케이션이 데이터를 활용

---

### 비동기 상태에서 다루는 데이터

- Callback
- Event
- Request & Response
- Promise
- ...

---

## Rx의 지향점
- 다양한 형태의 비동기 방식을 Rx라는 하나의 인터페이스로 단순하게 다룰 수 있도록 도와줌

---

### callback

callback ... callback ... callback...

```

데이터 스트림

[callback, callback, callback, callback]

```

- index = 시간

---

## 비동기 데이터 표현

### 스트림
- 스트림(stream)은 시간이 지남에 따라 사용할 수 있게 되는 일련의 데이터 요소를 가리키는 수많은 방식 (wiki)

### Rx에서의 스트림
- --- Event.click --- Event.click --- Event.click --- Event.click ---> ( 데이터 스트림 )
- --- callback --- callback --- callback --- callback ---> ( 데이터 스트림 )

-                        (Logic)

- --- data --- data --- data --- data ---> ( 새로운 데이터 스트림 )

---

![marble](https://cdn-images-1.medium.com/max/800/0*6oy3iEnx8ySbLul-.png)

---

## 데이터 스트림

- --- Event.click --- Event.click --- Event.click --- Event.click --->

- 데이터 스트림 => Observable

### Rx에서 비동기 형태로 전달되는 데이터 스트림을 Observable이라고 부른다.

- able = 특성을 지닌 상태를 나타낼 때 사용

---

## 2. 데이터 처리

참고 : https://huns.me/development/2051



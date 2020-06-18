오류를 일으키는 상황
1. 수 많은 분기문과 반복문의 제어
    - 커질수록 의도를 파악하기 힘들어진다.
2. 변수의 사용
    - 값이 변화할 수 있다면 그 순간부터 오류가 일어날 가능성이 시작된다.

상태관리에서 찾아볼 수 있는 문제점

1. 입력에 대한 오류
2. 입력을 처리하는 로직에 대한 오류
3. Tight Coupling (강한 결합)





Rx?
1. Push 시나리오

Rx를 사용하면 좋은 이유
1. 감시자 패턴의 장점인 Loosely Coupling 이 적용됨
2. 인터페이스의 단일화
    - Observable 클래스를 통해 추상화
3. 기존 감시자 패턴의 부족한 부분 보완
    - 일관성 있게 구현
    - error, complete와 같은 로직을 더 쉽게 처리

Observable
- Observer가 다루는 데이터
- 시간을 축으로 연속적인 데이터를 저장한 컬렉션(= 스트림)
- 비동기 상태로 다루는 다양한 데이터들을 Rx에서 하나의 형태로 다룰 수 있게 해주는 인터페이스 역할
- 다루는 데이터의 형태 또는 목적에 따라 Observable을 생성해주는 함수를 다양하게 제공 & 직접 생성도 가능 (비추)
1. read-only
2. reactive
3. 불변

Cold vs Hot

Hot Observable = Connectable Observable
- Observer와의 관계가 1:1 vs 1:N
- Cold vs Hot = VOD vs Youtube
= 시청자가 시청하는 시점에 방송이 진행되냐, 시청자와는 상관없이 방송이 진행되냐의 차이

Operator - 함수형 프로그래밍
- Observable을 다루는 함수
1. 새로운 Observable을 반환
2. 반복문과 분기문에 대한 프로세스를 읽기 쉽게 해준다.


Marble Diagram
- 시간에 따른 데이터 흐름을 추상화
- Observable이 Operator에 의해 다른 스트림으로 변화하는 과정을 표현

Observer
- Observable 데이터를 소비하는 주체

Subscription
- Push 시나리오 상태를 제어
    - 상태를 전파 또는 전파 상태를 해제

Subject
- Read & Write 가능한 Observable

= 양방향 보단 단방향의 흐름 선택


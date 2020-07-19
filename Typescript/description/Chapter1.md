# 자바스크립트와 Type Safety

## 자바스크립트의 성질
- 자바스크립트는 문제의 여지가 있는 코드라도 최대한 예외를 throw 하지 않고 실행하려 한다.
- 자바스크립트는 코드에 실수를 저지른 시점과 그 실수를 처음 인지하는 시점이 달라지기 쉽다. 프로그램이 실행되는 시점에 문제를 알려주기 때문이다.

```javascript
3 + [] === '3'
```

타입스크립트는 자바스크립트와 비교했을 때 에러를 알려주는 시점이 코드를 작성하는 순간이기 때문에
더 유지하기 쉬운 프로그램을 설계할 수 있다.
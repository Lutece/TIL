const Flock = require('./Flock.js');

const flockA = new Flock(4);
const flockB = new Flock(2);
const flockC = new Flock(0);
const result = flockA
    .conjoin(flockC)
    .breed(flockB)
    .conjoin(flockA.breed(flockB))
    .seagulls;

console.log(result);


/*
    이걸 객체 지향적인 관점으로 진행하는 것이라고 얘기할 수 있을진 모르겠지만,
    순수하게 result의 코드를 읽다보면 16의 결과를 예측할 수 있다.
    하지만, 여기서 32가 나와버린다.
    flockA의 값이 유지되기 떄문이다.
    
    중간에 값이 바뀐다.. = flockA의 this.seagulls 값이 4로 유지될 것처럼 느껴지지만,
    중간부터는 8인 상태로 진행이 된다.
    알아차리기 힘들다..

    코드가 진행될 때 값이 언제 어떻게 바뀌는 지를 인지하며 해석한다는 건 정말 불편하다고 느낀 예제였다.
    그래서 바로 다음에 함수형으로 바꿔 진행하는 예제가 나옴..
*/
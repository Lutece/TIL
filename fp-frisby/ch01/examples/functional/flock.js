const conjoin = (flockX, flockY) => flockX + flockY;
const breed = (flockX, flockY) => flockX * flockY;

const flockA = 4;
const flockB = 2;
const flockC = 0;
const result = conjoin(
    breed(
        flockB,
        conjoin(flockA, flockC) 
    ),
    breed(
        flockA, 
        flockB
    )
);

console.log(result);

/*
    결과가 16이 나옴.
    원본 값이 변화가 없음을 보장한 상태에서,
    코드의 진행을 파악하는 건 훨씬 쉽다는 걸 이해함.

    원본의 값에 변화를 주지 않고,
    연산이 반영된 새로운 값을 넘기는 방식이 훨씬 이해가 쉽다.
    일단 중간에 뭐가 바뀐다고 인지하면서 이해하지 않아도 되니까 편한 듯..
*/

/*
    여기서 리팩토링을 하게 되는데,
    정의된 함수의 모습을 보고 바꿔보는 것이다.
*/

const add = (flockX, flockY) => flockX + flockY;
const multiply = (flockX, flockY) => flockX * flockY;

const result2 = add( multiply( flockB, add(flockA, flockC) ), multiply( flockA, flockB ) );
/*
    이런 모습이 되는데,
    여기서 수학적으로 함수를 접근하면 다음과 같은 형태를 발견한다.

    add( a, 0 ) === a;
    A + 0 = A

    add( add( a, b ), c) === add ( add( a, add(b, c)))
    (A+B)+C === A+(B+C)

    add(a, b) === add(b, a)
    A+B === B+A

    add(multiply(x,y), multiply(x,z)) === multiply(x, add(y,z))
    X*Y + X*Z === X(Y+Z)
*/

/*
    다음과 같은 형태를 이용해 리팩토링하면 처음에 작성한 모습이 다음과 같이 바뀐다.
 */

const result3 = multiply(flockB, add(flockA, flockA));
 
console.log(result2);
console.log(result3);



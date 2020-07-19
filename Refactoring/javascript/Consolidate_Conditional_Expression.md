# 조건식 통합하기

조건식에서 여러 조건들이 사용되는 경우, 그 그 조건들에 의해 제어되는 상황을 코드로 알기 어려울 수 있다.  
그래서 여러 조건들의 값이 결정되는 문을 함수 추출하기를 통해 하나의 함수안으로 코드를 작성하고,  
함수의 이름을 통해 조건문에 의해 제어가 되는 상황을 표현하면 더 읽기 쉬워지는 코드가 될 수 있다.

```javascript
if(anEmployee.seniorty < 2) return 0;
if(anEmployee.monthsDisabled > 12) return 0;
if(anEmployee.isPartTime) return 0;
```

```javascript
if(isNotEligibleForDisability()) return 0;

function isNotEligibleForDisability() {
  return (
    (anEmployee.seniorty < 2) 
    || (anEmployee.monthsDisabled > 12) 
    || (anEmployee.isPartTime)
  )
}
```

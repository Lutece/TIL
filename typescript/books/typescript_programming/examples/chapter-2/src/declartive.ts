/*
  토마토 7000
  오렌지 15000
  사과 10000
*/

export let totalPrice = 0;

totalPrice += 7000;
totalPrice += 15000;
totalPrice += 30000; // 뭘사려는건지 알 수 없다.
totalPrice += 8000; //7000원을 8000원에..? = 실수 가능

// 여러개 목록 관리하기도 힘들고 수정하는 것도 힘들다..
// 명령형의 한계

export function addTomato() {
  totalPrice += 7000; // 전역상태를 변경 = 부수효과가 일어남 = 순수함수가 아니다.

  // 부수효과를 일으키는 서브루틴, 프로시저에 해당한다.
}

export function add100Tomatos() {
  addTomato();
  addTomato();
  addTomato();
  //... 100번 호출해야함
  // 100번 호출한게 맞는지 확인하기 힘들다. ,다른 작업을 이어서하기도 힘들듯..
  // 명령형 프로그래밍은  어떻게 행동해야 하는 가에 집중한다. => 과정 자체에 집중하게 된다. = 과정을 있는 그대로 코드를 통해 표현해야 한다.
}

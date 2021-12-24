# A Complete Guide to Grid 번역 

## 소개 
'Grid'라고 알려진 CSS 그리드 레이아웃은 그리드 기반의 UI를 디자인 할 수 있도록 지원하기 위해 나온 2차원 레이아웃 시스템입니다.
CSS는 우리의 웹 페이지를 위해 여러 요소들을 배치하곤 했지만, 배치를 그렇게 잘 하진 못했습니다.
첫째로, 우리는 테이블(table), float, 포지션(positioning), 인라인-블럭과 같은 것들을 사용하여 배치했습니다.
하지만, 이 모든 방법들은 본질적으로 핵(hacks)과 같은 우회하는 방법이었으며, 수직 정렬과 같은 중요한 기능들을 배제했습니다.
플렉스박스가 도울 수 있는 부분이 있었지만, 플렉스박스는 1차원을 위한 레이아웃이었기에, 복잡한 2차원 레이아웃을 잘 돕진 못했습니다.
(사실, 플렉스박스와 그리드는 함께 사용하면 하나만 사용될 때보다 효율이 더 높습니다.)
그리드는 특히 우리가 웹사이트를 만들 때마다, 핵(Hack)을 사용하는 방식으로 해결했던 레이아웃 문제들을 해결하기 위해 만들어진 첫번째 CSS 모듈입니다.

여기에 이 가이드를 만들 수 있도록 영감을 준 중요한 두가지 것이 있습니다. 
첫번째는 Rachel Andrew의 놀라운 책 [ Get Ready for CSS Grid Layout](https://abookapart.com/products/get-ready-for-css-grid-layout)입니다.
이 책은 철저하고 명쾌하게 그리드를 소개하고 있으며, 저는 이 책을 여러분이 읽을 수 있길 매우 권장합니다.
저에게 큰 영감을 준 다른 것은 Chris Coyier의 [ A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)입니다.
이 글은 제가 플렉스박스의 모든 것에 대해 조언을 얻게된 리소스입니다. 이 글은 구글에 'flexBox'를 검색했을 때 가장 상위에 결과로 노출되는 것처럼 많은 사람들을 도왔습니다.

이 가이드를 통한 저의 의도는 최신 버전의 명세에 기반한 그리드(Grid) 개념을 여러분께 보여주는 것입니다.
그래서 저는 옛날 IE 구문에 대해 지원하지 않을 것이며, 정기적으로 이 문서를 업데이트 하기 위해 최선을 다할 것입니다.

## 기본과 브라우저 지원 

먼저 시작하기 위해서, 컨테이너 엘리먼트에 'display: grid'를 정의해야 하며,
'grid-template-colums'와 'grid-template-rows'에 행과 열에 대한 크기를 설정해주어야 합니다.
그리고 'grid-column'과 'grid-row' 설정과 함께 자식 요소들을 그리드 컨테이너 내에 배치시킵니다.
플렉스박스(flexbox)와 비슷하게, 그리드 아이템들의 코드정의 순서는 중요하지 않습니다.
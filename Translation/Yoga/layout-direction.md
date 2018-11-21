---
path: "/english/reactnative_yoga"
title: "layout-direction"
category: "translation"
---

# 영어해석 공부

## origin

Layout direction specifies the direction in which children and text
in a hierarchy should be laid out. Layout direction also effects what
edge `start` and `end` refer to. By default Yoga lays out with `LTR`
layout direction. In this mode `start` refers to `left` and `end`
refers to `right`. When localizing your apps for markets with RTL languages
you should customize this by either by passing a direction
to the `CalculateLayout` call or by setting the direction on the root node

**LTR (DEFAULT)** Text and children and laid our from left to right. Margin and padding applied the start of an element are applied on the left side.

**RTL** Text and children and laid our from right to left. Margin and padding applied the start of an element are applied on the right side.


## 번역

레이아웃 방향은 계층 구조의 하위 노드(children)와 텍스트가 배치되어야 하는 방향을 지정하며, 시작점과 끝단이 나타내는 가장자리에도 영향을 미친다. 기본적으로, Yoga는 `왼쪽에서 오른쪽으로`인 방향으로 레이아웃을 배치시킨다.
이 방식에서 `시작점`은 `왼쪽`을 가리키며 `끝단`은 오른쪽을 가리킨다. `오른쪽에서 왼쪽으로`의 방식으로 당신의 앱의 위치가 지정될 때 `CalculateLayout`에 방향을 전달하며 호출하하거나, 루트 노드내에 방향을 설정하여 방향을 바꿀 수 있습니다.

**LTR (기본값)** 텍스트와 하위 노드(children)를 왼쪽에서 오른쪽으로 배치시킵니다. 엘리먼트의 시작 부분에 적용되는 마진(margin)과 패딩(padding)이 왼쪽에 적용됩니다.

**RTL** 텍스트와 하위 노드(children)를 오른쪽에서 왼쪽으로 배치시킵니다. 엘리먼트의 시작 부분에 적용되는 마진(margin)과 패딩(padding)이 오른쪽에 적용됩니다.


## 배운 것
- hierarchy : 계층 (생각이 잘 안난다.)
- be laid out : 지정되다.
- what edge `start` and `end` refer to. : 수식관계의 이해가 바로 되지 않음.
- 문장을 볼 때 문장의 수식관계와 문장의 동사를 헤깔리면 안된다. = 익숙해질 때까지 계속 봐야 함.
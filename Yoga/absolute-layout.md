---
path: "/english/reactnative_yoga"
title: "Absolute/Relative Layout"
category: "translation"
---

# 영어해석 공부

## origin

The `position type` of an element defines how it is
positioned within its parent.

**RELATIVE (DEFAULT)** By default an element is positioned
relatively. This means an element is positioned according to the
normal flow of the layout, and then offset relative to that position
based on the values of `top`, `right`, `bottom`, and `left`.
The offset does not affect the position of any sibling or parent elements.

**ABSOLUTE** When positioned absolutely an element doesn't take
part in the normal layout flow. It is instead laid out independent 
of its siblings. The position is determined based on the
`top`, `right`, `bottom`, and `left` values.

The position values `top`, `right`, `bottom`, and `left` behave
differently depending on the `position type` of the element. For
a `relative` element they offset the position of the element in the
direction specified. For `absolute` element though these properties
specify the offset of the element's side from the same side on the parent.

## 번역

엘리먼트의 `position 타입`은 부모 엘리먼트 내에 위치하는 방식을 정의합니다.

**RELATIVE (기본값)** 기본적으로 엘리먼트는 상대적으로 위치하게 됩니다.
이것은 엘리먼트가 일반 레이아웃 흐름(normal flow)에 의해 위치되며,
`top`, `right`, `bottom`, 그리고 `left` 값을 기준으로 상대적으로 엘리먼트를 오프셋하는 것을 의미합니다.
이 오프셋(offset)은 어떤 형제, 부모 엘리먼트에게도 영향을 주지 않습니다.
(offset = 위치 값을 지정함.)

**ABSOLUTE** 엘리먼트를 절대적으로 위치시키면, 엘리먼트는 일반 레이아웃 흐름에 포함되지 않으며,
대신 형제 레이아웃들로부터 독립적으로 놓여있게 됩니다. 따라서 이 위치는 `top`, `right`, `bottom`, 
그리고 `left` 값을 기준으로 결정됩니다.

`position 타입` 값에 따라 `top`, `right`, `bottom`, 그리고 `left`의 위치 값이 달라집니다.
`relative` 엘리먼트의 경우 명시된 방향으로 엘리먼트를 오프셋하며,
`absolute` 엘리먼트의 경우 부모 엘리먼트와 동일한 측면으로부터 위치를 오프셋한다.
(offset = 위치 값을 지정함.)

## 배운 것
- within : 이내에 (특정한 기간, 특정한 거리, 범위, 한계), ~의 내부 (안)에(격식 표현)
```
You should receive a reply within seven days.
```
- For + N : N의 경우
- behave : 예의 바르게 행동하다, (특정한 방식으로) 처신하다, (지닌 성질에 따라) 행동(반응)을 보이다.
```
Do not behave like a hog : 되는대로 행동하지 말라.
He doesn't know how to behave : 그는 예의 범절을 모른다.
```
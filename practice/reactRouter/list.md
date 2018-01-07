# React-Router 정리해야 할 리스트

1. Router를 사용하기 위해선 Router를 불러와야 함.
2. 기본 Router 구성은 3가지 이며, 로드할 컴포넌트, 로드의 진입점인 링크, 둘 사이를 연결해주는 Router 이렇게 3가지 파트로 구성되어 있다.
  1. Component 내용
  2. Link 컴포넌트들이 있는 Nav 컴포넌트
  3. Router 컴포넌트

3. browserHistory의 역할 정리 필요 (Hash history), Router 태그의 history Attribute
4. Link 컴포넌트에는 activeStyle이 있다. 즉 Link 컴포넌트를 위한 속성에 대해 정리 필요 (activeStyle이 있 듯이 activeClass도 존재한다.)
5. Route들의 depth 또한 줄 수 있으며, 이때는 props.children이 필요하다.(링크 클릭 시 로드될 컴포넌트에 필요) - 자세히 정리 필요
6. indexRoute 를 활용하자. -??정리 필요
7. Route 파라미터 내에 key,value 객체 안에 여러 Component를 매핑할 수 있다.
8. Quering Parameter = parameter중 location.query 속성이 있다.
9. Redirect는 Redirect 컴포넌트가 있다. (React-Router 내에)
10. setRouteWillLeaveHook 후킹 기능이 있다. Link에 매핑된 Component를 작성할 때 Component 라이프 사이클 내에 router.setRouteWillLeaveHook, routerWillLeave 메서드를 설정해주자.
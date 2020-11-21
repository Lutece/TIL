import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ApolloClient from "apollo-boost";
import gql from 'graphql-tag';
import { ApolloProvider } from 'react-apollo';
/*
  ApolloClient는 Apollo가 적용되는 프론트 환경에서 어떤 GraphQL 서버를 바라보는 지를 설정한다.
  이 예제에서는 https://48p1r2roz4.sse.codesandbox.io 에서 데이터를 pooling & refetching과 같은 작업을 진행한다.
  만약 ApolloClient에서 uri 프로퍼티를 따로 설정하지 않을 시 동일한 호스트 이름을 기반으로 '/graphql' 엔드포인트를 바라보도록 적용된다.

  React로 연결하기 전, 바닐라 환경에서 query를 통해 데이터를 요청하는 것을 진행해보겠습니다.
  graphql-tag는 ES6 환경에서 제공되는 템플릿 리터럴 표기법를 기반으로 GraphQL Query를 작성할 수 있게 해주는 모듈입니다.

  다음은 바닐라가 아닌 React 기반으로 만들어진 클라이언트 환경에서 GraphQL 서버와 데이터 통신을 할 수 있게 해보겠습니다.
  React기반으로 ApolloClient를 적용하기 위해서는 Root 컴포넌트를 Provider패턴을 이용하여 ApolloClient를 주입시킵니다.

  참고:
    Provider 패턴은 context라는 global로 적용되는 상태 값을 이용하여 많은 컴포넌트들이 공통으로 사용되어야 하는 값이 필요할 때 사용하는 패턴입니다.
    이 패턴을 사용하는 라이브러리는 Redux, Mobx등 상태값을 관리하기 위해 사용하는 라이브러리들을 포함하여, 테마와 같은 공통 스타일 등에 사용될 수 있고,
    이 패턴을 구성하는 요소는 Provider, Context, Consumer라는 세 가지 요소를 기반하여 구현할 수 있습니다.
    자세한 내용은 https://medium.com/@bloodyowl/the-provider-and-higher-order-component-patterns-with-react-d16ab2d1636

  이제 Root 컴포넌트에 Provider 패턴으로 ApolloClient가 주입되었으므로, 우리는 Root 컴포넌트인 App컴포넌트를 포함하여,
  App 컴포넌트가 감싸는 모든 컴포넌트에 Apollo Client가 주입되었음을 알 수 있습니다.

  우리는 View Layer를 담당하는 컴포넌트가 갖고있는 Props에 데이터를 전달할 것입니다.
  View Layer에 데이터에 전달하기 위해서는 GraphQL Query를 통해 GraphQL Server로 데이터를 요청해야 합니다

  이 Server에 데이터를 요청하기 위해 Query를 작성하고, 요청하는 일을 담당하는 컴포넌트를 만들게 되며, 이 컴포넌트를 Query Component라고 합니다.
  App.js 파일에서 SFC 형태의 Query Component를 작성해보겠습니다. 
  
  ㄲㄲ
*/

/*
  다음 시간에는 기본적인 Apollo Server 구현과 함께 GraphQL의 타입 시스템 및 Schema에 대해 자세히 알아보겠습니다.
*/
const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

client.query({
  query: gql`
    {
      rates(currency: "USD") {
        currency
      }
    }
  `
}).then(result => console.log(result));




ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

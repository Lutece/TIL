import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

/*
  Query 컴포넌트는 데이터의 API 호출 상태 데이터와 호출 성공 시 전달되는 값을 View Layer를 담당하는 컴포넌트의 props로 전달합니다.
  기본적인 Query컴포넌트의 구현으로 데이터 fetching을 성공했습니다.

  하지만 클라이언트의 안정성을 포함하여, 사용자 경험을 향상시킬 수 있도록 Apollo에서 제공해주는 다양한 헬퍼 모듈들을 활용해보겠습니다.
  맨 앞에서 Apollo는 다양한 기능을 담고있는 Apollo Boost라는 라이브러리를 제공한다고 알려드렸습니다.

  예를 들어
  apollo-cache-inmemory 라는 모듈은 캐싱을 구현할 수 있도록 해줍니다.
  Apollo에서 Network Layer를 담당하는 Apollo Link를 통해 원격으로 데이터 호출을 하거나, 에러처리, 로컬 State 관리와 같은 여러가지 도움을 주는 것이 있습니다.


  모듈 이름
    apollo-client
    apollo-cache-inmemory
    apollo-link-error
    apollo-link-state
    apollo-link-http
    
    Apollo Boost는 Apollo Client를 더 견고하게 만들어주는 역할을 합니다.
    따라서 이 모듈은 특정 컴포넌트를 위한 것이 아닌 Apollo Client 자체에 영향을 주는 모듈이기 때문에,
    Provider 패턴으로 주입한 Apollo Client가 있는 곳에서 적용시킬 수 있습니다.

    우리 예제의 경우 index.js를 의미합니다.
*/

const GET_RATE = gql`{
  rates(currency: "USD") {
    currency
    rate
  }
}`;

const ExchangeRates = () => (
  <Query query={GET_RATE}>
    {
      ({ loading, error, data }) => {
        if(loading) return <Loading />
        if(error) return <Error />

        return data.rates.map(({ currency, rate }) => (
          <Rate 
            key={currency}
            rate={rate}
            currency={currency}
          />
        ))
      }
    }
  </Query>
);

const Loading = () => <p>Loading...</p>;
const Error = () => <p>Error :(</p>;
const Rate = ({ currency, rate }) => (
  <div>
    <p>{currency}: {rate}</p>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <section>
          <ExchangeRates />
        </section>
      </div>
    );
  }
}

export default App;

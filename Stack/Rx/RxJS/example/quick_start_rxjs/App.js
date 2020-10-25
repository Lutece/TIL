import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { fromEvent, partition, Subject } from 'rxjs';
import {debounceTime, map, filter, mergeMap, distinctUntilChanged, tap, retry, finalize} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { LoadingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const getSearchingIcon = () => {
  return(
    <ul>
      <li className={'loading'}>
        <span>검색 중...<LoadingOutlined /></span>
      </li>
    </ul>
  )
}
const getSearchItems = (items) => {
  return(
    <ul>
      {
        items.map(({ avatar_url, id, login }) => {
          return (
            <li key={id}>
              <img src={avatar_url} alt={'avator'} />
              <span>
            {login}
          </span>
            </li>
          )
        })
      }
    </ul>
  )
}

function App() {

  const subject = new Subject();
  const [is_fetching, setIsFetching] = useState(false);
  const [search_value, setSearchValue] = useState('');
  const [search_items, setSearchItems] = useState([]);

  useEffect(() => {
    bindInputEvent();
  }, []);

  const bindInputEvent = () => {

    // const users$ = fromEvent(document.getElementById('search'), 'keyup')
    //   .pipe(
    //     debounceTime(500),
    //     map(e => e.target.value),
    //     distinctUntilChanged(),
    //     filter(query => query.trim().length > 0),
    //     tap(() => { setIsFetching(true); }),
    //     mergeMap(query => ajax.getJSON(`https://api.github.com/search/users?q=${query}`)),
    //     tap(() => { setIsFetching(false); })
    //   );
    //
    // users$.subscribe(json => {
    //   setSearchItems(json.items);
    // });

    const keyup$ = fromEvent(document.getElementById('search'), 'keyup')
      .pipe(
        debounceTime(200),
        map(e => e.target.value),
        distinctUntilChanged(),
        tap(() => { console.log('keyup') })
      );

    // keyup$.subscribe(subject);

    const [user$, reset$] = partition(keyup$, query => query.trim().length > 0);

    reset$
      .pipe(
        tap(() => {
          setSearchItems([]);
          setSearchValue('');
          setIsFetching(false);
        })
      );

    user$
      .pipe(
        filter(query => query.trim().length > 0),
        tap(() => { setIsFetching(true); }),
        mergeMap(query => ajax.getJSON(`https://api.github.com/search/users?q=${query}`)),
        tap(() => { setIsFetching(false); }),
        retry(2),
        finalize(() => { setIsFetching(false); })
      )
      .subscribe(json => {
        setSearchItems(json.items);
      })
  };


  const hasSearchItems = () => (!is_fetching && search_items.length > 0);
  const hasSearchingStatus = () => (search_value && is_fetching);

  const onChangeInput = (e) => {
    setIsFetching(true);
    setSearchItems([]);
    setSearchValue(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className='search-container'>
          <input type='input' id='search' placeholder="검색하고 싶은 사용자 아이디를 입력해주세요" value={search_value} onChange={onChangeInput} />
          { hasSearchingStatus() && getSearchingIcon() }
          { hasSearchItems() && getSearchItems(search_items) }
        </div>
      </header>
    </div>
  );
}

export default App;

import {fromPromise} from 'rxjs/observable/fromPromise';
import {debouceTime} from 'rxjs/operators/debounceTime';
import {filter} from 'rxjs/operators/filter';
import {map} from 'rxjs/operators/map';
import 'isomorphic-fetch';

const searchRepo$ = (key$, fetch$, dueTime, scheduler) => {
  return key$.debounceTime(dueTime, scheduler)
    .pluck('target', 'value')
    .map(text => text.trim())
    .filter(query => query.length !== 0)
    .switchMap(fetch$);
};

const fetchAPI = (url) => {
  return fetch(url).then(response => {
    if (response.status !== 200) {
      throw new Error(`Invalid status for ${url}`);
    }
    return response.json();
  }).then(json => {
    return {
      total_count: json.total_count,
      items: json.items.map(x => ({
        name: x.name,
        full_name: x.full_name,
      }))
    };
  });
}

const fetchRepoList$ = (query) => {
  const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc`;
  return fromPromise(fetchAPI(url));
}

export {searchRepo$, fetchRepoList$};



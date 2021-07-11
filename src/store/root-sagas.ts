import { all } from 'redux-saga/effects';

import cardSearchWatcher from "./card-search/sagas";

export default function* rootSaga() {
  yield all([
    cardSearchWatcher()
  ])
}

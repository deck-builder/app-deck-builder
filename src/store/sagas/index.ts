import { all } from 'redux-saga/effects';

import cardSearchWatcher from "./cardSearch";

export default function* rootSaga() {
  yield all([
    cardSearchWatcher()
  ])
}

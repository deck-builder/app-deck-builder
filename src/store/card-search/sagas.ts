import { call } from 'typed-redux-saga'
import { put, takeLatest } from '@redux-saga/core/effects'
import { getCards } from '../../services/deck-builder'
import { search as searchAction, loadRequest, loadSuccess, loadFailure } from './index'

export function* search({ payload }: ReturnType<typeof searchAction>) {
  try {
    yield put(loadRequest())
    const cards = yield* call(getCards, payload.name)
    yield put(loadSuccess(cards))
  } catch (error) {
    yield put(loadFailure())
  }
}

export default function* watcher() {
  yield takeLatest(searchAction, search);
}

import { AxiosError } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { Api } from '../api';
import { getPosts } from './actions';

function* getPostsSaga(): any {
  try {
    const response: any = yield call(Api.getPosts);

    yield put(getPosts.success(Api.getPosts.successPayload(response)));
  } catch (error) {
    if (error instanceof AxiosError) {
      const { code, message } = error;

      yield put(getPosts.failure({ code, message }));
    }

    console.error(error);
  }
}

function* watcher() {
  yield takeLatest(getPosts.request, getPostsSaga);
}

const sagas = [
  watcher(),
];

export default sagas;

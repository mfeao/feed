// import { sagas as pkgSagas } from '@dist/cjs';
// import { sagas as pkgSagas } from '@dist/esm';
import { sagas as pkgSagas } from '@package';
import { all } from 'redux-saga/effects';

export default function* sagas() {
  yield all([
    ...pkgSagas,
  ]);
}

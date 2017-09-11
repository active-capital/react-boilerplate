import { put, takeLatest } from 'redux-saga/effects';
import { PUT_SERVER_ADDRESS, SERVER_ADDRESS, GET_SERVER_ADDRESS } from '../actions/_constants';


function* addressGetter() {
  try {
    yield put({type: PUT_SERVER_ADDRESS, payload: { address: SERVER_ADDRESS}});
  } catch (error) {
    console.log(error);
  }
}

// Watches for action types asynchronously
export default function* homeWatcher() {
  yield takeLatest(GET_SERVER_ADDRESS, addressGetter);
}

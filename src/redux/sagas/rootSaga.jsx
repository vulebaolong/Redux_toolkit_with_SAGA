import { all } from "redux-saga/effects";
import * as userSaga from "./userSaga";

// Tạo rootSaga kết hợp nhiều Saga Watcher lại với all()
function* rootSaga() {
    yield all([userSaga.followUserSaga()]);
}

export default rootSaga;

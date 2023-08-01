import { all } from "redux-saga/effects";
import { userSaga } from "./userSaga";

// Tạo rootSaga kết hợp nhiều Saga Watcher lại với all()
function* rootSaga() {
    yield all([userSaga()]);
}

export default rootSaga;

import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { loginREDU } from "../slices/userSlice";

// loginSaga
function* loginSaga({ type, payload }) {
    try {
        const { data, status } = yield call(() =>
            axios.post(`https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`, payload, {
                headers: {
                    TokenCybersoft:
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NCIsIkhldEhhblN0cmluZyI6IjA5LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMjA4MDAwMDAwMCIsIm5iZiI6MTY3MjQxOTYwMCwiZXhwIjoxNzAyMjI3NjAwfQ.P5fJSMdFWDXkAXi_Hm7kZhuXoxo6xtTzIno_q6kp38I",
                },
            })
        );
        console.log("Saga - loginSaga", { data, status });
        yield put(loginREDU(data.content));
    } catch (error) {
        console.log(error);
    }
}

// Khai báo Saga Watcher để theo dõi action FETCH_USERS
export function* userSaga() {
    yield takeLatest("loginSaga", loginSaga);
}

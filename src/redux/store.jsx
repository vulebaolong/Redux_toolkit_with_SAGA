import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga"; // Import rootSaga của bạn
import userSlice from "./slices/userSlice";

// Tạo Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Kết hợp Saga Middleware với Redux Toolkit Middleware
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

// Tạo Redux Store với rootReducer và middleware
export const store = configureStore({
    middleware,
    reducer: {
        userSlice,
    },
});

// Chạy rootSaga để bắt đầu thực thi các saga
sagaMiddleware.run(rootSaga);

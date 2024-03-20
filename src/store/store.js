import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../Services/CryptoApi";
import { newsApi } from "../Services/NewsApi";

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [newsApi.reducerPath]: newsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware, newsApi.middleware),
    
})
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

//provider
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persist } from "./stores";

import Routes from './Routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persist}>
                <ChakraProvider>
                    <BrowserRouter>
                        <Routes />
                    </BrowserRouter>
                </ChakraProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
)

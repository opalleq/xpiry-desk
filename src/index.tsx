import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import ItemsList from "./features/list/ItemsList";
import AddEditForm from "./features/form/AddEditForm";
import { Provider } from 'react-redux';
import { store } from './app/store';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App/>}
               path="/">
            <Route index element={<AddEditForm/>}/>
            <Route element={<ItemsList/>}
                   path="items"/>
        </Route>
    )
);

const rootElement = document.getElementById("root")
const root = ReactDOM.createRoot(rootElement as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

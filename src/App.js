import React from 'react';

//react router imports 
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// pages imports
import AdminLogin from './Pages/Admin/AdminLogin/AdminLogin';
import NotFound from './Pages/NotFound';
import AdminPanel from './Pages/Admin/AdminPanel/AdminPanel';
import ProtectedRoute from './Pages/ProtectedRoute';
import AdminPanelSideBarHeader from './Containers/admin-header-sidebar/AdminPanelSideBarHeader';
import AdminManageProducts from './Pages/Admin/AdminManageProducts/AdminManageProducts';
import Home from './Pages/Home';
import ManagePrices from "./Pages/Admin/ManagePrices/ManagePrices";
import AdminManageOrders from './Pages/Admin/AdminManageOrders/AdminManageOrders';

// material ui and styles import
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// changed themes import
import { theme, jss } from './Utils/styled-components/mainThemeChanges';

import "./Assets/SASS/app.scss";
import MainProduct from './Pages/Products/MainProduct';
import CategoryProducts from './Pages/CategoryProducts';
import ShoppingList from './Pages/Users/shoppingList/ShoppingList';
import LastPage from './Pages/Users/lastPage/LastPage';


function App() {
  return (
    <StylesProvider jss={jss} >
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <div className="App">
          <Router>
            <Switch>
              {/* // home */}
              <Route exact path="/">
                <Home/>
              </Route>
              {/* // category products  */}
              <Route exact path="/products/:category" >
                <CategoryProducts/>
              </Route>
              {/* // shopping list */}
              <Route exact path="/shopping/list">
                <ShoppingList/>
              </Route>
              <Route exact path="/user/information">
                <LastPage/>
              </Route>
              {/* // product details page */}
              <Route exact path="/product/:id" >
                <MainProduct/>
              </Route>
              {/* // admin login */}
              <Route exact path="/admin/login">
                <AdminLogin/>
              </Route>
              {/* // admin panel main page  */}
              <ProtectedRoute exact redirectPath="/admin/login" path="/admin/panel">
                <AdminPanel/>
              </ProtectedRoute>
              {/* // admin products management  */}
              <ProtectedRoute exact redirectPath="/admin/login" path="/admin/manage/products">
                <AdminPanelSideBarHeader>
                  <AdminManageProducts/>
                </AdminPanelSideBarHeader>
              </ProtectedRoute>
              {/* // admin price management  */}
              <ProtectedRoute exact redirectPath="/admin/login" path="/admin/manage/prices">
                <AdminPanelSideBarHeader>
                  <ManagePrices/>
                </AdminPanelSideBarHeader>
              </ProtectedRoute>
              {/* // admin orders management  */}
              <ProtectedRoute exact redirectPath="/admin/login" path="/admin/manage/orders">
                <AdminPanelSideBarHeader>
                  <AdminManageOrders/>
                </AdminPanelSideBarHeader>
              </ProtectedRoute>
              {/* // none existent pages  */}
              <Route path="*">
                <NotFound/>
              </Route>
            </Switch>
          </Router>
        </div>
     </ThemeProvider>
    </StylesProvider>
  );
}

export default App;

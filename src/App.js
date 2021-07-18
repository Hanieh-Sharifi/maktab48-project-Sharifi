import React from 'react';

//react router imports 
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// pages imports
import AdminLoginPage from './Pages/Admin/AdminLoginPage/AdminLoginPage';
import NotFound from './Pages/NotFound';
import AdminPanelPage from './Pages/Admin/AdminPanelPage/AdminPanelPage';
import ProtectedRoute from './Pages/ProtectedRoute';
import AdminPanelSideBarHeader from './Containers/admin-header-sidebar/AdminPanelSideBarHeader';
import AdminManageProducts from './Pages/Admin/AdminManageProductsPage/AdminManageProducts';
import Home from './Pages/Home';
import ManagePrices from "./Pages/Admin/ManagePrices/ManagePrices";

// material ui and styles import
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// changed themes import
import { theme, jss } from './Utils/styled-components/mainThemeChanges';

import "./Assets/SASS/app.scss";
import AdminManageOrders from './Pages/Admin/AdminManageOrdersPage/AdminManageOrders';
import MainProduct from './Pages/Products/MainProduct';


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
              <Route exact path="/product/:id" >
                <MainProduct/>
              </Route>
              {/* // admin login */}
              <Route exact path="/admin/login">
                <AdminLoginPage/>
              </Route>
              {/* // admin panel main page  */}
              <ProtectedRoute exact redirectPath="/admin/login" path="/admin/panel">
                <AdminPanelPage/>
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

import React from 'react';

//react router imports 
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// pages imports
import AdminLoginPage from './Pages/Admin/AdminLoginPage/AdminLoginPage';
import NotFound from './Pages/NotFound';
import AdminPanelPage from './Pages/Admin/AdminPanelPage/AdminPanelPage';
import ProtectedRoute from './Pages/ProtectedRoute';

// material ui and styles import
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// changed themes import
import { theme, jss } from './Utils/styled-components/mainThemeChanges';
import Home from './Pages/Home';




function App() {
  return (
    <StylesProvider jss={jss} >
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/admin/login">
                <AdminLoginPage/>
              </Route>
              <ProtectedRoute exact redirectPath="/admin/login" path="/admin/panel" component={AdminPanelPage}/>
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

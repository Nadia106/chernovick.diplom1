import React from "react";
import Books from "./layouts/books";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./layouts/login";
import Main from "./layouts/main";
import Navbar from "./components/ui/navBar";
import { BookProvider } from "./hooks/useBooks";
import { GenresProvider } from "./hooks/useGenres";
import AuthProvider from "./hooks/useAuth";
import User from "./layouts/user";
import LogOut from "./layouts/logOut";
import ProtectedRoute from "./components/common/protectedRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <Navbar />
        <BookProvider>
          <GenresProvider>
            <Switch>
              <ProtectedRoute path="/users/:userId?/:edit?" component={User} />
              <Route path="/books/:bookId?" component={Books} />
              <Route path="/login/:type?" component={Login} />
              <Route path="/logout" component={LogOut} />
              <Route path="/" exact component={Main} />
              <Redirect to="/" />
            </Switch>
          </GenresProvider>
        </BookProvider>
      </AuthProvider>
      <ToastContainer />
    </div>
  );
}

export default App;

import React from "react";
import { useParams, Redirect } from "react-router-dom";
import EditUserPage from "../components/ui/editUserPage";
import UserPage from "../components/ui/userPage";
import { useAuth } from "../hooks/useAuth";
import UserProvider from "../hooks/useUser";
import Main from "./main";

const User = () => {
  const params = useParams();
  const { userId, edit } = params;
  const { currntUser } = useAuth();

  return (
    <>
      <UserProvider>
        {userId ? (
          edit ? (
            userId === currntUser._id ? (
              <EditUserPage />
            ) : (
              <Redirect to={`/user${currntUser._id}/edit`} />
            )
          ) : (
            <UserPage userId={userId} />
          )
        ) : (
          <Main />
        )}
      </UserProvider>
    </>
    // <>
    //   <UserProvider>{edit ? <EditUserPage /> : <UserPage />}</UserProvider>
    // </>
  );
};
export default User;

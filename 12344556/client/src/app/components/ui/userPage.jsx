import React from "react";
import PropTypes from "prop-types";
import { useUser } from "../../hooks/useUser";
import UserCard from "./userCard";

const UserPage = ({ userId }) => {
  const { getUserById } = useUser();
  const user = getUserById(userId);
  if (user) {
    return (
      <div className="container">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <UserCard user={user} />
          </div>
          <div className="col-md-8"></div>
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

UserPage.propTypes = {
  userId: PropTypes.string.isRequired
};
export default UserPage;

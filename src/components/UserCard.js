import React from "react";

export default function UserCard({ user }) {
  return (
    <div className="UserCard">
      <div>
        <img alt={`${user.first_name}`} src={user.avatar}></img>
      </div>
      <div>
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <p>{user.email}</p>
      </div>
    </div>
  );
}

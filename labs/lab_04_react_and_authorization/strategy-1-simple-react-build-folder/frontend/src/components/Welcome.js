import React from "react";

function Welcome({ user }) {
  return user ? (
    <p>
      Welcome, {user.name} ({user.username})
    </p>
  ) : (
    <p>Please log in to continue.</p>
  );
}

export default Welcome;

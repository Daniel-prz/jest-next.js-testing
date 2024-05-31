import React from "react";

export default function welcomeMessage(user) {
  return (
    <div>
      <p id="welcome">Welcome, {user}!</p>
    </div>
  );
}

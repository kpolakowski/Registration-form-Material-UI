import React, { createContext, useState } from "react";
export const UserContext = createContext([{}, () => {}]);

export default props => {
  const [state, setState] = useState({
    user: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      birthdate: new Date().toISOString().slice(0, 10),
      bio: "",
      website: "",
      acceptTerms: false,
      newsletter: false
    },
    errors: {}
  });
  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
};

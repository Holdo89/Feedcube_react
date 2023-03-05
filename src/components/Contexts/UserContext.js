import React, {createContext, Component} from 'react';

export const UserContext = createContext({
    Permission: 0,
    setPermission: () => {}
  });

export default function UserContextProvider({Permission, children}){
  return (
        <UserContext.Provider value={Permission}>
            {children}
        </UserContext.Provider>
    )
}


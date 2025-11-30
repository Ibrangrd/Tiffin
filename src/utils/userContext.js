import React from 'react';

const userContext = React.createContext({
    loggedInUser: "Default User",
}) 

export default userContext;
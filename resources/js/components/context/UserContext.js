import React from 'react'
const UserContext = React.createContext()

function useAuth() {
    return {
        data: {
            user: false
        }
    }
}

const UserProvider = props => (
  <UserContext.Provider value={useAuth().data.user} {...props} />
)

const useUser = () => React.useContext(UserContext)

export {UserProvider, useUser}

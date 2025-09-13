import React, { useContext } from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    const {user}= useContext(UserContext)

    if(!user) return <div>Please Login first than use it</div>

    return <div>Welcome to our site</div>
  return (
    <>
    </>
  )
}

export default Profile
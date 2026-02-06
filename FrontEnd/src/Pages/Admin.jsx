import React from 'react'

const Admin = () => {
  return (
    <>
        {(userData.role===import.meta.evn.VITE_ADMIN_ROLE)?
          <div>Admin</div>
          :<div>user</div>
        }

    </>
  )
}

export default Admin

'use client'

import React from 'react'
import { useSession } from 'next-auth/react'

const page = () => {

    const session = useSession();
    console.log(session);
  return (
    <div>
      This is  profile
    </div>
  )
}

export default page

import Logo from '@/app/_components/Logo'
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import React from 'react'

function Header() {
  return (
    <div className="flex justify-between items-center w-full p-1 shadow-sm">
      <Logo />
      <OrganizationSwitcher afterCreateOrganizationUrl={'/dashboard'} afterLeaveOrganizationUrl={'/dashboard'}/>
      <UserButton />
    </div>
  )
}

export default Header
'use client';

import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useUser } from "@clerk/nextjs";

const NavItems = () => {
  const pathname = usePathname();
  const { isSignedIn } = useUser();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        
        // Always show FAQ, show others only when signed in
        if (!isSignedIn && link.label !== 'FAQs for Users' && link.label !== 'FAQs for Organizers' ) {
          return null;
        }
        
        return (
          <li
            key={link.route}
            className={`${
              isActive && 'text-primary-500'
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems
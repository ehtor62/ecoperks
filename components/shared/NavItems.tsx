'use client';

import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useUser } from "@clerk/nextjs";

const NavItems = ({ isMobile = false }) => {
  const pathname = usePathname();
  const { isSignedIn } = useUser();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        // For mobile view, show only FAQ items when not signed in
        if (isMobile && !isSignedIn && !link.label.includes('FAQs')) {
          return null;
        }

        // For desktop view, show FAQ items and others when signed in
        if (!isMobile && !isSignedIn && !link.label.includes('FAQs')) {
          return null;
        }

        return (
          <li
            key={link.route}
            className={`${isActive && 'text-primary-500'
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
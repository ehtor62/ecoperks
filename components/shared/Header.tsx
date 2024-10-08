import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
    return (
        <header className="w-full border-b">
            <div className="wrapper flex items-center justify-between">
                <Link href="/" className="w-36">
                    <div style={{ position: 'relative', width: '64px', height: '64px' }}>
                        <Image
                            src="/assets/images/logo.png"
                            fill
                            sizes="(max-width: 768px) 100vw, 64px"
                            style={{ objectFit: 'contain' }}
                            alt="ecoPerks logo"
                        />
                    </div>
                </Link>

                <nav className="md:flex-between hidden w-full max-w-xs">
                    <NavItems />
                </nav>

                <div className="flex items-center justify-end gap-3">
                    <SignedIn>
                        <UserButton />
                    </SignedIn>

                    <SignedOut>
                        <Button asChild className="rounded-full text-xs sm:text-sm" size="sm">
                            <Link href="/sign-in">Sign in | Sign up</Link>
                        </Button>
                    </SignedOut>

                    {/* Always show MobileNav, regardless of sign-in status */}
                    <div className="md:hidden">
                        <MobileNav />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
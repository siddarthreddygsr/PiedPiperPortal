import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-background shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold"
          prefetch={false}
        >
          <CompanyIcon className="h-6 w-fit" />
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          <Link
            href="#"
            className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            prefetch={false}
          >
            About Us
          </Link>
          <Link
            href="#"
            className="inline-flex h-9 w-max items-center justify-center rounded-full bg-[#55efc4] px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-[#55efc4]/90 disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Try Now
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="bottom"
            className="ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0 backdrop-blur-xl bg-black/10"
          >
            <div className="grid gap-4 p-6">
              <Link
                href="#"
                className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="#"
                className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                About Us
              </Link>
              <Link
                href="#"
                className="inline-flex h-9 w-max items-center justify-center rounded-full bg-[#55efc4] px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-primary/90 focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Try Now
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="#55efc4"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function CompanyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      stroke="#0000000"
      fill="#55efc4"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M0 3H6V9H0V3Z" fill="#55EFC4"/>
      <path d="M6 3H12V9H6V3Z" fill="#55EFC4"/>
      <path d="M0 3H6V9H0V3Z" fill="#55EFC4"/>
      <path d="M12 3H18V9H12V3Z" fill="#55EFC4"/>
      <path d="M6 15H12V21H6V15Z" fill="#55EFC4"/>
      <path d="M26 9H32V15H26V9Z" fill="#55EFC4"/>
      <path d="M6 9H12V15H6V9Z" fill="#55EFC4"/>
      <path d="M20 3H26V9H20V3Z" fill="#55EFC4"/>
      <path d="M20 15H26V21H20V15Z" fill="#55EFC4"/>
      <path d="M20 9H26V15H20V9Z" fill="#55EFC4"/>
      <path d="M32 3H38V9H32V3Z" fill="#55EFC4"/>
      <path d="M32 15H38V21H32V15Z" fill="#55EFC4"/>
      <path d="M32 9H38V15H32V9Z" fill="#55EFC4"/>
      <path d="M46 0H52V6H46V0Z" fill="#55EFC4"/>
      <path d="M46 10H52V16H46V10Z" fill="#55EFC4"/>
      <path d="M40 3H46V9H40V3Z" fill="#55EFC4"/>
      <path d="M40 15H46V21H40V15Z" fill="#55EFC4"/>
      <path d="M40 9H46V15H40V9Z" fill="#55EFC4"/>
      <path d="M52 3H58V9H52V3Z" fill="#55EFC4"/>
      <path d="M52 15H58V21H52V15Z" fill="#55EFC4"/>
      <path d="M52 9H58V15H52V9Z" fill="#55EFC4"/>
      <path d="M66 0H72V6H66V0Z" fill="#55EFC4"/>
      <path d="M66 10H72V16H66V10Z" fill="#55EFC4"/>
      <path d="M60 3H66V9H60V3Z" fill="#55EFC4"/>
      <path d="M60 15H66V21H60V15Z" fill="#55EFC4"/>
      <path d="M60 9H66V15H60V9Z" fill="#55EFC4"/>
      <path d="M72 3H78V9H72V3Z" fill="#55EFC4"/>
      <path d="M72 15H78V21H72V15Z" fill="#55EFC4"/>
      <path d="M72 9H78V15H72V9Z" fill="#55EFC4"/>
      <path d="M86 1H92V7H86V1Z" fill="#55EFC4"/>
      <path d="M86 10H92V16H86V10Z" fill="#55EFC4"/>
      <path d="M80 3H86V9H80V3Z" fill="#55EFC4"/>
      <path d="M80 15H86V21H80V15Z" fill="#55EFC4"/>
      <path d="M80 9H86V15H80V9Z" fill="#55EFC4"/>
      <path d="M92 5H98V11H92V5Z" fill="#55EFC4"/>
      <path d="M89 13H95V19H89V13Z" fill="#55EFC4"/>
      <path d="M92 15H98V21H92V15Z" fill="#55EFC4"/>
      <path d="M106 0H112V6H106V0Z" fill="#55EFC4"/>
      <path d="M106 10H112V16H106V10Z" fill="#55EFC4"/>
      <path d="M100 3H106V9H100V3Z" fill="#55EFC4"/>
      <path d="M100 15H106V21H100V15Z" fill="#55EFC4"/>
      <path d="M100 9H106V15H100V9Z" fill="#55EFC4"/>
      <path d="M112 3H118V9H112V3Z" fill="#55EFC4"/>
      <path d="M112 15H118V21H112V15Z" fill="#55EFC4"/>
      <path d="M112 21H118V27H112V21Z" fill="#55EFC4"/>
      <path d="M112 9H118V15H112V9Z" fill="#55EFC4"/>
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

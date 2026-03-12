import Link from "next/link"
import ThemeSwitch from "./themeswitch"

const navigation = [
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
]

export function Navbar() {
  return (
    <header className="fixed top-4 inset-x-0 mx-auto z-50 w-[95%] max-w-5xl rounded-full glass-panel px-4 sm:px-6 py-3 transition-all">
      <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1 shrink-0">
            <Link href="/" className="-m-1.5 p-1.5 text-lg sm:text-xl font-bold text-gradient whitespace-nowrap">
              Mahesh Reddy
            </Link>
          </div>
          <div className="flex lg:hidden shrink-0">
            <ThemeSwitch />
          </div>
          <div className="hidden lg:flex lg:gap-x-12 shrink-0">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full glow-primary"></span>
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end shrink-0">
            <ThemeSwitch />
          </div>
        </nav>
    </header>
  )
}

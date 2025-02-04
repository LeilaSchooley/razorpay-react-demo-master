import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">CARFAX Report</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              to="#"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Report Example
            </Link>
            <Link
              to="#"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Support
            </Link>
            <Link
              to="#"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              FAQ
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {/* <ModeToggle /> */}
          <Button variant="outline">Sign In</Button>
          <Button>Get Report</Button>
        </div>
      </div>
    </header>
  );
}

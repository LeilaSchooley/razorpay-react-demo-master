import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-muted">
      <div className="container py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Refunds, Cancellation and Shipping Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Vehicle History
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  VIN Check
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Market Reports
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-muted-foreground">
                  Email: support@carfaxreport.com
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Phone: 1-800-CAR-FAXX
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 CARFAX Report. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

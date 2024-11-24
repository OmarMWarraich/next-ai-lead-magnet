import React from "react";

import LandingPageFooter from "./components/LandingPageFooter";

function LandingLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen flex-col overflow-x-clip">
      <div className="grow">{children}</div>

      <LandingPageFooter />
    </section>
  );
}

export default LandingLayout;

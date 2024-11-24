import React from "react";

function LandingLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen flex-col overflow-x-clip">
      <div className="grow">{children}</div>
    </section>
  );
}

export default LandingLayout;

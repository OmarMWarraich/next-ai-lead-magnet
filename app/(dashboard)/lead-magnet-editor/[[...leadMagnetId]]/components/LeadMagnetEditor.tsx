"use client";

import React, { useState } from "react";

export type LeadMagnetSections =
  | "content"
  | "prompt"
  | "email"
  | "email"
  | "settings";

const LeadMagnetEditor = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedEditor, setSelectedEditor] =
    useState<LeadMagnetSections>("content");

  return (
    <div className="flex h-screen w-full flex-col overflow-y-hidden">
      {/* <LeadMagnetEditorNavbar /> */}
    </div>
  );
};

export default LeadMagnetEditor;

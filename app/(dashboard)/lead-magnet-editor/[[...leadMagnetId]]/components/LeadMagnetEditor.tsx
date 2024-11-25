"use client";

import React, { useState } from "react";

import LeadMagnetContentEditor from "./LeadMagnetContentEditor";
import LeadMagnetEditorNavbar from "./LeadMagnetEditorNavbar";
import LeadMagnetEditorSidebar from "./LeadMagnetEditorSidebar";

export type LeadMagnetSections =
  | "content"
  | "prompt"
  | "email"
  | "profile"
  | "settings";

const LeadMagnetEditor = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedEditor, setSelectedEditor] =
    useState<LeadMagnetSections>("content");

  return (
    <div className="flex h-screen w-full flex-col overflow-y-hidden">
      <LeadMagnetEditorNavbar />
      <div className="flex h-full flex-row">
        <LeadMagnetEditorSidebar
          isSidebarCollapsed={isSidebarCollapsed}
          setSelectedEditor={setSelectedEditor}
          setIsSidebarCollapsed={setIsSidebarCollapsed}
        />
        <div className="h-full grow">
          {selectedEditor === "content" && <LeadMagnetContentEditor />}
          {/* {selectedEditor === "prompt" && <LeadMagnetPromptEditor />}
          {selectedEditor === "email" && <LeadMagnetEmailEditor />}
          {selectedEditor === "profile" && <LeadMagnetProfileEditor />}
          {selectedEditor === "settings" && <LeadMagnetSettings />} */}
        </div>
      </div>
    </div>
  );
};

export default LeadMagnetEditor;

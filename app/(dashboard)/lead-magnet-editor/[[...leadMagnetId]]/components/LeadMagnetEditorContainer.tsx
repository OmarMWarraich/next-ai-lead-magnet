"use client";

import { LeadMagnet } from "@prisma/client";
import React from "react";

import { LeadMagnetEditorContextProvider } from "@/context/LeadMagnetEditorContext";

import LeadMagnetEditor from "./LeadMagnetEditor";

interface LeadMagnetContainerProps {
  leadMagnet: LeadMagnet;
}

const LeadMagnetEditorContainer = ({
  leadMagnet,
}: LeadMagnetContainerProps) => {
  return (
    <LeadMagnetEditorContextProvider leadMagnet={leadMagnet}>
      <div>
        <LeadMagnetEditor />
      </div>
    </LeadMagnetEditorContextProvider>
  );
};

export default LeadMagnetEditorContainer;

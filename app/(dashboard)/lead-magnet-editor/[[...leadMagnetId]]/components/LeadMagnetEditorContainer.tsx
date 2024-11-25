"use client";

import { useSession } from "@clerk/nextjs";
import { LeadMagnet } from "@prisma/client";
import React from "react";

import LoadingScreen from "@/components/LoadingScreen";
import { LeadMagnetEditorContextProvider } from "@/context/LeadMagnetEditorContext";

import LeadMagnetEditor from "./LeadMagnetEditor";

interface LeadMagnetContainerProps {
  leadMagnet: LeadMagnet;
}

const LeadMagnetEditorContainer = ({
  leadMagnet,
}: LeadMagnetContainerProps) => {
  const { isLoaded } = useSession();

  if (!isLoaded) {
    return (
      <div>
        <LoadingScreen />
      </div>
    );
  }

  return (
    <LeadMagnetEditorContextProvider leadMagnet={leadMagnet}>
      <div>
        <LeadMagnetEditor />
      </div>
    </LeadMagnetEditorContextProvider>
  );
};

export default LeadMagnetEditorContainer;

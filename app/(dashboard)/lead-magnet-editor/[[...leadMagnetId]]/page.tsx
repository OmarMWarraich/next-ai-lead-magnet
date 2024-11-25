import { LeadMagnet } from "@prisma/client";
import React from "react";

import LeadMagnetNotFound from "@/components/LeadMagnetNotFound";
import { prismadb } from "@/lib/prismadb";

import LeadMagnetEditorContainer from "./components/LeadMagnetEditorContainer";
import { DEFAULT_LEAD_MAGNET } from "./lead-magnet-constants";

interface LeadMagnetEditorParams {
  params: {
    leadMagnetId: string[];
  };
}

async function LeadMagnetEditorPage({ params }: LeadMagnetEditorParams) {
  const leadMagnetId =
    params.leadMagnetId?.length > 0 ? params.leadMagnetId[0] : null;

  console.log("leadMagnetId", leadMagnetId);

  let leadMagnet: LeadMagnet | null = null;

  if (!leadMagnetId) {
    leadMagnet = DEFAULT_LEAD_MAGNET;
  } else {
    leadMagnet = await prismadb.leadMagnet.findUnique({
      where: {
        id: leadMagnetId,
      },
    });
  }

  if (!leadMagnet) {
    return <LeadMagnetNotFound returnLink="/leadmagnets" />;
  }

  return <LeadMagnetEditorContainer leadMagnet={leadMagnet} />;
}

export default LeadMagnetEditorPage;

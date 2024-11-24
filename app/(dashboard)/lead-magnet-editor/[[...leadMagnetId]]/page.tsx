import { LeadMagnet } from "@prisma/client";
import React, { useEffect, useState } from "react";

import LeadMagnetNotFound from "@/components/LeadMagnetNotFound";
import { prismadb } from "@/lib/prismadb";

import LeadMagnetEditorContainer from "./components/LeadMagnetEditorContainer";
import { DEFAULT_LEAD_MAGNET } from "./lead-magnet-constants";

interface LeadMagnetEditorParams {
  params: {
    leadMagnetId: string[];
  };
}

function LeadMagnetEditorPage({ params }: LeadMagnetEditorParams) {
  const [leadMagnet, setLeadMagnet] = useState<LeadMagnet | null>(null);
  const leadMagnetId =
    params.leadMagnetId?.length > 0 ? params.leadMagnetId[0] : null;

  useEffect(() => {
    const fetchLeadMagnet = async () => {
      if (!leadMagnetId) {
        setLeadMagnet(DEFAULT_LEAD_MAGNET);
      } else {
        const fetchedLeadMagnet = await prismadb.leadMagnet.findUnique({
          where: { id: leadMagnetId },
        });
        setLeadMagnet(fetchedLeadMagnet);
      }
    };

    fetchLeadMagnet();
  }, [leadMagnetId]);

  if (leadMagnet === null) {
    return <LeadMagnetNotFound returnLink="/leadmagnets" />;
  }

  return (
    <div>
      <LeadMagnetEditorContainer leadMagnet={leadMagnet} />
    </div>
  );
}

export default LeadMagnetEditorPage;

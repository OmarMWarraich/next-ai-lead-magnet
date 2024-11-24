import { auth } from "@clerk/nextjs/server";
import React from "react";

import { prismadb } from "@/lib/prismadb";

const getLeadMagnets = async (userId: string) => {
  try {
    const leadMagnets = await prismadb.leadMagnet.findMany({
      where: {
        userId,
      },
    });
    return leadMagnets;
  } catch (error) {
    console.error("Error fetching lead magnets", error);
    return [];
  }
};

const getLeads = async (userId: string) => {
  try {
    const leads = await prismadb.lead.findMany({
      where: {
        userId,
      },
    });
    return leads;
  } catch (error) {
    console.error("Error fetching leads", error);
    return [];
  }
};

const LeadMagnetsPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    return <div>No user found...</div>;
  }

  const leadMagnetsRequest = getLeadMagnets(userId);
  const leadsRequest = getLeads(userId);

  const [leadMagnets, leads] = await Promise.all([
    leadMagnetsRequest,
    leadsRequest,
  ]);

  console.log(leadMagnets, leads);

  return <div>LeadMagnetsPage</div>;
};

export default LeadMagnetsPage;

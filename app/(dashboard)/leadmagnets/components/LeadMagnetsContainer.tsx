"use client";

import { Lead, LeadMagnet } from "@prisma/client";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";

import LeadMagnetTable from "./LeadMagnetTable";

interface LeadMagnetsContainerProps {
  leadMagnets: LeadMagnet[];
  leads: Lead[];
}

const LeadMagnetsContainer = ({
  leadMagnets,
  leads,
}: LeadMagnetsContainerProps) => {
  return (
    <div className="min-h-screen w-full p-6 lg:mx-auto lg:max-w-5xl">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Lead Magnets</h2>
        <Button variant="default">
          <Link href="lead-magnet-editor">Create</Link>
        </Button>
      </div>
      <LeadMagnetTable leadMagnets={leadMagnets} leads={leads} />
    </div>
  );
};

export default LeadMagnetsContainer;

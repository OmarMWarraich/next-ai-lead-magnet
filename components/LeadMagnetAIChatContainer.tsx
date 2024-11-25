import React from "react";

interface LeadMagnetAIChatContainerProps {
  leadMagnetId: string;
  emailCapturePrompt: string;
  firstQuestion: string;
  prompt: string;
  captureEmail: boolean;
}

const LeadMagnetAIChatContainer = ({
  leadMagnetId,
  emailCapturePrompt,
  firstQuestion,
  prompt,
  captureEmail,
}: LeadMagnetAIChatContainerProps) => {
  console.log(
    leadMagnetId,
    emailCapturePrompt,
    firstQuestion,
    prompt,
    captureEmail
  );
  return <div>LeadMagnetAIChatContainer</div>;
};

export default LeadMagnetAIChatContainer;

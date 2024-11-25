import React from "react";

interface LeadMagnetEmailCaptureModalProps {
  emailCapturePrompt: string;
  leadMagnetId: string;
  setHasCapturedUserInfo: (hasCapturedUserInfo: boolean) => void;
  setShowEmailCaptureModal: (showEmailCaptureModal: boolean) => void;
}

const LeadMagnetEmailCaptureModal = ({
  emailCapturePrompt,
  leadMagnetId,
  setHasCapturedUserInfo,
  setShowEmailCaptureModal,
}: LeadMagnetEmailCaptureModalProps) => {
  console.log(
    emailCapturePrompt,
    leadMagnetId,
    setHasCapturedUserInfo,
    setShowEmailCaptureModal
  );
  return <div>LeadMagnetEmailCaptureModal</div>;
};

export default LeadMagnetEmailCaptureModal;

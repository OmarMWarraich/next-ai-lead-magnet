"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { BsArrowLeft, BsCheck, BsPencil } from "react-icons/bs";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLeadMagnetEditorContext } from "@/context/LeadMagnetEditorContext";

const LeadMagnetEditorNavbar = () => {
  const router = useRouter();
  const {
    edittedLeadMagnet,
    setEdittedLeadMagnet,
    save: saveLeadMagnet,
    publish,
    unpublish,
    remove,
  } = useLeadMagnetEditorContext();

  const [editing, setEditing] = React.useState(false);
  const [saving, setSaving] = React.useState(false);
  const [publishing, setPublishing] = React.useState(false);
  const [unpublishing, setUnpublishing] = React.useState(false);
  const [deleting, setDeleting] = React.useState(false);

  console.log(edittedLeadMagnet);

  const saveName = async () => {
    try {
      await saveLeadMagnet();
      toast.success("Saved!");
      setEditing(false);
    } catch (error) {
      console.log(error);
      toast.error("Error saving name. Please try again.");
    }
  };

  const cancelSaveName = () => {
    setEditing(false);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await saveLeadMagnet();
      toast.success("Saved!");
    } catch (error) {
      console.log(error);
      toast.error("Error saving. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handlePublish = async () => {
    setPublishing(true);
    try {
      await publish();
      toast.success("Published!");
    } catch (error) {
      console.log(error);
      toast.error("Error publishing. Please try again.");
    } finally {
      setPublishing(false);
    }
  };

  const handleUnpublish = async () => {
    setUnpublishing(true);
    try {
      await unpublish();
      toast.success("Unpublished!");
    } catch (error) {
      console.log(error);
      toast.error("Error unpublishing. Please try again.");
    } finally {
      setUnpublishing(false);
    }
  };

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await remove();
      toast.success("Deleted!");
      router.push("/lead-magnets");
    } catch (error) {
      console.log(error);
      toast.error("Error deleting. Please try again.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="flex w-full flex-row items-center justify-between border-b border-solid border-gray-200 bg-white p-3 text-gray-600">
      <div className="flex flex-row items-center">
        <BsArrowLeft
          size={20}
          className="w-fit cursor-pointer pr-3"
          onClick={() => router.push("/lead-magnets")}
        />
        {/* TODO: Input / Name */}
        {editing ? (
          <Input
            value={edittedLeadMagnet.name}
            onChange={(e) =>
              setEdittedLeadMagnet((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
          />
        ) : (
          <span className="text-xl font-bold">{edittedLeadMagnet.name}</span>
        )}
        {/* TODO: Edit / Save */}
        {editing ? (
          <div className="flex flex-row text-purple-500">
            <BsCheck
              className="cursor-pointer"
              size={25}
              onClick={() => saveName()}
            />
            <span className="mx-1 border-r-2 border-gray-300" />
            <span
              className="ml-[5px] cursor-pointer font-normal"
              onClick={cancelSaveName}
            >
              X
            </span>
          </div>
        ) : (
          <div
            className="ml-3 cursor-pointer"
            onClick={() => setEditing((prev) => !prev)}
          >
            <BsPencil />
          </div>
        )}
      </div>
      <div className="flex flex-row items-center gap-4">
        {/* TODO: Delete with state */}
        {edittedLeadMagnet.id && (
          <Button onClick={handleDelete} variant="destructive">
            {deleting ? "Deleting..." : "Delete"}
          </Button>
        )}
        {/* TODO: Unpublish and view Final LM */}
        {edittedLeadMagnet.status === "published" && (
          <>
            <Button variant="outline" onClick={handleUnpublish}>
              {unpublishing ? "Unpublishing..." : "Unpublish"}
            </Button>
            {/* TODO: Change test to ${account.username} */}
            <Link href={`/lm/test/${edittedLeadMagnet.slug}`}>
              <Button variant="outline">View Published</Button>
            </Link>
          </>
        )}
        {/* TODO: Save & Publish  with state */}
        <div className="flex gap-4">
          <Button variant="secondary" onClick={handleSave}>
            {saving ? "Saving..." : "Save"}
          </Button>
          <Button variant="secondary" onClick={handlePublish}>
            {publishing ? "Publishing..." : "Publish"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeadMagnetEditorNavbar;

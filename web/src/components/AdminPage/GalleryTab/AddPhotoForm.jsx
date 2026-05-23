import React, { useState } from "react";
import { Upload, PlusCircle } from "lucide-react";
import useUpload from "@/utils/useUpload";

export function AddPhotoForm({ albumId, onAdd }) {
  const [photoUrl, setPhotoUrl] = useState("");
  const [photoCaption, setPhotoCaption] = useState("");
  const [addingPhoto, setAddingPhoto] = useState(false);
  const [upload, { loading: uploading }] = useUpload();

  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    const { url, error } = await upload({ url: objectUrl });
    if (error) {
      alert("Upload fehlgeschlagen");
      return;
    }
    setPhotoUrl(url);
  };

  const addPhoto = async () => {
    if (!photoUrl || !albumId) return;
    setAddingPhoto(true);
    await fetch("/api/photos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        album_id: albumId,
        url: photoUrl,
        caption: photoCaption,
      }),
    });
    setPhotoUrl("");
    setPhotoCaption("");
    setAddingPhoto(false);
    onAdd();
  };

  return (
    <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 mb-6 space-y-3">
      <h4 className="font-semibold text-gray-700 text-sm">Foto hinzufügen</h4>
      <div className="flex gap-3">
        <input
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
          className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
          placeholder="Bild-URL einfügen"
        />
        <label className="flex items-center gap-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 px-3 py-2 rounded-xl cursor-pointer text-sm font-medium transition-colors whitespace-nowrap">
          <Upload size={13} /> {uploading ? "…" : "Upload"}{" "}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoUpload}
          />
        </label>
      </div>
      {photoUrl && (
        <img
          src={photoUrl}
          alt="Preview"
          className="h-20 w-auto rounded-lg object-cover"
        />
      )}
      <input
        value={photoCaption}
        onChange={(e) => setPhotoCaption(e.target.value)}
        className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
        placeholder="Bildunterschrift (optional)"
      />
      <button
        onClick={addPhoto}
        disabled={!photoUrl || addingPhoto}
        className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-orange-700 disabled:opacity-50 transition-colors"
      >
        <PlusCircle size={14} />{" "}
        {addingPhoto ? "Wird hinzugefügt…" : "Foto hinzufügen"}
      </button>
    </div>
  );
}

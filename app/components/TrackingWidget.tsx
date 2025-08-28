"use client";
import { useState } from "react";

export default function TrackingWidget() {
  const [trackingId, setTrackingId] = useState("");
  const [result, setResult] = useState("");

  const handleTrack = () => {
    if (trackingId) {
      setResult(`Shipment ${trackingId} is currently in transit 🚚`);
    }
  };

  return (
    <div
      id="tracking"
      className="p-6 bg-white rounded-xl shadow-lg max-w-md mx-auto mt-6"
    >
      <h3 className="text-xl font-semibold mb-2">Track Your Shipment</h3>
      <input
        type="text"
        value={trackingId}
        onChange={(e) => setTrackingId(e.target.value)}
        placeholder="Enter Tracking ID"
        className="border p-2 rounded-md w-full"
      />
      <button
        onClick={handleTrack}
        className="mt-3 px-4 py-2 bg-orange-600 text-white rounded-lg w-full"
      >
        Track
      </button>
      {result && <p className="mt-2 text-gray-700">{result}</p>}
    </div>
  );
}

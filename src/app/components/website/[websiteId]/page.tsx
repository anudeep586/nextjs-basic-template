"use client";
// src/app/pages/website/[websiteId].tsx
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DynamicRendering({
  params,
}: {
  params: { websiteId: string };
}) {
  console.log(params);
  const router = useRouter();
  //   const { websiteLink } = { websiteLink: "charizard-stg-hjchkxsxja-uc.a.run.app" };

  const [interactionData, setInteractionData] = useState<string>("");
  const [reviewComments, setReviewComments] = useState<string>("");
  const [rating, setRating] = useState<number | null>(null);

  // Function to handle interaction with the website
  const handleInteraction = () => {
    // Perform website interaction logic here
    // For example, update the interactionData state
  };

  // Function to submit the review
  const handleReviewSubmit = () => {
    console.log(`Review Comments: ${reviewComments}`);
    alert("Review submitted successfully!");
  };

  return (
    <div>
      <h1>Website Dashboard</h1>
      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <iframe
          src={`https://${params.websiteId}`}
          title="Website Viewer"
          width="100%"
          height="500px"
        ></iframe>
      </div>

      <div>
        <h2>Interaction Section</h2>
        <button onClick={handleInteraction}>Perform Interaction</button>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Review Section</h2>
        <label
          htmlFor="reviewComments"
          className="block text-sm font-medium text-gray-700"
        >
          Review Comments:
        </label>
        <textarea
          id="reviewComments"
          value={reviewComments}
          onChange={(e) => setReviewComments(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />

        <div className="mt-4">
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-700"
          >
            Rating:
          </label>
          <select
            id="rating"
            value={rating || ""}
            onChange={(e) => setRating(Number(e.target.value))}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="" disabled>
              Choose a rating
            </option>
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleReviewSubmit}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
}

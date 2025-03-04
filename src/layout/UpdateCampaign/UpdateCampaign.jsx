import React, { useState } from "react";

const UpdateCampaign = () => {
  const [campaign, setCampaign] = useState({
    image: "",
    title: "",
    type: "personal issue",
    description: "",
    minDonation: "",
    deadline: "",
  });

  const userEmail = "user@example.com"; // Replace with actual user data
  const userName = "John Doe"; // Replace with actual user data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampaign({ ...campaign, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Campaign Data:", campaign);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-4">Update Campaign</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={campaign.image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Campaign Title"
          value={campaign.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="type"
          value={campaign.type}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="personal issue">Personal Issue</option>
          <option value="startup">Startup</option>
          <option value="business">Business</option>
          <option value="creative ideas">Creative Ideas</option>
        </select>
        <textarea
          name="description"
          placeholder="Description"
          value={campaign.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        ></textarea>
        <input
          type="number"
          name="minDonation"
          placeholder="Minimum Donation Amount"
          value={campaign.minDonation}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="date"
          name="deadline"
          value={campaign.deadline}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          value={userEmail}
          className="w-full p-2 border rounded bg-gray-200 cursor-not-allowed"
          readOnly
        />
        <input
          type="text"
          value={userName}
          className="w-full p-2 border rounded bg-gray-200 cursor-not-allowed"
          readOnly
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Now
        </button>
      </form>
    </div>
  );
};

export default UpdateCampaign
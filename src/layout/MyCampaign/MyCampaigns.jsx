import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const MyCampaigns = () => {
  const navigate = useNavigate();
  const {user} = useContext(AuthContext)
  const [campaigns, setCampaigns] = useState([]);

  const handleUpdate = (id) => {
    navigate(`/updateCampaign/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this campaign?")) {
      setCampaigns(campaigns.filter((campaign) => campaign.id !== id));
    }
  };


  useEffect( () => {
    fetch(`http://localhost:5000/myCampaign/${user.email}`)
    .then(res => res.json())
    .then(data => setCampaigns(data))

  }, [])

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-semibold mb-6">My Campaigns</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse ">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3">Title</th>
              <th className="border p-3">Type</th>
              <th className="border p-3">Donation</th>
              <th className="border p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign._id} className="text-center hover:bg-gray-100">
                <td className="border p-3">{campaign.title}</td>
                <td className="border p-3 capitalize">{campaign.type}</td>
                <td className="border p-3">${campaign.minDonation}</td>
                <td className="border text-center p-3 space-y-2 lg:space-x-2">
                  
                <button
                    onClick={() => handleUpdate(campaign.id)}
                    className="bg-green-600 text-white px-4  py-2 h-full rounded hover:bg-green-700"
                  >
                    Update
                  </button>

                  <button
                    onClick={() => handleDelete(campaign.id)}
                    className="bg-red-600 text-white px-4 py-2  rounded hover:bg-red-700"
                  >
                    Delete
                  </button>

                </td>
                {/* <td className="border p-3 space-x-3 flex items-center justify-center ">
                
                  <button
                    onClick={() => handleDelete(campaign.id)}
                    className="bg-red-600 text-white px-4 py-2  rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCampaigns;

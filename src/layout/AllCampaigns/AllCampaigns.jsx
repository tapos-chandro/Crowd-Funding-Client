import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allCampaign")
      .then((res) => res.json())
      .then((data) => setCampaigns(data));
  }, []);


  return (
    <div className="container mx-auto p-5 pt-24">
      <h1 className="text-center text-2xl font-bold pb-9">All Campaign</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 bg-white text-gray-700 shadow-md">
          {/* Table Head */}
          <thead className="bg-gray-100">
            <tr className="text-left lg:text-lg text-sm  ">
              <th className="p-3">Image</th>
              <th className="p-3">Title</th>
              <th className="p-3">Type</th>
              <th className="p-3">Min Donation</th>
              <th className="p-3">Deadline</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign?._id} className="border-t">
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 overflow-hidden rounded-full border">
                      <img
                        src={campaign?.image}
                        alt="Campaign"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </td>
                <td className="p-3 text-sm">{campaign?.title}</td>
                <td className="p-3 text-sm">{campaign?.type}</td>
                <td className="p-3 text-sm">${campaign?.minDonation}</td>
                <td className="p-3 text-sm">{campaign?.deadline}</td>
                <td className="p-3 text-sm">
                 
                 
                  <Link to={`/details/${campaign?._id}`} className="w-full">
                  
                  <button className="rounded bg-blue-500 px-3 py-1 text-white text-sm hover:bg-blue-600">
                    See More
                  </button>
                </Link>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCampaigns;

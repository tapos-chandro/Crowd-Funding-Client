import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const MyDonations = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const {user} = useContext(AuthContext)

  console.log(campaigns)


  useEffect(() => {
    fetch(`http://localhost:5000/myDonated/${user?.email}`)
    .then(res => res.json())
    .then(data => setCampaigns(data))
    setLoading(false)
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">My Donated Campaigns</h1>

      {loading ? (
        <div className="flex justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : campaigns.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {campaigns.map((campaign) => (
            <div key={campaign?._id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{campaign?.title}</h2>
                <p>{campaign?.description}</p>
                <p className="text-sm text-gray-500">Amount Donated: <span className="font-bold">${campaign?.minDonation}</span></p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">You haven't donated to any campaigns yet.</p>
      )}
    </div>
  );
};

export default MyDonations;

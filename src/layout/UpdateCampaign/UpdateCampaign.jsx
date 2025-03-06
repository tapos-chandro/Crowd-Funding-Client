import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCampaign = () => {
  const { user } = useContext(AuthContext);
  const params = useParams()
  console.log(params.id)
  const [campaign , seCampaign] = useState([]);
  const navigate = useNavigate()



  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const name = e.target.name.value;
    const title = e.target.title.value;
    const type = e.target.type.value;
    const description = e.target.description.value;
    const minDonation = e.target.minDonation.value;
    const deadline = e.target.deadline.value;
    const image = e.target.image.value;

    const updateData = {email, name, title, type, description, minDonation, deadline, image}

try {
  fetch(`http://localhost:5000/updateCampaign/${params?.id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updateData)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.modifiedCount> 0){
      Swal.fire({
        title: "Successfully Updated",
        text: "You clicked the button!",
        icon: "success"
      });
      navigate('/my-campaigns')
    }
  })

} catch (error) {
  console.log(error.message)
}


    // console.log("Campaign Data:", campaign);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/updateCampaign/${params.id}`)
    .then( res => res.json())
    .then(data => seCampaign(data))
  }, []);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-4">Update Campaign</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          defaultValue={campaign?.image}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Campaign Title"
          defaultValue={campaign?.title}
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="type"
          defaultValue={campaign?.type}
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
          defaultValue={campaign.description}
          className="w-full p-2 border rounded"
          required
        ></textarea>
        <input
          type="number"
          name="minDonation"
          placeholder="Minimum Donation Amount"
          defaultValue={campaign?.minDonation}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="date"
          name="deadline"
          defaultValue={campaign.deadline}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          defaultValue={user?.email}
          className="w-full p-2 border rounded bg-gray-200 cursor-not-allowed"
          readOnly
        />
        <input
          type="text"
          name="name"
          defaultValue={user?.displayName}
          className="w-full p-2 border rounded bg-gray-200 cursor-not-allowed"
          readOnly
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Update Now
        </button>
      </form>
    </div>
  );
};

export default UpdateCampaign;

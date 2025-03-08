import React, { useContext} from "react";
import { AuthContext } from "../../context/AuthProvider";
import moment from "moment";
import Swal from "sweetalert2";


const AddCampaign = () => {
  const {user} = useContext(AuthContext)


const time = moment().format('LT')


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const title = form.title.value;
    const type = form.type.value;
    const description = form.description.value;
    const minDonation = form.minDonation.value;
    const deadline = form.deadline.value;
    const email = form.email.value;
    const campaign = {name, title, type, description, minDonation, deadline,email,time}
    



    fetch('https://crowd-funding-server-iota.vercel.app/campaign', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(campaign)
    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
        Swal.fire({
          title: "Successfully added",
          text: "You clicked the button!",
          icon: "success"
        });
        form.reset()
      }
    })
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md mt-5">
      <h2 className="text-2xl font-semibold mb-4 text-center">Add New Campaign</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Campaign Title"
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="type"
          className="w-full p-2 border rounded"
        >
          <option value="personal issue">Select</option>
          <option value="personal issue">Personal Issue</option>
          <option value="startup">Startup</option>
          <option value="business">Business</option>
          <option value="creative ideas">Creative Ideas</option>
        </select>
        <textarea
          name="description"
          placeholder="Description"
          className="w-full p-2 border rounded"
          required
        ></textarea>
        <input
          type="number"
          name="minDonation"
          placeholder="Minimum Donation Amount"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="date"
          name="deadline"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          value={user?.email}
          name="email"
          className="w-full p-2 border rounded bg-gray-200 cursor-not-allowed"
          readOnly
        />
        <input
          type="text"
          className="w-full p-2 border rounded bg-gray-200 cursor-not-allowed"
          readOnly
          value={user?.displayName}
          name='name'
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 hover:cursor-pointer"
        >
          Add Now
        </button>
      </form>
    </div>
  );
};

export default AddCampaign
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "./../../context/AuthProvider";
import  Swal  from 'sweetalert2';

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  // _id,image,title,type,description,minDonation,deadline



  const handleDonate = (id) => {
    console.log(id);

    const name = user?.displayName;
    const email = user?.email;

    const donateData = {
      name,
      email,
      image: details?.image,
      title: details?.title,
      type: details?.type,
      description: details?.description,
      minDonation: details?.minDonation,
      deadline: details?.deadline,
    };

    fetch(`https://crowd-funding-server-iota.vercel.app/donates`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(donateData)
    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
        Swal.fire({
          title: "Congratulations",
          text: "Your donate successfully",
          icon: "success"
        });
        navigate('/my-donations')
      }
    })
  };


  useEffect(() => {
    fetch(`https://crowd-funding-server-iota.vercel.app/details/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  return (
    <div className="container mx-auto flex justify-center py-20 mt-10 md:py-20 px-5">
      <div className="card bg-base-100 md:w-1/2 shadow-sm">
        <figure>
          <img src={details?.image} alt={details?.title} className="w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{details?.title}</h2>
          <p>{details?.type}</p>
          <p>{details?.description}</p>
          <p>Price: ${details?.minDonation}</p>
          <div className="card-actions">
            <button
              onClick={() => handleDonate(details?._id)}
              className="btn bg-blue-600 text-white text-lg w-full"
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

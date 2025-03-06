import { Link } from "react-router-dom";

const Campaign = ({ campaign }) => {
  const {   _id,image,title,type,description,minDonation } = campaign;


  



  return (
    <div className="card bg-base-100 rounded-none  shadow-sm grow">
      <figure>
        <img src={image} className="p-5 w-full" alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h2 className="text-md text-gray-500 font-bold">{type}</h2>
        <p>{description}</p>
        <p>Price: ${minDonation}</p>
        <div className="card-actions justify-between">
          <Link to={`/details/${_id}`} className="w-full"><button  className="btn btn-primary w-full">See More...</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Campaign;

const Campaign = ({ campaign }) => {
  const { title, description, image, raised, goal, deadline } = campaign;

  return (
    <div className="card bg-base-100 rounded-none  shadow-sm grow">
      <figure>
        <img src={image} className="p-5" alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p>
          <span>${raised}</span>raised of $<span>{goal}</span>
        </p>
        <div className="card-actions justify-between">
          <button className="btn bg-red-500 text-white">Donate Now</button>
          <button className="btn btn-primary">See More...</button>
        </div>
      </div>
    </div>
  );
};

export default Campaign;

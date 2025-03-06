import { useEffect, useState } from "react";
import Campaign from "./Campaign";
import SectionTitle from "./SectionTitle";
import PuffLoader from "react-spinners/ClipLoader";

const RunningCampaigns = () => {

  const [campaigns, setCampaigns] = useState([])

  const [loading, setLoading] = useState(true)


  
  useEffect(() => {

    fetch('http://localhost:5000/runningCampaign')
    .then(res => res.json())
    .then(data =>{ 
      setCampaigns(data)
      setLoading(false)
    })

  },[])


  if(loading){
    return <div className="w-full flex justify-center h-screen items-center">
    <PuffLoader className="w-2xl" size={100} />
</div>
  }

  return (
    <div className="py-10 container px-5 mx-auto">
      <SectionTitle
        title={"Running Campaigns"}
        subTitle={
          '"These active campaigns are making a difference. Contribute now and help bring impactful projects to life before their deadlines!'
        }
      ></SectionTitle>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 grow">
        {campaigns?.map((campaign) => (
          <Campaign campaign={campaign} key={campaign._id}></Campaign>
        ))}
      </div>
    </div>
  );
};

export default RunningCampaigns;

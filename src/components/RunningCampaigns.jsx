import Campaign from "./Campaign";
import SectionTitle from "./SectionTitle";

const RunningCampaigns = () => {
  const campaigns = [
    {
      id: 1,
      title: "Help Build a School",
      description: "Support education for underprivileged children.",
      image: "https://i.ibb.co/WvNWvHWy/banner4.jpg",
      raised: 5000,
      goal: 10000,
      deadline: "2025-04-15",
    },
    {
      id: 2,
      title: "Clean Water for All",
      description: "Fund clean water projects in rural areas.",
      image: "https://i.ibb.co/WvNWvHWy/banner4.jpg",
      raised: 7000,
      goal: 15000,
      deadline: "2025-05-10",
    },
    {
      id: 3,
      title: "Tech for Kids",
      description: "Provide laptops to students in need.",
      image: "https://i.ibb.co/WvNWvHWy/banner4.jpg",
      raised: 3000,
      goal: 8000,
      deadline: "2025-06-20",
    },
    {
      id: 4,
      title: "Medical Aid for Refugees",
      description: "Support healthcare services for displaced communities.",
      image: "https://i.ibb.co/WvNWvHWy/banner4.jpg",
      raised: 9000,
      goal: 20000,
      deadline: "2025-07-05",
    },
    {
      id: 5,
      title: "Wildlife Conservation Fund",
      description: "Protect endangered species and their habitats.",
      image: "https://i.ibb.co/WvNWvHWy/banner4.jpg",
      raised: 12000,
      goal: 25000,
      deadline: "2025-08-15",
    },
    {
      id: 6,
      title: "Disaster Relief Support",
      description: "Help communities recover from natural disasters.",
      image: "https://i.ibb.co/WvNWvHWy/banner4.jpg",
      raised: 8000,
      goal: 18000,
      deadline: "2025-09-01",
    },
  ];

  return (
    <div className="py-10 container px-5 mx-auto">
      <SectionTitle
        title={"Running Campaigns"}
        subTitle={
          '"These active campaigns are making a difference. Contribute now and help bring impactful projects to life before their deadlines!'
        }
      ></SectionTitle>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 grow">
        {campaigns.map((campaign) => (
          <Campaign campaign={campaign} key={campaign.id}></Campaign>
        ))}
      </div>
    </div>
  );
};

export default RunningCampaigns;

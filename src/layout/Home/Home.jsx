import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import JoinCommunity from "../../components/JoinCommunity";
import RunningCampaigns from "../../components/RunningCampaigns";
import Testimonials from "../../components/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RunningCampaigns></RunningCampaigns>
            <Testimonials></Testimonials>
            <JoinCommunity></JoinCommunity>
            <Footer></Footer>
        </div>
    );
};

export default Home;
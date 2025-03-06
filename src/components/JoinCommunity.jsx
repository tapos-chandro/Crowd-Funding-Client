
import Swal from 'sweetalert2'

const JoinCommunity = () => {

  // https://www.pexels.com/photo/a-men-doing-shake-hands-5833334/
  // https://html.dynamiclayers.net/dl/charitify/index.html?storefront=envato-elements

  const handleJoin = () => {
    Swal.fire({
      title: "Welcome",
      text: "Successfully Join Our Community",
      icon: "success"
    });
  }
  

    return (
        
        <section className="py-16   my-10 text-center mt-10">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-3xl lg:text-5xl font-bold">Join Our Community</h2>
          <p className="mt-4 text-lg lg:text-xl">
            Become part of a thriving crowdfunding network. Start a campaign, support causes, and make an impact today!
          </p>
          <div className="mt-6">
            <button onClick={handleJoin} className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:cursor-pointer hover:bg-gray-200 transition">
              Join Now
            </button>
          </div>
        </div>
      </section>
    );
};

export default JoinCommunity;
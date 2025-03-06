const AllCampaigns = () => {
    return (
      <div className="container mx-auto p-5">
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 bg-white text-gray-700 shadow-md">
            {/* Table Head */}
            <thead className="bg-gray-100">
              <tr className="text-left text-lg">
                <th className="p-3">Image</th>
                <th className="p-3">Title</th>
                <th className="p-3">Type</th>
                <th className="p-3">Min Donation</th>
                <th className="p-3">Deadline</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              <tr className="border-t">
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 overflow-hidden rounded-full border">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Campaign"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </td>
                <td className="p-3">Zemlak, Daniel and Leannon</td>
                <td className="p-3">Health</td>
                <td className="p-3">$100</td>
                <td className="p-3">2025-12-31</td>
                <td className="p-3">
                  <button className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600">See More</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default AllCampaigns;
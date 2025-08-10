import React from 'react';

const Categories = () => {
    return (
        <>
        <div className="container mx-auto p-6">
<h2 className="text-2xl font-bold text-center mb-6">Most popular categories</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
  
  <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
    <div className="bg-green-100 rounded-full p-3 mb-2">
      <i className="fas fa-user-tie text-green-600"></i>
    </div>
    <h3 className="text-lg font-semibold">Career Guidance</h3>
    <p className="text-gray-500">1,720 postings</p>
  </div>
  
  <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
    <div className="bg-pink-100 rounded-full p-3 mb-2">
      <i className="fas fa-lightbulb text-pink-600"></i>
    </div>
    <h3 className="text-lg font-semibold">Entrepreneurship</h3>
    <p className="text-gray-500">1,720 postings</p>
  </div>
  
  <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
    <div className="bg-blue-100 rounded-full p-3 mb-2">
      <i className="fas fa-laptop-code text-blue-600"></i>
    </div>
    <h3 className="text-lg font-semibold">Technology</h3>
    <p className="text-gray-500">1,720 postings</p>
  </div>
  
  <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
    <div className="bg-lime-100 rounded-full p-3 mb-2">
      <i className="fas fa-briefcase text-lime-600"></i>
    </div>
    <h3 className="text-lg font-semibold">Business Strategy</h3>
    <p className="text-gray-500">1,720 postings</p>
  </div>
  
  <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
    <div className="bg-purple-100 rounded-full p-3 mb-2">
      <i className="fas fa-seedling text-purple-600"></i>
    </div>
    <h3 className="text-lg font-semibold">Personal Growth</h3>
    <p className="text-gray-500">1,720 postings</p>
  </div>
  
  <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
    <div className="bg-yellow-100 rounded-full p-3 mb-2">
      <i className="fas fa-bullhorn text-yellow-600"></i>
    </div>
    <h3 className="text-lg font-semibold">Marketing & Sales</h3>
    <p className="text-gray-500">1,720 postings</p>
  </div>
  
  <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
    <div className="bg-teal-100 rounded-full p-3 mb-2">
      <i className="fas fa-chart-line text-teal-600"></i>
    </div>
    <h3 className="text-lg font-semibold">Finance & Investment</h3>
    <p className="text-gray-500">1,720 postings</p>
  </div>
  
  <div className="bg-blue-600 text-white p-4 rounded-lg shadow flex flex-col items-center justify-center">
    <h3 className="text-lg font-semibold">+10k listings</h3>
    <p className="text-sm">Available now!</p>
    <button className="mt-2 bg-white text-blue-600 px-4 py-2 rounded">View all</button>
  </div>

</div>
</div>
        </>
    )
}

export default Categories;
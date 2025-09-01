import React from "react";

const cards = [
  {
    title: "Jenkins",
    description:
      "Access Jenkins dashboard, manage builds, and monitor CI/CD pipelines for your projects.",
    button: "Go to Jenkins",
    icon: (
      <img
        className="w-[70%] h-[70%] mx-auto mb-4 object-contain"
        src="https://www.jenkins.io/images/logos/jenkins/jenkins.svg"
        alt="Jenkins Logo"
      />
    ),
  },
  {
    title: "LeeShop",
    description:
      "Manage your LeeShop store, view orders, update products, and analyze sales performance.",
    button: "Go to LeeShop",
    icon: (
      <img
        className="w-full h-full mx-auto mb-4 object-contain"
        src="https://www.creativefabrica.com/wp-content/uploads/2018/10/Store-shop-logo-by-DEEMKA-STUDIO-580x406.jpg"
        alt="Store Logo"
      />
    ),
  },
  {
    title: "API",
    description:
      "Explore API documentation, test endpoints, and manage your API keys and integrations.",
    button: "Go to API",
    icon: (
      <img
        className="w-full h-full mx-auto mb-4 object-contain"
        src="https://sjinnovation.com/sites/default/files/inline-images/What%20is%20API_0.png"
        alt="API Logo"
      />
    ),
  },
];

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center justify-between px-8 py-6 bg-white shadow-sm">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-gray-700">Welcome</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">What's up, User</span>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center py-16">
        <div className="mb-2 text-xs text-gray-400 tracking-widest uppercase">
          Looks like you are new here
        </div>
        <h1 className="mb-10 text-2xl font-semibold text-gray-800 text-center">
          Welcome to your Dashboard. What would you like to do?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center"
            >
              {card.icon}
              <h2 className="text-lg font-semibold mb-2 text-gray-800">{card.title}</h2>
              <p className="text-gray-500 mb-6">{card.description}</p>
              <button className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                {card.button}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

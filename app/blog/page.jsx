"use client"; // To use client-side rendering

export default function BlogPage() {
  const healthTips = [
    {
      id: 1,
      title: "Stay Hydrated",
      content:
        "Drinking enough water is crucial for maintaining good health. Aim for 8 glasses of water a day, and more if you are active or in a hot climate.",
    },
    {
      id: 2,
      title: "Exercise Regularly",
      content:
        "Regular physical activity can improve your muscle strength and boost your endurance. Exercise releases endorphins that help reduce stress and promote happiness.",
    },
    {
      id: 3,
      title: "Eat a Balanced Diet",
      content:
        "Incorporating fruits, vegetables, lean proteins, and whole grains into your diet can provide essential nutrients and help maintain a healthy weight.",
    },
  ];

  const healthNews = [
    {
      id: 1,
      title: "COVID-19 Booster Shots Now Available",
      date: "September 1, 2024",
      content:
        "The latest COVID-19 booster shots are now available for everyone above the age of 12. Health experts recommend getting the shot to stay protected.",
    },
    {
      id: 2,
      title: "New Research on the Benefits of Meditation",
      date: "August 20, 2024",
      content:
        "A new study shows that regular meditation can significantly reduce anxiety and improve overall mental well-being. Experts recommend 10-20 minutes daily.",
    },
    {
      id: 3,
      title: "Flu Season is Here: How to Stay Safe",
      date: "August 10, 2024",
      content:
        "Flu season is approaching, and it's important to get your flu shot. Washing your hands regularly and avoiding contact with sick individuals can also help.",
    },
  ];

  return (
    <div className="mt-10 mx-auto w-4/5">
      <h1>Health Blog</h1>

      {/* Health Tips Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Health Tips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {healthTips.map((tip) => (
            <div key={tip.id} className="border rounded-lg p-4 shadow-md">
              <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
              <p className="text-gray-700">{tip.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Health News Section */}
      <section className="mt-11">
        <h2 className="text-2xl font-semibold mb-4">Latest Health News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {healthNews.map((news) => (
            <div key={news.id} className="border rounded-lg p-4 shadow-md">
              <h3 className="text-xl font-bold mb-2">{news.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{news.date}</p>
              <p className="text-gray-700">{news.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

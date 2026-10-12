function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[var(--background)] text-[var(--foreground)] border-r border-gray-300 flex flex-col p-4 fixed left-0 top-0">
      <h2 className="text-xl font-bold mb-6">Instagram Clone</h2>
      <nav className="flex flex-col space-y-4">
        <button className="text-left">🏠 Home</button>
        <button className="text-left">📖 Stories</button>
        <button className="text-left">🔍 Explore</button>
        <button className="text-left">❤️ Notifications</button>
        <button className="text-left">👤 Profile</button>
      </nav>
      <div className="mt-auto">
        <button className="w-full bg-blue-500 text-white py-2 rounded">Log In</button>
        <button className="w-full mt-2 border border-gray-400 py-2 rounded">Sign Up</button>
      </div>
    </div>
  );
}

function Stories() {
  const stories = [
    { id: 1, user: "alice", image: "https://randomuser.me/api/portraits/women/5.jpg" },
    { id: 2, user: "brandon", image: "https://randomuser.me/api/portraits/men/6.jpg" },
    { id: 3, user: "chloe", image: "https://randomuser.me/api/portraits/women/7.jpg" },
    { id: 4, user: "david", image: "https://randomuser.me/api/portraits/men/8.jpg" },
  ];

  return (
    <div className="flex space-x-4 overflow-x-auto p-4 border-b border-gray-300">
      {stories.map(story => (
        <div key={story.id} className="flex flex-col items-center">
          <img
            src={story.image}
            alt={story.user}
            className="w-16 h-16 rounded-full border-2 border-pink-500"
          />
          <span className="text-xs mt-1">{story.user}</span>
        </div>
      ))}
    </div>
  );
}

function Post({ user, image, caption, verified, time }: any) {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] rounded shadow">
      <div className="flex items-center p-2 font-semibold">
        <span>{user}</span>
        {verified && <span className="ml-1 text-blue-400">✔</span>}
        <span className="ml-auto text-xs text-gray-400">{time}</span>
      </div>
      <img src={image} alt={caption} className="w-full" />
      <div className="p-2">{caption}</div>
      <div className="flex space-x-4 p-2 text-xl">
        <span>❤️</span>
        <span>💬</span>
        <span>📤</span>
      </div>
    </div>
  );
}

export default function Home() {
  const posts = [
    {
      id: 1,
      user: "brandon",
      image: "https://picsum.photos/id/1011/600/400",
      caption: "Exploring the mountains 🏔️",
      verified: true,
      time: "3h",
    },
    {
      id: 2,
      user: "chloe",
      image: "https://picsum.photos/id/1025/600/400",
      caption: "Lazy Sunday vibes ☕",
      verified: false,
      time: "1d",
    },
    {
      id: 3,
      user: "alice",
      image: "https://picsum.photos/id/1035/600/400",
      caption: "City lights at night ✨",
      verified: false,
      time: "5d",
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main feed */}
      <div className="flex-1 ml-64 min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <Stories />
        <main className="max-w-md mx-auto mt-6 space-y-6 mb-16">
          {posts.map(post => (
            <Post key={post.id} {...post} />
          ))}
        </main>
      </div>
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
        <div>
          <h2 className="text-2xl font-bold">Studytable</h2>
          <p className="text-gray-400">© Copyright 2025 Studytable</p>
        </div>
        <div>
          <button className="bg-gray-200 text-black px-4 py-2 rounded-lg font-medium shadow-md flex items-center">
            <span className="mr-2">⭐</span> Notice Board
          </button>
        </div>
        <div>
          <h3 className="font-semibold">Socials</h3>
          <p>📸 Instagram</p>
          <p>💬 WhatsApp</p>
        </div>
        <div>
          <h3 className="font-semibold">Blogs</h3>
          <p>How we plan learning session?</p>
          <p>How we plan assessment session?</p>
          <p>How we manage student life?</p>
          <p>The effective student</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
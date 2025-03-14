"use client";
import React from "react";

function MainComponent() {
  const [remainingTime, setRemainingTime] = useState("");
  const presaleStats = {
    totalSupply: "1,000,000,000",
    soldTokens: "650,000,000",
    initialPrice: "$0.001",
    launchDate: "March 15, 2025",
  };

  useEffect(() => {
    const endDate = new Date("2025-03-15").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setRemainingTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-poppins">
      <header className="fixed w-full top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-[#2a2a2a]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#ff3366] to-[#9933ff] bg-clip-text text-transparent">
            Quantum Meme
          </div>
          <a
            href="https://t.me/+DjV9udmqSNAwNDMx"
            target="_blank"
            className="bg-gradient-to-r from-[#ff3366] to-[#9933ff] px-6 py-2 rounded-full text-sm hover:opacity-90"
          >
            Join Telegram
          </a>
        </div>
      </header>

      <main className="pt-20">
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="w-[200px] h-[200px] mx-auto mb-8 bg-gradient-to-r from-[#ff3366] to-[#9933ff] rounded-full flex items-center justify-center">
            <span className="text-6xl">🚀</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Quantum Meme
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            The next generation meme token powered by quantum technology and
            community-driven innovation
          </p>
        </section>
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Join Our Community
            </h2>
            <a
              href="https://t.me/+DjV9udmqSNAwNDMx"
              target="_blank"
              className="inline-block bg-gradient-to-r from-[#ff3366] to-[#9933ff] px-12 py-4 rounded-xl text-xl font-bold hover:opacity-90 transition-all transform hover:scale-105"
            >
              Join Telegram
            </a>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a]">
              <p className="text-gray-400">Total Supply</p>
              <p className="text-xl font-bold">{presaleStats.totalSupply}</p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a]">
              <p className="text-gray-400">Tokens Sold</p>
              <p className="text-xl font-bold">{presaleStats.soldTokens}</p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a]">
              <p className="text-gray-400">Initial Price</p>
              <p className="text-xl font-bold">{presaleStats.initialPrice}</p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a]">
              <p className="text-gray-400">Launch Date</p>
              <p className="text-xl font-bold">{presaleStats.launchDate}</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Quantum Meme</h2>
            <p className="text-gray-400 mb-6">
              Quantum Meme is revolutionizing the meme token space by combining
              cutting-edge quantum technology with community-driven innovation.
              Our token represents the perfect fusion of humor and technological
              advancement in the crypto space.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-[#1a1a1a] border-t border-[#2a2a2a]">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#ff3366]">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="https://t.me/+DjV9udmqSNAwNDMx"
              className="text-gray-400 hover:text-[#ff3366]"
            >
              <i className="fab fa-telegram text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#ff3366]">
              <i className="fab fa-discord text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#ff3366]">
              <i className="fab fa-medium text-xl"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;
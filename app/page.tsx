import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black h-screen w-full overflow-hidden flex">
      <div className="w-1/2 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-white">Start Crypto Trading Now</h1>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-2/4 mx-auto border-2 border-gray-100 rounded-lg p-6 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
          <p className="text-white">Popular</p>
          <li className="space-y-4 text-white">
            <ul>BTC</ul>
            <ul>SOL</ul>
            <ul>ETH</ul>
            <ul>BGB</ul>
            <ul>XRP</ul>
            <ul>USDC</ul>
          </li>
          </div>
        </div>
      </div>
    </div>
  );
}

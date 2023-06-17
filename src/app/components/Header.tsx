export function Header() {
  return (
    <div className="sticky top-0 flex items-center justify-between p-4">
      <div className="flex items-center">
        <h1 className="ml-2 text-2xl font-bold text-white">Wagmi</h1>
      </div>
      <div className="flex items-center">
        <button className="rounded bg-slate-100 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

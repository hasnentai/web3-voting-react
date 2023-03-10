import React, { useContext, useEffect } from "react";
import { Web3Context } from "../context/web3Context";
import Ballot from "../abi/Ballot.json";

const Header = () => {
  const web3 = useContext(Web3Context);
  useEffect(() => {
    const getProposal = async () => {
      let proposals = await contract?.methods.chairman().call();
      //let propsalsName = web3.utils.hexToAscii(proposals.name);
      console.log(proposals);
    };
    let contract;

    if (web3) {
      contract = new web3.eth.Contract(
        Ballot.abi,
        "0x9b17E48781a83900d7E74971658D4bC8246F6Bb5"
      );
    }

    console.log(contract);
    getProposal();
  }, []);
  return (
    <header class="z-40 items-center w-full h-16 bg-white shadow-lg dark:bg-gray-700 rounded-2xl">
      <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
        <div class="relative flex items-center w-full pl-1 lg:max-w-68 sm:pr-2 sm:ml-0">
          <div class="container relative left-0 z-50 flex w-3/4 h-auto h-full">
            <div class="relative flex items-center w-full h-full lg:w-64 group">
              <div class="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                <svg
                  fill="none"
                  class="relative w-5 h-5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <svg
                class="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
              </svg>
              <input
                type="text"
                class="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input"
                placeholder="Search"
              />
              <div class="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
                +
              </div>
            </div>
          </div>

          {web3 ? (web3.account ? avatar() : connectWalletButton()) : loading()}
        </div>
      </div>
    </header>
  );

  function avatar() {
    return (
      <div class="relative flex items-center justify-end w-1/4 p-1 mr-2  sm:mr-0 sm:right-auto">
        <p className="mr-3 font-semibold text-slate-100">
          {web3.account.substr(0, 4)}...
          {web3.account.substr(web3.account.length - 3, web3.account.length)}
        </p>
        <a href="#" class="relative block">
          <img
            alt="profile"
            src={`https://avatars.dicebear.com/api/identicon/${web3?.account}.svg`}
            class="mx-auto object-cover rounded-full h-10 w-10 border-2"
          />
        </a>
      </div>
    );
  }

  function loading() {
    return (
      <div class="relative flex items-center justify-end w-1/4 p-1   sm:mr-0 sm:right-auto">
        <h1 className="text-sm font-semibold text-slate-100">Loading...</h1>
      </div>
    );
  }

  function connectWalletButton() {
    return (
      <div
        class="relative flex items-center justify-end w-1/4 p-1   sm:mr-0 sm:right-auto"
        onClick={() => web3.connectWallet()}
      >
        <a
          href="#_"
          class="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
        >
          <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
          <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
            <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
            <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
          </span>
          <span class="relative text-white">Connect Wallet</span>
        </a>
      </div>
    );
  }
};

export default Header;

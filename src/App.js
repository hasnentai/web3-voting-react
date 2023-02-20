import logo from './logo.svg';
import './App.css';
import getWeb3 from './getWeb3';
import { useEffect, useState , useContext} from 'react';
import { Web3Context } from './context/web3Context';

import Dashboard from './Dashboard';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
  ]);
  const [web3, setWeb3] = useState(null);
  useEffect(() => {
    const getWeb3Instance = async () => {
      const provider = await getWeb3(1);
      const ethereum = window.ethereum;
      if (ethereum) {
        setWeb3({ provider: provider, address: window.ethereum.selectedAddress });
        ethereum.on("accountsChanged", function (accounts) {
          setWeb3({ provider: provider, address: accounts[0] });
        });
      }
    };

    getWeb3Instance();

  }, []);

  return (
    <Web3Context.Provider value={web3}>
      <RouterProvider router={router}/>
    </Web3Context.Provider>
  );
}

export default App;

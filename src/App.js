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
      let account = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWeb3({account:account[0]})
      window.ethereum.on("accountsChanged", function (accounts) {
        setWeb3({account:accounts[0]});
      });
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

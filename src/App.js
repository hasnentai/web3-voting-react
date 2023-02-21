import "./App.css";
import getWeb3 from "./getWeb3";
import { useEffect, useState, useContext } from "react";
import { Web3Context } from "./context/web3Context";
import Ballot from "./abi/Ballot.json";
import store from "./redux/store";
import { Provider } from "react-redux";
import Dashboard from "./dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
      let accounts = await getAccounts();
      setWeb3({ ...web3, account: accounts[0] });
    };

    window.ethereum.on("accountsChanged", function (accounts) {
      setWeb3({ account: accounts[0] });
    });

    const getAccounts = async () => {
      let _web3 = await getWeb3(1);
      let accounts = await _web3.eth.getAccounts();
      let contract;
      contract = new _web3.eth.Contract(
        Ballot.abi,
        "0x1A46C17Ae5Eb0c348845ca8C2050554E76E7CAbA"
      );

      setWeb3({ ...web3, account: accounts[1], ..._web3, ballot: contract });
      return accounts;
    };
    getAccounts();

    setWeb3({ connectWallet: getWeb3Instance });
  }, []);

  return (
    <Provider store={store}>
      <Web3Context.Provider value={web3}>
        <RouterProvider router={router} />
      </Web3Context.Provider>
    </Provider>
  );
}

export default App;

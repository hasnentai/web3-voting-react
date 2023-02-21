import { useContext, useEffect, useState } from "react";
import { Web3Context } from "../context/web3Context";
import giveRightToVote from "../service/giveRightToVote";

function Voters() {
  let web3 = useContext(Web3Context);
  const [account, setAccounts] = useState();

  const [selectedAccount, setSelectedAccount] = useState([]);

  useEffect(() => {
    const _getAccounts = async () => {
      let account = await web3?.eth?.getAccounts();
      console.log(web3);

      setAccounts(account);
    };
    _getAccounts();
  }, [web3]);

  useEffect(() => {
    console.log(selectedAccount);
  }, [selectedAccount]);

  return (
    <div class="w-full sm:w-1/2 xl:w-1/2">
      <div class="mx-0 mb-4 sm:ml-4 xl:mr-4">
        <div class="w-full bg-white shadow-lg rounded-2xl dark:bg-gray-700">
          <p class="p-4 font-bold text-black text-xl dark:text-white">
            Voter List
          </p>

          <div className="p-4">
            {account
              ? account.map((value, index) => {
                  return (
                    <div key={index}>
                      <input
                        type="checkbox"
                        id={index}
                        name={value}
                        onClick={() => {
                          setSelectedAccount([...selectedAccount, value]);
                        }}
                      />
                      <label className="dark:text-white" htmlFor={index}>
                        {" "}
                        {value}
                      </label>
                    </div>
                  );
                })
              : ""}
          </div>
          <button
            onClick={() =>
              giveRightToVote(web3.ballot, selectedAccount, account[0])
            }
            class="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Give Right to Vote
          </button>
        </div>
      </div>
    </div>
  );
}

export default Voters;

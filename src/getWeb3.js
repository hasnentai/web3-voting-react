import Web3 from "web3";


const getWeb3 = (provider_nos) =>
    new Promise(async (resolve, reject) => {
        var provider;
        if (provider_nos === 0) {
            provider = window.ethereum;
            if (provider) {
                const web3j = new Web3(provider);
                try {
                    if (provider_nos === 0) {
                        await window.ethereum.enable();
                    }
                    resolve(web3j);
                } catch (error) {
                    reject(error);
                }
            }
        }  else {
            const provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
            const web3j = new Web3(provider);
            resolve(web3j);
        }
    });

export default getWeb3;
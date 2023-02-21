const getChairmanAddress = async (contract) => {
  let account = await contract?.methods.chairman().call();
  debugger;
  return account;
};

export default getChairmanAddress;

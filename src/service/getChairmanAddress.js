const getChairmanAddress = async (contract) => {
  let account = await contract?.methods.chairman().call();
  return account;
};

export default getChairmanAddress;

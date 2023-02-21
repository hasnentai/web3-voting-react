const giveRightToVote = async (contract, account, chairman) => {
  for (var i = 0; i < account.length; i++) {
    let r = await contract?.methods
      .giveRightToVoter(account[i])
      .send({ from: chairman });

    alert(r.transactionHash);
  }
};

export default giveRightToVote;

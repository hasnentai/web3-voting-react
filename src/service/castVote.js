const castVote = async (contract, user, val) => {
  let index;

  if (val == "BJS") {
    index = 0;
  } else {
    index = 1;
  }
  await contract?.methods
    .vote(index)
    .send({
      from: user,
      gas: 100000,
    })
    .on("transactionHash", (r) => {
      console.log(r);
      getProposal(contract);
    });
};

async function getProposal(contract) {
  let count = {};
  let proposals = await contract?.methods.proposals(0).call();
  count["bjs"] = proposals.voteCount;

  proposals = await contract?.methods.proposals(1).call();
  count["cjs"] = proposals.voteCount;
  return count;
}

export default castVote;
export { getProposal };

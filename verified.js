export async function verified(state, action) {
  const res = await SmartWeave.contracts.readContractState("ZGaL5DOMIYRw9YHZ_NZ2JoIjST1QwhiD6T1jePH381I");
  const verifiedAddresses = res.votes
    .filter(vote => vote.status === 'passed')
    .reduce((a, { value }) => ({ ...a, [value]: true }), {});
  return verifiedAddresses;
}
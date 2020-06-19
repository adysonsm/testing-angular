import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('shold raise voteCahnged evnt when uapted', () => {
    let tototalVotes = null
    component.voteChanged.subscribe(tv =>  tototalVotes = tv);
    component.upVote();
    expect(tototalVotes).toBe(1);
  });
});
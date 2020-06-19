import { VoteComponent } from "./vote.component";

describe("VoteComponent", () => {
  let component : VoteComponent;
  beforeAll(()=> {
    component = new VoteComponent();
  });
  it("should incmremt totalVoltes when upvote", () => {
    //acrt
    component.upVote();
    //asst
    expect(component.totalVotes).toBe(1);
  });
  it("should decrement totalVoltes when upvote", () => {
    //acrt
    component.downVote();
    //asst
    expect(component.totalVotes).toBe(1);
  });
});

function getVoteCount(obj) {
    let votes = obj.upvotes - obj.downvotes

    return votes
    }
    
    console.log(getVoteCount({upvotes:13, downvotes:0}));
    console.log(getVoteCount({upvotes:2, downvotes:33}));
    console.log(getVoteCount({upvotes:132, downvotes:132}));
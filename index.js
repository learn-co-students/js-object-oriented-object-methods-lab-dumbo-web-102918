function BoardMember (name, homeState, training) {
  // body...
  this.name = name;
  this.homeState = homeState;
  this.training = training;
  this.veto =  ()=> {
    // body...
    return "No, I must disagree"
  }
  this.approve =()=>{
    return "You can do that!"
  }
  this.doCharity =()=>("I like to help people.");
  this.releasePressStatement = ()=>("You will see great things from Scuber.")
  this.sayHi = ()=>(`Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`)
}

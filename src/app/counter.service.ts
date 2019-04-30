
export class CounterService{


  countAtoIn=0;
  countIntoA=0
  incrementcountAtoIn(){
    this.countAtoIn++;
    console.log("Active to inactive" +this.countAtoIn);
  }
  incrementcountIntoA(){
    this.countIntoA++;
    console.log("Inactive to active"+this.countIntoA);
  }
}
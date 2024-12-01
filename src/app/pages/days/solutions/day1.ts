import { DailySolution } from './solution.interface';

export class Day1SolutionA implements DailySolution {
  processSolution(inputA: string): string {
    const List1: number[] = [];
    const List2: number[] = [];
    const Rows: string[] = (inputA.split("\n"))
    //const newList: string[] =
    Rows.map(row => {
      let firstSpace = row.indexOf(" ");
      const num1: number = Number(row.slice(0, firstSpace));
      List1.push(num1);
      const num2: number = Number(row.slice(firstSpace));
      List2.push(num2);
    });
    console.log(List1);
    console.log(List2);
    console.log("sorting...")
    List1.sort((a, b) => b - a);
    List2.sort((a, b) => b - a);
    console.log(List1);
    console.log(List2);
    let len = List1.length;
    if (len !== List2.length) {
      console.log("List aren't as long, cannot proceed");
      return("ERROR");
    }
    let result: number = 0;
    for (len; len > 0; len--) {
      console.log(result);
      result += Math.abs(List2[len - 1] - List1[len - 1]);
    }
    const strResult: string = String(result)
    return (strResult);
  }

  pushIfNew(arr: number[], numToTest: number): void {
    if (!arr.some((num) => num == numToTest)) {
      arr.push(numToTest);
    }
  }

  removeAtIndex(arr: number[], indexToRemove: number): void {

  }

  //must test in caller if minLarger == floorNum, if yes, EOF
  getMinLargerThanFloor(arr: number[], floorNum: number): number {
    let minLargerThanFloor : number = floorNum;
    minLargerThanFloor = arr.reduce((acc, curr) => {
      if ( curr > floorNum && acc > curr) {
        return curr;
      }
      return acc;
    }, Infinity );
    return (minLargerThanFloor);
  }
}

export class Day1SolutionB implements DailySolution {
  processSolution(inputB: string): string {
    const List1: number[] = [];
    const List2: number[] = [];
    const Rows: string[] = (inputB.split("\n"))
    //const newList: string[] =
    Rows.map(row => {
      let firstSpace = row.indexOf(" ");
      const num1: number = Number(row.slice(0, firstSpace));
      List1.push(num1);
      const num2: number = Number(row.slice(firstSpace));
      List2.push(num2);
    });
    let result: number = 0;
    for (let i = 0 ; i < List1.length; i++) {
      let occurences: number = 0;
      for (let j = 0 ; j < List2.length; j++) {
        if (List1[i] == List2[j]) {
          occurences++;
        }
      }
      result += occurences * List1[i];
    }
    console.log(result);
    let strResult: string = String(result);
    return (strResult);
  }
}

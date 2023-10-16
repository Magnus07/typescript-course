interface FizzBuzzSolver {
  run(i: number): Array<string>;
}

class BasicTask implements FizzBuzzSolver {
  run(i: number): Array<string> {
    let res = new Array<string>();
    for (let n = 1; n <= i; n++) {
      if (n % 3 === 0 && n % 5 === 0) res.push("FizzBuzz");
      else if (n % 3 === 0) res.push("Fizz");
      else if (n % 5 === 0) res.push("Buzz");
      else res.push(`${n}`);
    }
    return res;
  }
}

class FizzBuzz {
  constructor(private solver: FizzBuzzSolver) {}
  sovle(i: number): void {
    let res = this.solver.run(i);
    console.log(res);
  }
}

new FizzBuzz(new BasicTask()).sovle(15);

//
// EXAMPLES OF EXTENSIONS:
//

class CondensedTask implements FizzBuzzSolver {
  run(i: number): Array<string> {
    let res = new Array<string>();
    for (let n = 1; n <= i; n++) {
      if (n % 3 === 0 || n % 5 === 0) res.push("FizzBuzz");
      else res.push(`${n}`);
    }
    return res;
  }
}

class ToFileWriter implements FizzBuzzSolver {
  constructor(private filename: string) {}
  run(i: number): Array<string> {
    let res = new Array<string>();
    for (let n = 1; n <= i; n++) {
      if (n % 3 === 0 && n % 5 === 0) res.push("FizzBuzz");
      else if (n % 3 === 0) res.push("Fizz");
      else if (n % 5 === 0) res.push("Buzz");
      else res.push(`${n}`);
    }
    this.writeToFile(res);

    return res;
  }

  writeToFile(data: Array<string>) {
    //todo: write to file
  }
}

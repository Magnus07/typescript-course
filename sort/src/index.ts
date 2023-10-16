import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([0, 5, -10, 2]);
numbersCollection.sort();
console.log(numbersCollection.collection);

const charactersCollection = new CharactersCollection("GDFfhkzZzsAdjfke");
charactersCollection.sort();
console.log(charactersCollection.collection);

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(-100);
linkedList.add(0);
linkedList.add(33);
linkedList.sort();
linkedList.print();

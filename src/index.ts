import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumberCollection } from "./NumbersCollection";

const numberCollection = new NumberCollection([-2, 3, 4, 3, 2]);
numberCollection.sort();
const toSortString = new CharactersCollection("Xarbctspwkyr");
toSortString.sort();
const linkedList = new LinkedList();
linkedList.add(-11);
linkedList.add(-2);
linkedList.add(3);
linkedList.add(14);

console.log(numberCollection.data);
console.log(toSortString.data);
linkedList.sort();
linkedList.print();

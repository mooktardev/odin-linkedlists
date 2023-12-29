import LinkedList from "./linkedList.js";

// Test LinkedList class
const List = new LinkedList()

List.prepend("foo");
List.append("bar");
List.append("john");
List.pop();
List.prepend("john");
List.insertAt("doe",2);
List.insertAt("lorem",5);
List.removeAt(3);

console.log(List.size());
console.log(List.head());
console.log(List.at(2));
console.log(List.find("bar"));
console.log(List.contains("foo"));
console.log(List.tail());
console.log(List.toString());

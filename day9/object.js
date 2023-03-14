let object1 = {
  nama: "gara",
  ngobrol: () => "santai",
  berantem() {
    return "berantem yuk";
  },
};

console.log(object1.nama);
console.log(object1.berantem());
object1.email = "gara@gmail.com";
console.log(object1);
console.log(object1["ngobrol"]());

//build in method
let entries = Object.entries(object1);
console.log(entries);

let result = [];
for (let i = 0; i < entries.length; i++) {
  result.push([entries[i][1], entries[i][0]]);
  return result;
}
console.log(result);

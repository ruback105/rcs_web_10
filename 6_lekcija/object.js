const myPc = {
  cpu: "Intel Core i7",
  gpu: "Nvidia RTX 4060 ti",
  ram: {
    capacity: "16GB",
    brand: "Kingston",
    generation: "DDR4",
  },
  storage: "1TB",
  isNice: true,
  cost: 300,
  peripherals: ["mouse", "keyboard", "monitor"],
};

console.log(myPc.peripherals[2]);

console.log(myPc.cpu);
console.log(myPc.gpu);
console.log(myPc.ram);
console.log(myPc.storage);

console.log(myPc["cpu"]);
console.log(myPc["gpu"]);
console.log(myPc["ram"]);
console.log(myPc["storage"]);

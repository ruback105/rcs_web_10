const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Hannah",
  "Ivy",
  "Jack",
  "Katie",
  "Liam",
  "Mia",
  "Noah",
  "Olivia",
  "Parker",
  "Quinn",
  "Ryan",
  "Sophia",
  "Taylor",
];

// names.forEach((name, i) => {
//   console.log(name);
// });

// const numbers = [1, 10, -20, 100, 400, -1000, -10.5, 14241, 1231];
// const newArray = [];

// numbers.forEach((number, i) => {
//   newArray[i] = number + 1;
// });

// console.log(numbers);
// console.log(newArray);

// const newArray = numbers.map((number) => {
//   return number + 1;
// });
// console.log(newArray);

const phones = [
  {
    name: "iPhone 13",
    manufacturer: "Apple",
    price: 799.99,
    camera: {
      mainCamera: "12 MP",
      ultraWideCamera: "12 MP",
      frontCamera: "12 MP",
    },
    screenSize: "6.1 inches",
    storage: "128 GB",
    operatingSystem: "iOS 15",
  },
  {
    name: "Samsung Galaxy S21",
    manufacturer: "Samsung",
    price: 799.0,
    camera: {
      mainCamera: "12 MP",
      ultraWideCamera: "12 MP",
      frontCamera: "10 MP",
    },
    screenSize: "6.2 inches",
    storage: "128 GB",
    operatingSystem: "Android 11",
  },
  {
    name: "Google Pixel 6",
    manufacturer: "Google",
    price: 699.0,
    camera: {
      mainCamera: "50 MP",
      ultraWideCamera: "12 MP",
      frontCamera: "8 MP",
    },
    screenSize: "6.4 inches",
    storage: "128 GB",
    operatingSystem: "Android 12",
  },
  {
    name: "OnePlus 9 Pro",
    manufacturer: "OnePlus",
    price: 969.0,
    camera: {
      mainCamera: "48 MP",
      ultraWideCamera: "50 MP",
      frontCamera: "16 MP",
    },
    screenSize: "6.7 inches",
    storage: "256 GB",
    operatingSystem: "Android 11",
  },
  {
    name: "Xiaomi Mi 11",
    manufacturer: "Xiaomi",
    price: 599.0,
    camera: {
      mainCamera: "108 MP",
      ultraWideCamera: "13 MP",
      frontCamera: "20 MP",
    },
    screenSize: "6.81 inches",
    storage: "128 GB",
    operatingSystem: "Android 11",
  },
  {
    name: "Huawei P50 Pro",
    manufacturer: "Huawei",
    price: 1099.0,
    camera: {
      mainCamera: "50 MP",
      ultraWideCamera: "13 MP",
      frontCamera: "13 MP",
    },
    screenSize: "6.6 inches",
    storage: "256 GB",
    operatingSystem: "Android 11",
  },
  {
    name: "Sony Xperia 1 III",
    manufacturer: "Sony",
    price: 1299.0,
    camera: {
      mainCamera: "12 MP",
      ultraWideCamera: "12 MP",
      frontCamera: "8 MP",
    },
    screenSize: "6.5 inches",
    storage: "256 GB",
    operatingSystem: "Android 11",
  },
  {
    name: "Motorola Edge 20 Pro",
    manufacturer: "Motorola",
    price: 699.0,
    camera: {
      mainCamera: "108 MP",
      ultraWideCamera: "16 MP",
      frontCamera: "32 MP",
    },
    screenSize: "6.7 inches",
    storage: "256 GB",
    operatingSystem: "Android 11",
  },
  {
    name: "LG Wing",
    manufacturer: "LG",
    price: 999.0,
    camera: {
      mainCamera: "64 MP",
      ultraWideCamera: "13 MP",
      frontCamera: "32 MP",
    },
    screenSize: "6.8 inches",
    storage: "256 GB",
    operatingSystem: "Android 10",
  },
  {
    name: "Nokia XR20",
    manufacturer: "Nokia",
    price: 549.0,
    camera: {
      mainCamera: "48 MP",
      ultraWideCamera: "13 MP",
      frontCamera: "8 MP",
    },
    screenSize: "6.67 inches",
    storage: "128 GB",
    operatingSystem: "Android 11",
  },
];

const filter = {
  maxPrice: 800,
  manufacturer: "Apple",
};

const filteredPhones = phones.filter((phone) => {
  return (
    phone.price <= filter.maxPrice && phone.manufacturer === filter.manufacturer
  );
});

const numbers = [1, 2, 3, 4, 5, 6]; // 1, 4, 9, 16, 25, 36

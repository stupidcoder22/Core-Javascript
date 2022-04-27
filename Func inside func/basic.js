const app = () => {
  const inside = () => {
    console.log("hello from inside function");
  };
  inside();
  console.log("outer app");
};

app();

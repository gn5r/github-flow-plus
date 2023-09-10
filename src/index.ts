function hello(value?: string) {
  console.log(value || "hello");
}

hello();
hello("world");

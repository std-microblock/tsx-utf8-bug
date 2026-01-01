(() => {
  // xx.ts
  var func = () => {
  };

  // 拟态物质.ts
  var 拟态物质 = class {
    a = func();
  };

  // main.ts
  console.log(new 拟态物质());
})();

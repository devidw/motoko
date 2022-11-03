import Main "./main";

module {
  public func testConstructor() : async Bool {
    let someObj = await Main.Slang("Some string");
    let out = await someObj.getSlang();
    return out == "Some string";
  };
};

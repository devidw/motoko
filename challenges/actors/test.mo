import Main "./main";

module {
  public func testWithoutShared() : async Bool {
    let some = await Main.Some();
    return (await some.a()) == true;
  };
};

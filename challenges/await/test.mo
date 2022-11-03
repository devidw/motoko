import Main "./main";

module {
  public func testAwait() : async Bool {
    let some = await Main.Some();
    return (await some.b()) == true;
  };
};

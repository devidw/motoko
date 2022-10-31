import Main "./main";

module {
  public func testImmutableStringVariable() : Bool {
    return Main.aString.size() > 0;
  };
};

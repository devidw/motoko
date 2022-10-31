module {
  public object someObject = {
    public let someState = "some string";
    /// Returns the state a given number of times.
    public func someStateRepeater(times : Nat) : Text {
      var out = "";
      var i = 1;
      while (i < times) {
        out := out # someState;
        i += 1;
      };
      return out;
    };
  };
};

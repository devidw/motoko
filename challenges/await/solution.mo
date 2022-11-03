actor class Some() {
  public shared func a() : async Bool {
    return true;
  };
  public shared func b() : async Bool {
    let aValue = await a();
    return aValue;
  };
};

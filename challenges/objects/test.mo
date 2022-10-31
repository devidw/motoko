import Random "mo:base/Random";
import Nat8 "mo:base/Nat8";
import Main "./main";

module {
  public func testObjectState() : Bool {
    return Main.someObject.someState == "some string";
  };

  func repeater(str : Text, times : Nat) : Text {
    var out = "";
    var i = 1;
    while (i < times) {
      out := out # str;
      i += 1;
    };
    return out;
  };

  // public func testObjectStateRepeater() : async Bool {
  //   let entropy = await Random.blob();
  //   let randomNat8 = Random.Finite(entropy).byte();
  //   if (not randomNat8) {
  //     return false;
  //   };
  //   let randomNat = Nat8.toNat(randomNat8);
  //   let someObject = Main.someObject;
  //   return someObject.someStateRepeater(randomNat) == repeater(
  //     someObject.someState,
  //     randomNat,
  //   );
  // };
};

import Text "mo:base/Text";
import Main "./main";

module {
  public func testSingleLineComment() : Bool {
    let comment = Main.singleLineComment();
    return Text.startsWith(
      comment,
      #text("//"),
    );
  };

  public func testMultiLineComment() : Bool {
    let comment = Main.multiLineComment();
    return Text.startsWith(
      comment,
      #text("/*"),
    ) and Text.endsWith(
      comment,
      #text("*/"),
    );
  };

  public func testDocumentationComment() : Bool {
    let comment = Main.documentationComment();
    return Text.startsWith(
      comment,
      #text("///"),
    );
  };
};

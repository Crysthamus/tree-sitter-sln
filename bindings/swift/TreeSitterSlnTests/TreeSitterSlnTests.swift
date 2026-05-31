import XCTest
import SwiftTreeSitter
import TreeSitterSln

final class TreeSitterSlnTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_sln())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Visual Studio Solution grammar")
    }
}

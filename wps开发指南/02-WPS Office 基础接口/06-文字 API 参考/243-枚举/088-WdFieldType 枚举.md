# WdFieldType 枚举

指定 WPS 域。除非另有说明，否则本枚举中介绍的域类型都可以通过**“域”**对话框以交互方式添加到 WPS 文档中。有关特定域代码的详细信息，请参阅 WPS 帮助。

| 名称                        | 值   | 说明                                                                                               |
| ------------------------- | --- | ------------------------------------------------------------------------------------------------ |
| **wdFieldAddin**          | 81  | Add-in 域。不能通过**“域”**对话框提供。用于存储不在用户界面上显示的数据。                                                      |
| **wdFieldAddressBlock**   | 93  | AddressBlock 域。                                                                                  |
| **wdFieldAdvance**        | 84  | Advance 域。                                                                                       |
| **wdFieldAsk**            | 38  | Ask 域。                                                                                           |
| **wdFieldAuthor**         | 17  | Author 域。                                                                                        |
| **wdFieldAutoNum**        | 54  | AutoNum 域。                                                                                       |
| **wdFieldAutoNumLegal**   | 53  | AutoNumLgl 域。                                                                                    |
| **wdFieldAutoNumOutline** | 52  | AutoNumOut 域。                                                                                    |
| **wdFieldAutoText**       | 79  | AutoText 域。                                                                                      |
| **wdFieldAutoTextList**   | 89  | AutoTextList 域。                                                                                  |
| **wdFieldBarCode**        | 63  | BarCode 域。                                                                                       |
| **wdFieldBidiOutline**    | 92  | BidiOutline 域。                                                                                   |
| **wdFieldComments**       | 19  | Comments 域。                                                                                      |
| **wdFieldCompare**        | 80  | Compare 域。                                                                                       |
| **wdFieldCreateDate**     | 21  | CreateDate 域。                                                                                    |
| **wdFieldData**           | 40  | Data 域。                                                                                          |
| **wdFieldDatabase**       | 78  | Database 域。                                                                                      |
| **wdFieldDate**           | 31  | Date 域。                                                                                          |
| **wdFieldDDE**            | 45  | DDE 域。不再通过**“域”**对话框提供，但早期版本的 WPS 所创建文档支持这样做。                                                    |
| **wdFieldDDEAuto**        | 46  | DDEAuto 域。不再通过**“域”**对话框提供，但早期版本的 WPS 所创建文档支持这样做。                                                |
| **wdFieldDocProperty**    | 85  | DocProperty 域。                                                                                   |
| **wdFieldDocVariable**    | 64  | DocVariable 域。                                                                                   |
| **wdFieldEditTime**       | 25  | EditTime 域。                                                                                      |
| **wdFieldEmbed**          | 58  | Embedded 域。                                                                                      |
| **wdFieldEmpty**          | \-1 | Empty 域。充当尚未添加的域内容的占位符。在用户界面中通过按 Ctrl+F9 添加的域是 Empty 域。                                          |
| **wdFieldExpression**     | 34  | \=（公式）域。                                                                                         |
| **wdFieldFileName**       | 29  | FileName 域。                                                                                      |
| **wdFieldFileSize**       | 69  | FileSize 域。                                                                                      |
| **wdFieldFillIn**         | 39  | Fill-In 域。                                                                                       |
| **wdFieldFootnoteRef**    | 5   | FootnoteRef 域。不能通过**“域”**对话框提供， 但可以以编程方式或交互方式插入。                                                 |
| **wdFieldFormCheckBox**   | 71  | FormCheckBox 域。                                                                                  |
| **wdFieldFormDropDown**   | 83  | FormDropDown 域。                                                                                  |
| **wdFieldFormTextInput**  | 70  | FormText 域。                                                                                      |
| **wdFieldFormula**        | 49  | EQ（公式）域。                                                                                         |
| **wdFieldGlossary**       | 47  | Glossary 域。 WPS 不再支持该域。                                                                          |
| **wdFieldGoToButton**     | 50  | GoToButton 域。                                                                                    |
| **wdFieldGreetingLine**   | 94  | GreetingLine 域。                                                                                  |
| **wdFieldHTMLActiveX**    | 91  | HTMLActiveX 域。目前不支持该域。                                                                           |
| **wdFieldHyperlink**      | 88  | Hyperlink 域。                                                                                     |
| **wdFieldIf**             | 7   | If 域。                                                                                            |
| **wdFieldImport**         | 55  | Import 域。不能通过**“域”**对话框添加，但可以以交互方式或通过代码添加。                                                       |
| **wdFieldInclude**        | 36  | Include 域。不能通过**“域”**对话框添加，但可以以交互方式或通过代码添加。                                                      |
| **wdFieldIncludePicture** | 67  | IncludePicture 域。                                                                                |
| **wdFieldIncludeText**    | 68  | IncludeText 域。                                                                                   |
| **wdFieldIndex**          | 8   | Index 域。                                                                                         |
| **wdFieldIndexEntry**     | 4   | XE（索引项）域。                                                                                        |
| **wdFieldInfo**           | 14  | Info 域。                                                                                          |
| **wdFieldKeyWord**        | 18  | Keywords 域。                                                                                      |
| **wdFieldLastSavedBy**    | 20  | LastSavedBy 域。                                                                                   |
| **wdFieldLink**           | 56  | Link 域。                                                                                          |
| **wdFieldListNum**        | 90  | ListNum 域。                                                                                       |
| **wdFieldMacroButton**    | 51  | MacroButton 域。                                                                                   |
| **wdFieldMergeField**     | 59  | MergeField 域。                                                                                    |
| **wdFieldMergeRec**       | 44  | MergeRec 域。                                                                                      |
| **wdFieldMergeSeq**       | 75  | MergeSeq 域。                                                                                      |
| **wdFieldNext**           | 41  | Next 域。                                                                                          |
| **wdFieldNextIf**         | 42  | NextIf 域。                                                                                        |
| **wdFieldNoteRef**        | 72  | NoteRef 域。                                                                                       |
| **wdFieldNumChars**       | 28  | NumChars 域。                                                                                      |
| **wdFieldNumPages**       | 26  | NumPages 域。                                                                                      |
| **wdFieldNumWords**       | 27  | NumWords 域。                                                                                      |
| **wdFieldOCX**            | 87  | OCX 域。不能通过**“域”**对话框添加，但可以在代码中使用   **Shapes** 集合或   **InlineShapes** 集合的 **AddOLEControl** 方法添加。 |
| **wdFieldPage**           | 33  | Page 域。                                                                                          |
| **wdFieldPageRef**        | 37  | PageRef 域。                                                                                       |
| **wdFieldPrint**          | 48  | Print 域。                                                                                         |
| **wdFieldPrintDate**      | 23  | PrintDate 域。                                                                                     |
| **wdFieldPrivate**        | 77  | Private 域。                                                                                       |
| **wdFieldQuote**          | 35  | Quote 域。                                                                                         |
| **wdFieldRef**            | 3   | Ref 域。                                                                                           |
| **wdFieldRefDoc**         | 11  | RD（参考文档）域。                                                                                       |
| **wdFieldRevisionNum**    | 24  | RevNum 域。                                                                                        |
| **wdFieldSaveDate**       | 22  | SaveDate 域。                                                                                      |
| **wdFieldSection**        | 65  | Section 域。                                                                                       |
| **wdFieldSectionPages**   | 66  | SectionPages 域。                                                                                  |
| **wdFieldSequence**       | 12  | Seq（序列）域。                                                                                        |
| **wdFieldSet**            | 6   | Set 域。                                                                                           |
| **wdFieldShape**          | 95  | Shape 域。自动为线条图创建的域。                                                                              |
| **wdFieldSkipIf**         | 43  | SkipIf 域。                                                                                        |
| **wdFieldStyleRef**       | 10  | StyleRef 域。                                                                                      |
| **wdFieldSubject**        | 16  | Subject 域。                                                                                       |
| **wdFieldSubscriber**     | 82  | 仅用于 Macintosh。有关该常量的信息，请参阅包含在 WPS OfficeMacintosh Edition 中的语言参考帮助。                              |
| **wdFieldSymbol**         | 57  | Symbol 域。                                                                                        |
| **wdFieldTemplate**       | 30  | Template 域。                                                                                      |
| **wdFieldTime**           | 32  | Time 域。                                                                                          |
| **wdFieldTitle**          | 15  | Title 域。                                                                                         |
| **wdFieldTOA**            | 73  | TOA（引文目录）域。                                                                                      |
| **wdFieldTOAEntry**       | 74  | TOA（引文目录项）域。                                                                                     |
| **wdFieldTOC**            | 13  | TOC（目录）域。                                                                                        |
| **wdFieldTOCEntry**       | 9   | TOC（目录项）域。                                                                                       |
| **wdFieldUserAddress**    | 62  | UserAddress 域。                                                                                   |
| **wdFieldUserInitials**   | 61  | UserInitials 域。                                                                                  |
| **wdFieldUserName**       | 60  | UserName 域。                                                                                      |
| **wdFieldBibliography**   | 97  | Bibliography 域。                                                                                  |
| **wdFieldCitation**       | 96  | Citation 域。                                                                                      |

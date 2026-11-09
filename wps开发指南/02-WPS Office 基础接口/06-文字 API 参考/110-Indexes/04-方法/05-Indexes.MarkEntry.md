# Indexes.MarkEntry

在指定范围后插入一个 XE（索引项）域。该方法返回一个代表 XE 域的 **Field** 对象。



## 语法

express.**MarkEntry(Range, Entry, EntryAutoText, CrossReference, CrossReferenceAutoText, BookmarkName, Bold, Italic, Reading)**

express   一个代表 **Indexes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | 该项的位置。在 _Range_ 后插入 XE 域。 |
| Entry | 可选 | any | 显示在索引中的文本。要指示次索引项，则要包括主索引项文本和次索引项文本，其间用冒号（:）隔开（例如，“Introduction:The Product”）。 |
| EntryAutoText | 可选 | any | 包含索引、图表目录或目录的文本的“自动图文集”词条名称（忽略 _Entry_）。 |
| CrossReference | 可选 | any | 将出现在索引中的交叉引用（例如，“See Apples”）。 |
| CrossReferenceAutoText | 可选 | any | 包含交叉引用文本的“自动图文集”词条名称（忽略 _CrossReference_）。 |
| BookmarkName | 可选 | any | 用来标记要显示在索引中的页面范围的书签名称。如果省略此参数，将在索引中显示包含 XE 域的页码。 |
| Bold | 可选 | any | 如果该参数值为 **True** ，则为索引中的词条页码设置加粗格式。 |
| Italic | 可选 | any | 如果该参数值为 **True** ，则为索引中的词条页码设置倾斜格式。 |
| Reading | 可选 | any | 如果该参数值为 **True** ，则当按发音排序索引时（仅用于中文）在右侧显示索引项。 |

## 返回值

Field

## 示例


```JavaScript
/*本示例在活动文档的所选内容后插入索引项，然后更新文档中第一条索引。次索引项文本来自所选内容。*/
function test() {
    if (Selection.Type == wdSelectionNormal) {
        let entry = "Introduction:" + Selection.Range.Text
        ActiveDocument.Indexes.MarkEntry(Selection.Range, entry, null, null, null, null, null, true)
        ActiveDocument.Indexes.Item(1).Update()
    }
}
```


```JavaScript
/*本示例在第一个文档的新建段落后插入索引项，并显示该索引字段的域代码的文本，然后更新文档中第一条索引。*/
function test() {
    let indexes = Documents.Item(1).Indexes
    let range = Documents.Item(1).Paragraphs.Add().Range
    range.Text = "example_11"
    let field = indexes.MarkEntry(range, range.Text, null, null, null, null, true, true, true)
    alert(field.Code.Text)
    indexes.Item(1).Update()
}
```

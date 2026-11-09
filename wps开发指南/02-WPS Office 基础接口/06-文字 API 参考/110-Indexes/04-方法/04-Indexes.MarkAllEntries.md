# Indexes.MarkAllEntries

在 **Range** 中文字的所有实例后插入 XE（索引项）域。



## 语法

express.**MarkAllEntries(Range, Entry, EntryAutoText, CrossReference, CrossReferenceAutoText, BookmarkName, Bold, Italic)**

express   一个代表 **Indexes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | 其文字在整篇文档中用 XE 域标记的区域。 |
| Entry | 可选 | any | 要在索引中显示的文字，其形式为：主索引项\[:子索引项\]。 |
| EntryAutoText | 可选 | any | 包含要在索引中显示的文字的“自动图文集”词条（如果指定了该参数，则忽略 _Entry_）。 |
| CrossReference | 可选 | any | 要显示在索引中的交叉引用。 |
| CrossReferenceAutoText | 可选 | any | 包含交叉引用文字的“自动图文集”词条名（如果指定了该参数，则忽略 _CrossReference_）。 |
| BookmarkName | 可选 | any | 标记要在索引中显示的页码范围的书签名。如果省略该参数，则在索引中显示包含 XE 域的页面的页码。 |
| Bold | 可选 | any | 如果该属性值为 **True** ，则将加粗格式添至索引项页码。 |
| Italic | 可选 | any | 如果该属性值为 **True** ，则将倾斜格式添至索引项页码。 |

## 返回值

void

## 示例


```JavaScript
/*本示例在活动文档中以索引项域标记所选文本，然后更新文档中第一条索引。索引中的索引项文本与选定文本匹配。*/
function test() {
    if (Selection.Type == wdSelectionNormal) {
        ActiveDocument.Indexes.MarkAllEntries(Selection.Range, Selection.Range.Text, null, null, null, null, null, true)
        ActiveDocument.Indexes.Item(1).Update()
    }
}
```


```JavaScript
/*本示例在第一个文档中以索引项域标记新建段落的文本，然后更新文档中第一条索引。*/
function test() {
    let indexes = Documents.Item(1).Indexes
    let range = Documents.Item(1).Paragraphs.Add().Range
    range.Text = "example_11"
    indexes.MarkAllEntries(range, range.Text, null, null, null, null, true, true)
    indexes.Item(1).Update()
}
```

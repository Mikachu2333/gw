# TablesOfFigures.MarkEntry

在指定范围后插入一个 TC（“目录”项）域。该方法返回一个代表 TC 域的 **Field** 对象。



## 语法

express.**MarkEntry(Range, Entry, EntryAutoText, TableID, Level)**

express   一个代表 **TablesOfFigures** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | 该项的位置。在 _Range_ 后面插入 TC 域。 |
| Entry | 可选 | any | 在目录或图表目录中出现的文本。要指示次索引项，则要包括主索引项文本和次索引项文本，其间用冒号 (:) 隔开（例如，“Introduction:The Product”）。 |
| EntryAutoText | 可选 | any | 包含索引、图表目录或目录的文本的“自动图文集”词条名称（忽略 _Entry_）。 |
| TableID | 可选 | any | 指图表目录或目录项的单字母标识符（例如，“i”表示“illustration”）。 |
| Level | 可选 | any | 指在目录或图表目录中的项的层次。 |

## 返回值

Field

## 示例


```JavaScript
/*本示例在所选内容后插入一个 TC（目录项）域。*/
function test() {
    ActiveDocument.TablesOfFigures.MarkEntry(Selection.Range)
}
```


```JavaScript
/*本示例在所选内容后插入一个 TC（目录项）域，并显示其域类型是否为 wdFieldTOCEntry。*/
function test() {
    let field = ActiveDocument.TablesOfFigures.MarkEntry(Selection.Range, "图表", null, "B", 2)
    alert(field.Type == wdFieldTOCEntry)
}
```

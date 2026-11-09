# Name.RefersToR1C1

返回或设置指定名称所引用的公式。公式以等号开头，由宏语言和 R1C1-样式引用组成。 **String** 类型，可读写。



## 语法

express.**RefersToR1C1**

express   一个代表 **Name** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例新建一个工作表，并将当前工作簿所有名称的列表插入到新工作表中，名称列表中包括其公式（由 R1C1-样式引用和宏语言组成）。*/
function test() {
    let newSheet = Application.ActiveWorkbook.Worksheets.Add()
    let i = 1
    for (let nm = 1; nm <= Application.ActiveWorkbook.Names.Count; nm++) {
        newSheet.Cells.Item(i, 1).Value2 = Application.ActiveWorkbook.Names.Item(nm).Name
        newSheet.Cells.Item(i, 2).Value2 = "'" + Application.ActiveWorkbook.Names.Item(nm).RefersToR1C1
        i = i + 1
    }
}
```


```JavaScript
/*本示例用宏语言以R1C1-样式表示法设置索引号为1的名称所引用的公式。*/
function test() {
    ActiveWorkbook.Names.Item(1).RefersToR1C1 = "=Sheet1!R6C5:R8C7"
}
```

# Worksheet.Index

返回 **Long** 值，它代表对象在其同类对象所组成的集合内的索引号。



## 语法

express.**Index**

express   一个代表 **Worksheet** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*此示例显示由您所键入的名称指定的工作表的选项卡编号。例如，如果 Sheet4 为活动工作簿中第三个工作表选项卡，此示例就在消息框中显示“3”。*/
function test() {
    let strSheetName = InputBox("Type a sheet name, such as Sheet4.")
    MsgBox(`This sheet is tab number ${Worksheets.Item(strSheetName).Index}`)
}
```


```JavaScript
/*本示例判断如果工作表数量小于等于1，则新增一张工作表，并通知用户其索引号。*/
function test() {
    let newSheet = null
    if (Worksheets.Count <= 1) {
        newSheet = Worksheets.Add()
        alert(newSheet.Index)
    }
}
```

# ListObject.SourceType

返回一个 **XlListObjectSourceType** 值，它代表列表的当前源。



## 语法

express.**SourceType**

express   一个代表 **ListObject** 对象的变量。

## 类型

XlListObjectSourceType

## 示例


```JavaScript
/*本示例显示 XlListObjectSourceType 常量，该常量表示活动工作簿的 Sheet1 上的默认列表的源。*/
function test() {
    let listObj = Application.ActiveWorkbook.Worksheets.Item("Sheet1").ListObjects.Item(1)
    console.log(listObj.SourceType)
}
```


```JavaScript
/*本示例显示活动工作表上包含 C3 单元格的列表的 SourceType 属性是否为 xlSrcRange。*/
function test() {
    let listObj = Application.ActiveSheet.Range("C3").ListObject
    alert(listObj.SourceType == xlSrcRange)
}
```

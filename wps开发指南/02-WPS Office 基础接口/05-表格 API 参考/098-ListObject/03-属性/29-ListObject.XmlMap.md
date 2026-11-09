# ListObject.XmlMap

返回一个 **XmlMap** 对象，该对象表示用于指定表格的架构映射。只读。



## 语法

express.**XmlMap**

express   一个代表 **ListObject** 对象的变量。

## 类型

XmlMap

## 示例


```JavaScript
/*本示例显示工作表 Sheet1 中第一张列表的XmlMap关联绑定的SourceUrl属性值。*/
function test() {
    let listObj = Application.Worksheets.Item("Sheet1").ListObjects.Item(1)
    alert(listObj.XmlMap.DataBinding.SourceUrl)
}
```


```JavaScript
/*本示例显示保存工作簿的同时是否保存活动工作表上包含 A1 单元格的列表的 XML 架构映射的数据源定义。*/
function test() {
    let listObj = Application.ActiveSheet.Range("A1").ListObject
    alert(listObj.XmlMap.SaveDataSourceDefinition)
}
```

# Slicer.Caption

返回或设置指定切片器的标题。可读/写。



## 语法

express.**Caption**

express   一个代表 **Slicer** 对象的变量。

## 类型

string

## 说明


为 **Caption** 属性指定的值显示在切片器的标题中。如果未指定 **Caption** 属性，ET 将使用基础 **[PivotField](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/obj)** 对象的 **[Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/Caption)** 属性值。



## 示例


```JavaScript
/*本示例显示活动工作表上数据透视表的第三个切片器的标题。*/
function test() {
    let slicer = ActiveSheet.Range("I1").PivotTable.Slicers.Item(3)
    alert(slicer.Caption)
}
```


```JavaScript
/*本示例将第一张工作簿上第三个切片器缓存中名为“id”切片器的标题设置为“nameid”。*/
function test() {
    Workbooks.Item(1).SlicerCaches(3).Slicers.Item("id").Caption = "nameid"
}
```

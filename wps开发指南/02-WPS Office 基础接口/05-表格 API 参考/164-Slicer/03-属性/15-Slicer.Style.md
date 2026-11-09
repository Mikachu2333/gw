# Slicer.Style

返回或设置当前应用于指定切片器的样式。可读/写。



## 语法

express.**Style**

express   一个代表 **Slicer** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例显示活动工作表上第一张数据透视表的第三个切片器的样式名称。*/
function test() {
    alert(ActiveSheet.PivotTables(1).Slicers.Item(3).Style.Name)
}
```


```JavaScript
/*本示例设置工作表 Sheet1 上第一张数据透视表的第一个切片器的样式。*/
function test() {
    Worksheets.Item("Sheet1").PivotTables(1).Slicers.Item(1).Style = "SlicerStyleLight3"
}
```

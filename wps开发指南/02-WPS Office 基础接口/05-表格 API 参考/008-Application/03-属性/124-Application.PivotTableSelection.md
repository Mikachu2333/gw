# Application.PivotTableSelection

如果数据透视表使用结构化选择，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**PivotTableSelection**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将启用结构化选择模式，然后对第一张工作表上的第一个数据透视表进行设置，使其只允许选择数据。*/
function test() {
    Application.PivotTableSelection = true
    Worksheets.Item(1).PivotTables(1).SelectionMode = xlDataOnly
}
```


```JavaScript
/*本示例显示数据透视表是否使用结构化选择。*/
function test() {
    alert(Application.PivotTableSelection)
}
```

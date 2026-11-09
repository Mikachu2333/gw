# Legend.Name

返回对象的名称。只读， **String** 类型。



## 语法

express.**Name**

express   一个代表 **Legend** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动文档上第一个内嵌图表的图例的名称。*/
function test() {
    let legend = ActiveDocument.InlineShapes.Item(1).Chart.Legend
    alert(legend.Name)
}
```


```JavaScript
/*本示例在光标处插入第一个文档上第一个形状中图表的图例的名称。*/
function test() {
    let legend = Documents.Item(1).Shapes.Item(1).Chart.Legend
    Selection.TypeText(legend.Name)
}
```

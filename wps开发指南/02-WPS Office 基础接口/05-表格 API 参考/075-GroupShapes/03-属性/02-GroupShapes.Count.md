# GroupShapes.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **GroupShapes** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示 GroupShapes 集合中形状的数量。*/
function test() {
    let shape = Application.Worksheets.Item(1).Shapes.Item(1)
    alert(shape.GroupItems.Count)
}
```

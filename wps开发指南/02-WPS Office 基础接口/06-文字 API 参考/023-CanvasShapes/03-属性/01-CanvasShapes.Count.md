# CanvasShapes.Count

返回一个 **Long** 类型的值，该值代表指定集合中画布图形的数量。只读。



## 语法

express.**Count**

express   一个代表 **CanvasShapes** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个绘图画布中的图形的数量。*/
function test() {
    alert(ActiveDocument.Shapes.Item(1).CanvasItems.Count)
}
```

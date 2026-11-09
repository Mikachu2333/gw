# Shape.SmartArt

返回 SmartArt对象，该对象提供一种处理与指定形状相关联的 SmartArt 的方式。只读。



## 语法

express.**SmartArt**

express   一个代表 **Shape** 对象的变量。

## 类型

SmartArt

## 说明


 **SmartArt** 属性为与形状相关联的 SmartArt 图形进行交互提供了一个入口点。



## 示例


```JavaScript
/*本示例向活动文档中添加 SmartArt 图形，并设置该 SmartArt 图形的配色方案。*/
function test() {
    let shape = ActiveDocument.Shapes.AddSmartArt(Application.SmartArtLayouts.Item(1), 100, 100, 400, 400)
    shape.SmartArt.Color = Application.SmartArtColors(1)
}
```


```JavaScript
/*本示例将活动文档第一个形状（SmartArt 图形）重置为其原始状态。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1)
    shape.SmartArt.Reset()
}
```

# GlowFormat.Transparency

返回指定发光的透明度或者将其透明度设置为介于 0.0（不透明）和 1.0（透明）之间的值。可读/写 **Single** 类型。



## 语法

express.**Transparency**

express   一个代表 **GlowFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个形状发光效果的透明度。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1)
    alert(shape.Glow.Transparency)
}
```


```JavaScript
/*本示例将第一个文档上第一个形状发光效果的透明度设置为0.5。*/
function test() {
    let shape = Documents.Item(1).Shapes.Item(1)
    shape.Glow.Transparency = 0.5
}
```

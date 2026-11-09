# GlowFormat.Radius

返回或设置一个 **Single** 类型的值，该值代表发光效果的辐射长度。可读写。



## 语法

express.**Radius**

express   一个代表 **GlowFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个形状发光效果的辐射长度。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1)
    alert(shape.Glow.Radius)
}
```


```JavaScript
/*本示例将活动文档上第一个形状发光效果的辐射长度设置为20。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1)
    shape.Glow.Radius = 20
}
```

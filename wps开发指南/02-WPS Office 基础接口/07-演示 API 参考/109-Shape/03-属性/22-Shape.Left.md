# Shape.Left

返回或设置一个 **Single** 类型值，该值代表从形状边界框的左边缘到幻灯片左边缘的距离（以磅为单位）。可读/写。



## 语法

express.**Left**

express   一个代表 **Shape** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片上的第一个形状边界框的左边缘到幻灯片左边缘的距离设置为 150 磅。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    shape.Left = 150
}
```


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片上的第二个形状边界框的左边缘到幻灯片左边缘的距离，单位为磅。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(2)
    alert(shape.Left)
}
```

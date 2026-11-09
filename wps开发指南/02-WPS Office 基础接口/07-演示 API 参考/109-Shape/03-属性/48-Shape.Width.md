# Shape.Width

以磅为单位返回或设置指定对象的宽度。



## 语法

express.**Width**

express   一个代表 **Shape** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片上的第二个形状宽度设置为应用程序窗口宽度的一半。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(2)
    shape.Width = Application.Width / 2
}
```


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中的第一个形状的宽度设置为 80 磅。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Item(1).Width = 80
}
```

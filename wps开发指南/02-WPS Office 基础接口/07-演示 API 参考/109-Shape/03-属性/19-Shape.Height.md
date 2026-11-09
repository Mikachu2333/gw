# Shape.Height

以磅为单位返回或设置指定对象的高度。



## 语法

express.**Height**

express   一个代表 **Shape** 对象的变量。

## 类型

number（float 精度）

## 说明


 **Shape** 对象的 **Height** 属性返回或设置指定形状的正面表面的高度。该尺寸不包括阴影或三维效果。



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片上的第二个形状高度设置为应用程序窗口高度的一半。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(2)
    shape.Height = Application.Height / 2
}
```


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中的第一个形状的高度设置为 100 磅。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Item(1).Height = 100
}
```

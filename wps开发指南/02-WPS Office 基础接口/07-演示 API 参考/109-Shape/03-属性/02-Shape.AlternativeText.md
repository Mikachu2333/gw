# Shape.AlternativeText

返回或设置与 Web 演示文稿中的形状关联的可选文字。可读/写。



## 语法

express.**AlternativeText**

express   一个代表 **Shape** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片上的第二个形状相关联的可选文字。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Item(2).AlternativeText = "这是个椭圆"
}
```


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一个形状相关联的可选文字。*/
function test() {
    alert(ActivePresentation.Slides.Item(1).Shapes.Item(1).AlternativeText)
}
```

# Shape.HasTextFrame

返回指定形状是否有文本框。只读。 **MsoTriState** 类型。



## 语法

express.**HasTextFrame**

express   一个代表 **Shape** 对象的变量。

## 类型

MsoTriState

## 说明


 **HasTextFrame** 可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| -------------|---------------------- |
| **msoFalse** | 指定的形状没有文本框架，因而不能包含文本。 |
| **msoTrue** | 指定的形状有文本框架，因此可包含文本。 |



## 示例


```JavaScript
/*本示例从活动演示文稿的第一张幻灯片上所有包含文本框的形状中提取文本，然后将这些形状的名称及其所包含的文本保存在一个数组中。*/
function test() {
    let shpTextArray = []
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    if (shapes.Count > 1) {
        for (let i = 1; i <= shapes.Count; i++) {
            if (shapes.Item(i).HasTextFrame) {
                shpTextArray.push([shapes.Item(i).Name, shapes.Item(i).TextFrame.TextRange.Text])
            }
        }
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿的第一张幻灯片的第一个形状是否有文本框架。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    alert(shape.HasTextFrame == msoTrue)
}
```

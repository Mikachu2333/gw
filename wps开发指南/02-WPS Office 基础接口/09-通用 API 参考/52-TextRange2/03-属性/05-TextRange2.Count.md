# TextRange2.Count

获取一个 **Long** 类型的值，该值指示 **TextRange2** 集合中的项数。只读。



## 语法

express.**Count**

express   一个代表 **TextRange2** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片上第一个形状（文本框）中 TextRange2 集合中的数量。*/
function test() {
    let textRange2 = ActivePresentation.Slides.Item(1).Shapes.Item(1).TextFrame2.TextRange
    alert(textRange2.Count)
}
```

# Shapes.Placeholders

返回一个 **Placeholders** 集合，该集合代表幻灯片上所有占位符的集合。只读。



## 语法

express.**Placeholders**

express   一个代表 **Shapes** 对象的变量。

## 类型

Placeholders

## 说明


 **Placeholders** 集合中的每个占位符都可以包含文本、图表、表格、组织结构图或其他对象。



## 示例


```JavaScript
/*本示例在当前演示文稿中添加一张幻灯片，然后为该幻灯片标题（幻灯片的第一个占位符）和副标题添加文本。*/
function test() {
    let placeholders = ActivePresentation.Slides.Add(1, ppLayoutTitle).Shapes.Placeholders
    placeholders.Item(1).TextFrame.TextRange.Text = "This is the title text"
    placeholders.Item(2).TextFrame.TextRange.Text = "This is subtitle text"
}
```


```JavaScript
/*本示例显示活动演示文稿中第一张幻灯片的占位符数量。*/
function test() {
    alert(ActivePresentation.Slides.Item(1).Shapes.Placeholders.Count)
}
```

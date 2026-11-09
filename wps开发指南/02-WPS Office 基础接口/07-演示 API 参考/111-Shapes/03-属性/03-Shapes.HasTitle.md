# Shapes.HasTitle

返回指定幻灯片上的对象集合是否包含标题占位符。只读。



## 语法

express.**HasTitle**

express   一个代表 **Shapes** 对象的变量。

## 类型

MsoTriState

## 说明


 **HasTitle** 属性的值可以是下列 **MsoTriState** 常量之一：

| **常量** | **说明** |
| ----- | ----- |
| **msoFalse** | 指定幻灯片上的对象集合不包含标题占位符。 |
| **msoTrue** | 指定幻灯片上的对象集合包含标题占位符。 |



## 示例


```JavaScript
/*本示例判断如果活动文档的第二张幻灯片的版式不为ppLayoutBlank且幻灯片不包含标题占位符，则在该幻灯片上添加一个文本框，并在文本框中添加文本。*/
function test() {
    let slide = ActivePresentation.Slides.Item(2)
    if (slide.Layout != ppLayoutBlank && slide.Shapes.HasTitle == msoFalse) {
        let shape = slide.Shapes.AddTextbox(msoTextOrientationHorizontal, 100, 100, 200, 60)
        shape.TextFrame.TextRange.Text = "Restored title"
    }
}
```


```JavaScript
/*本示例显示活动窗口所选幻灯片是否包含标题占位符。*/
function test() {
    alert(ActiveWindow.Selection.SlideRange.Shapes.HasTitle === msoTrue)
}
```

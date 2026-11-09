# Font.Italic

如果将字体或范围设置为倾斜格式，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。



## 语法

express.**Italic**

express   一个代表 **Font** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*以下示例检查第三张幻灯片中的第一个占位符的文本倾斜格式并删除其中存在的倾斜格式。*/
function test() {
    let shape = Application.ActivePresentation.Slides(3).Shapes.Placeholders.Item(1)
    if (shape.TextFrame.TextRange.Font.Italic == msoTrue) {
        alert("there is italic text in placeholder. " + "Click OK to remove.")
        shape.TextFrame.TextRange.Font.Italic = msoFalse
    } else {
        alert("No italic text in the placeholder.")
    }
}
```


```JavaScript
/*本示例将第一张幻灯片的标题中的第一到第五个字符设置为倾斜。*/
function test() {
    let shape = Application.ActivePresentation.Slides(1).Shapes.Title
    shape.TextFrame.TextRange.Characters(1, 5).Font.Italic = msoTrue
}
```

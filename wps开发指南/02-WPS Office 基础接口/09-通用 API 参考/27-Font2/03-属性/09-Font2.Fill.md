# Font2.Fill

获取指定文本使用的字体的填充格式属性。只读。



## 语法

express.**Fill**

express   一个代表 **Font2** 对象的变量。

## 类型

FillFormat

## 示例


```JavaScript
/*本示例运行于表格组件，假定形状已插入活动工作表。以下代码将文本插入形状，并将字体的前景色更改为红色并加粗。然后，在第二个单词后面添加换行符，创建第二个段落，并将段落设为右对齐。*/
function test() {
    let textRange1 = ActiveSheet.Shapes.Item(1).TextFrame2.TextRange
    textRange1.Text = "This is test text."
    let font2 = textRange1.Characters(6, 2).Font
    font2.Fill.ForeColor.RGB = RGB(255, 0, 0)
    font2.Bold = msoTrue
    let textRange2 = textRange1.Runs(3)
    textRange2.InsertBefore("\r")
    let textRange3 = textRange1.Paragraphs(2)
    textRange3.ParagraphFormat.Alignment = msoAlignRight
}
```


```JavaScript
/*本示例运行于表格组件，在活动窗口所选形状中添加文本，并将文本字体的透明度设置为 0.5。*/
function test() {
    let textRange = ActiveWindow.Selection.TextFrame2.TextRange
    textRange.Text = "example"
    let font2 = textRange.Font
    font2.Fill.Transparency = 0.5
}
```

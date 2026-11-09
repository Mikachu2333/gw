# Font.NameComplexScript

返回或设置复杂文种字体名称。用于混合语言文本。可读写。



## 语法

express.**NameComplexScript**

express   一个代表 **Font** 对象的变量。

## 类型

string

## 说明


当指定从右向左的语言设置时，此属性等效于 **“字体”** 对话框（ **“字体”** 选项卡）中的 **“复杂文种字体”** 列表。当指定亚洲语言设置时，此属性等效于 **“字体”** 对话框（ **“字体”** 选项卡）中的 **“中文字体”** 列表。



## 示例


```JavaScript
/*以下示例将第一张幻灯片的标题中复杂文种字体设置为“Times New Roman”。*/
function test() {
    let textRange = ActivePresentation.Slides(1).Shapes.Title.TextFrame.TextRange
    textRange.Font.NameComplexScript = "Times New Roman"
}
```


```JavaScript
/*本示例显示第三张幻灯片上第一个占位符中的复杂文种字体名称。*/
function test() {
    let shape = Application.ActivePresentation.Slides(3).Shapes.Placeholders.Item(1)
    alert(shape.TextFrame.TextRange.Font.NameComplexScript)
}
```

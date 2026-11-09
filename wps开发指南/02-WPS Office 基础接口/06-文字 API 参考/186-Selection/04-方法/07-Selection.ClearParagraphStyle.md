# Selection.ClearParagraphStyle

从所选文本中删除通过段落样式应用的段落格式。



## 语法

express.**ClearParagraphStyle()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


此方法不会删除用户手动应用的段落格式。要删除手动应用的段落格式，请使用 **ClearParagraphDirectFormatting** 方法。要删除所有段落格式（包括样式和手动格式），请使用 **ClearParagraphAllFormatting** 方法。

要删除字符格式，请参阅 **ClearCharacterAllFormatting** 、 **ClearCharacterDirectFormatting** 或 **ClearCharacterStyle** 方法。



## 示例


```JavaScript
/*本示例从所选文本中删除通过段落样式应用的段落格式。*/
function test() {
    Application.Selection.ClearParagraphStyle()
}
```


```JavaScript
/*本示例判断如果所选内容的文字部分类型为wdMainTextStory，则删除通过段落样式应用的段落格式。*/
function test() {
    if (Selection.StoryType == wdMainTextStory) {
        Application.Selection.ClearParagraphStyle()
    }
}
```

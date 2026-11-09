# Range.StoryLength

返回包含指定区域的文字部分中的字符数。 **Long** 类型，只读。



## 语法

express.**StoryLength**

express   一个代表 **Range** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例判断活动文档的页眉部分是否为空，如果页眉部分不为空，则在消息框中显示页眉的内容；如果为空，则 StoryLength 属性返回 1 作为最后的段落标记。*/
function test() {
    let range = ActiveDocument.Sections.Item(1).Headers(wdHeaderFooterPrimary).Range
    if (range.StoryLength > 1) {
        alert(range.Text)
    }
}
```


```JavaScript
/*本示例判断如果活动文档的主文档文章为空，则在关闭文档时不保存所做的更改。*/
function test() {
    if (ActiveDocument.Content.StoryLength == 1) {
        ActiveDocument.Close(wdDoNotSaveChanges)
    }
}
```

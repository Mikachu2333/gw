# Range.NextStoryRange

返回一个 **Range** 对象，该对象代表下一个文章。 **Range** 类型，只读。



## 语法

express.**NextStoryRange**

express   一个代表 **Range** 对象的变量。

## 类型

Range

## 说明


下表列出了依据文章的类型而返回的区域。  

| 文章的类型                                                                                                                                                         | 用 NextStoryRange 方法返回的项目 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| **wdMainTextStory** 、 **wdFootnotesStory** 、 **wdEndnotesStory** 和 **wdCommentsStory**                                                                            | 总是返回 **null**         |
| **wdTextFrameStory**                                                                                                                                          | 下一组链接文本框的文章              |
| **wdEvenPagesHeaderStory** 、 **wdPrimaryHeaderStory** 、 **wdEvenPagesFooterStory** 、 **wdPrimaryFooterStory** 、 **wdFirstPageHeaderStory** 、 **wdFirstPageFooterStory** | 下一节中相同类型的文章              |



## 示例


```JavaScript
/*本示例显示所选区域的下一个文章的内容*/
function test() {
    alert(Selection.Range.NextStoryRange.Text)
}
```


```JavaScript
/*本示例将活动文档的偶数页页眉的下一个文章部分的格式设置为加粗倾斜。*/
function test() {
    let range = ActiveDocument.StoryRanges.Item(wdEvenPagesHeaderStory).NextStoryRange
    range.Bold = msoTrue
    range.Italic = msoTrue
}
```

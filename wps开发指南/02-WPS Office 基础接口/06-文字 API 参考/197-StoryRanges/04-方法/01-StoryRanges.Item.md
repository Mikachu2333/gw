# StoryRanges.Item

将区域或选定内容的单个文字部分作为 **Range** 对象返回。



## 语法

express.**Item(Index)**

express   一个代表 **StoryRanges** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | WdStoryType | 指定的文字部分类型。 |

## 返回值

Range

## 示例


```JavaScript
/*本示例显示活动文档上正文部分的内容。*/
function test() {
    let range = ActiveDocument.StoryRanges.Item(wdMainTextStory)
    alert(range.Text)
}
```


```JavaScript
/*本示例将第一个文档上主页脚部分的内容文本的字体格式设置为加粗。*/
function test() {
    let range = Documents.Item(1).StoryRanges.Item(wdPrimaryFooterStory)
    range.Bold = true
}
```

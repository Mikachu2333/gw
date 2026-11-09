# TextStyleLevels.Item

从指定的 **TextStyleLevels** 集合中返回单个文本样式级别。



## 语法

express.**Item(Level)**

express   一个代表 **TextStyleLevels** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Level | 必选 | number（int 精度） | 集合中要返回的文本样式级别的索引编号。 |

## 返回值

TextStyleLevel

## 示例


```JavaScript
/*本示例显示活动演示文稿的备注母版的正文样式中第一个大纲级别的字体是否加粗。*/
function test() {
    let textStyle = ActivePresentation.NotesMaster.TextStyles.Item(ppBodyStyle)
    let font = textStyle.Levels.Item(1).Font
    alert(font.Bold === msoTrue)
}
```


```JavaScript
/*本示例设置活动演示文稿的备注母版的正文样式中第一个大纲级别的段落的对齐方式为ppAlignCenter。*/
function test() {
    let textStyle = ActivePresentation.NotesMaster.TextStyles.Item(ppBodyStyle)
    let paragraphFormat = textStyle.Levels.Item(1).ParagraphFormat
    paragraphFormat.Alignment = ppAlignCenter
}
```

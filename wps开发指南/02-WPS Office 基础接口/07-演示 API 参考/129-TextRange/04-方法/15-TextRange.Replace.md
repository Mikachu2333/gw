# TextRange.Replace

在文本范围内查找特定文本，用指定的字符串替换查找到的文本，返回代表查找文本的第一处匹配内容的 **TextRange** 对象。如果找不到匹配的内容，则返回 **null** 。



## 语法

express.**Replace(FindWhat, ReplaceWhat, After, MatchCase, WholeWords)**

express   一个代表 **TextRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FindWhat | 必选 | string | 要搜索的文本。 |
| ReplaceWhat | 必选 | string | 用来替换查找到的文本的文本。 |
| After | 可选 | number（int 精度） | 指定文本范围内开始搜索下一处 FindWhat 匹配内容的字符位置。例如，如果要从文本范围的第五个字符开始搜索，则可指定 After 为 4。如果省略此参数，则将文本范围的第一个字符作为搜索的起点。 |
| MatchCase | 可选 | MsoTriState | 确定是否区分大小写。 |
| WholeWords | 可选 | MsoTriState | 确定是否只查找全字匹配的内容。 |

## 返回值

TextRange

## 说明


*MatchCase* 可以是下列 **MsoTriState** 常量之一。

| 常量 | 说明 |
| --------------|--------------------- |
| **msoFalse** | 默认值。不区分字符的大小写。                 |
| **msoTrue** | 区分字符的大小写。               |

*WholeWords* 可以是下列 **MsoTriState** 常量之一。

| 常量 | 说明 |
| --------------|--------------------- |
| **msoFalse** | 默认值。不只查找全字匹配。                   |
| **msoTrue** | 只查找全字匹配。               |



## 示例


```JavaScript
/*本示例在活动演示文稿的第一张幻灯片内的所有形状中，查找每一处为“like”的内容，并将其替换为“NOT LIKE”。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    for (let i = slide.Shapes.Count; i > 0; i--) {
        let textRange = slide.Shapes.Item(i).TextFrame.TextRange
        let oTmpRng = textRange.Replace("like", "NOT LIKE", 0, msoFalse, msoFalse)
        while (oTmpRng != null) {
            textRange = textRange.Characters(oTmpRng.Start + oTmpRng.Length, textRange.Length)
            oTmpRng = textRange.Replace("like", "NOT LIKE", 0, msoFalse, msoFalse)
        }
    }
}
```


```JavaScript
/*本示例在活动演示文稿的第一张幻灯片的第一个形状中查找“test”，并替换为“new test”，然后将字体格式设置为加粗。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    textRange = shape.TextFrame.TextRange.Replace("test", "new test")
    textRange.Font.Bold = msoTrue
}
```

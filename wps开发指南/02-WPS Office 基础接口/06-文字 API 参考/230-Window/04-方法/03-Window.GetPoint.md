# Window.GetPoint

返回指定区域或图形的屏幕坐标。



## 语法

express.**GetPoint(obj)**

express   一个代表 **Window** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| obj | 必选 | Object | **Range** 或 **Shape** 对象。 |

## 返回值

{ScreenPixelsLeft: number, ScreenPixelsTop: number, ScreenPixelsWidth: number, ScreenPixelsHeight: number}，其中 **ScreenPixelsLeft** 为对象的左边界值； **ScreenPixelsTop** 为对象的顶部边界值； **ScreenPixelsWidth** 为对象的宽度； **ScreenPixelsHeight** 为对象的高度值。

## 说明


如果在屏幕上看不到整个区域或图形，则导致出错。

本方法与 VBA 中同名方法的参数与返回值有差异，要返回的信息已放入返回值中，代码应在方法返回时检查返回值。



## 示例


```JavaScript
/*本示例检查当前选定对象并返回其屏幕坐标。*/
function test() {
    let rect = ActiveWindow.GetPoint(Selection.Range)
    alert(`Left = ${rect.ScreenPixelsLeft}\nTop = ${rect.ScreenPixelsTop}\nWidth = ${rect.ScreenPixelsWidth}\nHeight = ${rect.ScreenPixelsHeight}`)
}
```


```JavaScript
/*本示例获取当前文档中的第一个段落并返回其屏幕坐标。*/
function test() {
    let paragraph = ActiveDocument.ActiveWindow.Document.Paragraphs(1)
    let rect = ActiveWindow.GetPoint(paragraph.Range)
    alert(`Paragraph Left = ${rect.ScreenPixelsLeft}\nParagraph Top = ${rect.ScreenPixelsTop}\nParagraph Width = ${rect.ScreenPixelsWidth}\nParagraph Height = ${rect.ScreenPixelsHeight}`)
}
```

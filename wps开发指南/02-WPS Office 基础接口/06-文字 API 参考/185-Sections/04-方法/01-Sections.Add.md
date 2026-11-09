# Sections.Add

返回一个 **Section** 对象，该对象代表添加到文档中的新节。



## 语法

express.**Add(Range, Start)**

express   一个代表 **Sections** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 可选 | any | 要在其之前插入分节符的区域。如果省略该参数，则将分节符插至文档末尾。 |
| Start | 可选 | any | 要添加的分节符的类型。可以是 **WdSectionStart** 常量之一。如果省略该参数，则添加“下一页”类型的分节符。 |

## 返回值

Section

## 示例


```JavaScript
/*本示例在活动文档第三段之前添加一个“下一页”的分节符*/
function test() {
    let range = Application.ActiveDocument.Paragraphs.Item(3).Range
    Application.ActiveDocument.Sections.Add(range)
}
```


```JavaScript
/*本示例在选定内容中添加一个“连续”的分节符*/
function test() {
    let range = Application.Selection.Range
    Application.ActiveDocument.Sections.Add(range, wdSectionContinuous)
}
```


```JavaScript
/*本示例在活动文档的末尾添加一个“下一页”分节符*/
function test() {
    Application.ActiveDocument.Sections.Add()
}
```

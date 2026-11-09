# ListFormat.ApplyNumberDefault

向指定的 **ListFormat** 对象的区域中的段落添加默认的编号格式。



## 语法

express.**ApplyNumberDefault(DefaultListBehavior)**

express   一个代表 **ListFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| DefaultListBehavior | 可选 | any | 设置一个值来指定 WPS 是否使用新的面向网站的格式，以使列表具有更好地显示效果。可以是下列常量之一： **wdWord8ListBehavior** （使用与 WPS 97 兼容的格式） 或 **wdWord9ListBehavior** （使用面向网站的格式）。出于兼容原因，默认常量为 **wdWord8ListBehavior** 。但在新建过程中，要建立缩进式多级项目列表，应当使用 **wdWord9ListBehavior** 来利用改进过的面向网站的格式。 |

## 返回值

void

## 说明


如果段落已设置了编号列表格式，该方法将清除其中已有的编号和格式。



## 示例


```JavaScript
/*本示例为选定内容中的段落进行编号。如果选定内容中已经有编号列表，本示例将清除其中的编号和格式。*/
function test() {
    Selection.Range.ListFormat.ApplyNumberDefault()
}
```


```JavaScript
/*本示例将变量 range 设置为包括活动文档中第三段到第六段的一个区域，然后判断如果该区域内未包含列表格式，则对该区域应用默认的编号。*/
function test() {
    let paragraphs = ActiveDocument.Paragraphs
    let range = ActiveDocument.Range(paragraphs.Item(3).Range.Start, paragraphs.Item(6).Range.End)
    if (range.ListFormat.ListType == wdListNoNumbering) {
        range.ListFormat.ApplyNumberDefault()
    }
}
```

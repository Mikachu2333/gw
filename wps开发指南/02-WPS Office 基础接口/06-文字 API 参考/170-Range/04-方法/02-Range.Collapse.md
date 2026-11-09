# Range.Collapse

将某一区域或所选内容折叠到起始位置或结束位置。折叠之后起始位置和结束位置相同。



## 语法

express.**Collapse(Direction)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Direction | 可选 | any | 折叠某区域或选定内容的方向。可以是下列 **WdCollapseDirection** 常量之一： **wdCollapseEnd** 或 **wdCollapseStart** 。默认值为 **wdCollapseStart** 。 |

## 返回值

void

## 说明


如果用 **[wdCollapseEnd](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdCollapseDirection)** 折叠一个代表完整段落的区域，则该区域将定位于段落结束标记之后（即下段开头）。但是，在该区域折叠后，可以用 **MoveEnd** 方法将区域回移一个字符。



## 示例


```JavaScript
/*本示例使用 Collapse 方法折叠活动文档的第一个段落，然后使用 MoveEnd 方法将范围移回一个字符。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(1).Range
    range.Collapse(wdCollapseEnd)
    range.MoveEnd(wdCharacter, -1)
}
```


```JavaScript
/*本示例将 range 设置为代表活动文档内容区域，折叠 range，然后在文档的最后插入一个 2ｘ2 表格。*/
function test() {
    let range = ActiveDocument.Content
    range.Collapse(wdCollapseEnd)
    ActiveDocument.Tables.Add(range, 2, 2)
}
```

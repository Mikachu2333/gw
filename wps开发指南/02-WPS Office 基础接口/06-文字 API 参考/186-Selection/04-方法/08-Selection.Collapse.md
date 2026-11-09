# Selection.Collapse

将选定内容折叠到起始位置或结束位置。折叠之后起始位置和结束位置相同。



## 语法

express.**Collapse(Direction)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Direction | 可选 | any | 折叠某区域或选定内容的方向。可以是下列 **WdCollapseDirection** 常量之一： **wdCollapseEnd** 或 **wdCollapseStart** 。默认值为 **wdCollapseStart** 。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将选定内容折叠到起始位置。*/
function test() {
    Application.Selection.Collapse(wdCollapseStart)
}
```


```JavaScript
/*本示例将活动文档的第二个段落选中，并将选定内容折叠到结束位置。*/
function test() {
    ActiveDocument.Paragraphs.Item(2).Range.Select()
    Selection.Collapse(wdCollapseEnd)
}
```

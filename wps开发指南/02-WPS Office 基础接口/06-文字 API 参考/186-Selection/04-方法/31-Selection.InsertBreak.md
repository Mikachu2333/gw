# Selection.InsertBreak

插入分页符、分栏符或分节符。



## 语法

express.**InsertBreak(Type)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 可选 | any | 要插入的分隔符的类型。默认值为 **wdPageBreak** 。根据您所选择或安装的语言支持（例如，美国英语），某些 **WdBreakType** 常量可能不可用。 |

## 返回值

void

## 说明


插入分页符或分栏符时，插入的分隔符将替换所选内容。如果您不希望替换所选内容，请在使用 **InsertBreak** 方法之前使用 **[Collapse](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Collapse)** 方法。

插入分节符时，此分隔符将紧靠所选内容之前插入。



## 示例


```JavaScript
/*本示例紧靠在所选内容之前插入连续分节符。*/
function test() {
    Selection.InsertBreak(wdSectionBreakContinuous)
}
```


```JavaScript
/*本示例在活动文档第二个段落的结束位置插入分页符。*/
function test() {
    ActiveDocument.Paragraphs.Item(2).Range.Select()
    Selection.Collapse(wdCollapseEnd)
    Selection.InsertBreak(wdPageBreak)
}
```

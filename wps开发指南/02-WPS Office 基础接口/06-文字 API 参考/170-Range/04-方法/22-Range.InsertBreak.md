# Range.InsertBreak

插入分页符、分栏符或分节符等分隔符。



## 语法

express.**InsertBreak(Type)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 可选 | any | 要插入的分隔符类型。可以是 **[WdBreakType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdBreakType)** 常量之一。如果省略该参数，则默认值为 **wdPageBreak** 。 |

## 返回值

void

## 说明


当插入分页符或分栏符时，范围将被插入的分隔符所替换。如果不希望替换该范围，可在使用 **InsertBreak** 方法之前使用 **Collapse** 方法。在插入分节符时，此分节符紧接在 **Range** 之前插入。

根据您所选择或安装的语言支持（例如，美国英语），部分常量可能不可用。



## 示例


```JavaScript
/*本示例在活动文档第二段之后插入一个分页符。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(2).Range
    range.Collapse(wdCollapseEnd)
    range.InsertBreak(wdPageBreak)
}
```


```JavaScript
/*本示例将所选内容替换为分页符。*/
function test() {
    Selection.Range.InsertBreak()
}
```

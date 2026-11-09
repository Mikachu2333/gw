# Range.InsertCaption

紧接在指定范围之前或之后插入题注。



## 语法

express.**InsertCaption(Label, Title, TitleAutoText, Position, ExcludeLabel)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Label | 必选 | any | 要插入的题注标签。可以是一个 **String** 类型的值，也可以是 **WdCaptionLabelID** 常量之一。如果未定义该标签，则会发生错误。可以使用 **CaptionLabels** 对象的 **Add** 方法定义新的题注标签。 |
| Title | 可选 | any | 要紧接在题注标签之后插入的字符串（如果已指定 _TitleAutoText_，则忽略该参数）。 |
| TitleAutoText | 可选 | any | 要紧接在题注标签之后插入其内容的“自动图文集”词条（将覆盖由 _Title_ 指定的任何文本）。 |
| Position | 可选 | any | 指定在范围的上方还是下方插入题注。可以是 **WdCaptionPosition** 常量之一。 |
| ExcludeLabel | 可选 | any | 如果该参数值为 **True** ，则不包括 _Label_ 参数中定义的文本标签。如果该参数值为 **False** ，则包括指定的标签。 |

## 返回值

void

## 示例


```JavaScript
/*本示例在活动文档的第一个表格下方插入一个题注。*/
function test() {
    ActiveDocument.Tables.Item(1).Range.InsertCaption(wdCaptionTable, null, null, wdCaptionPositionBelow)
}
```


```JavaScript
/*本示例在所选内容的上方插入一个题注。*/
function test() {
    Selection.Range.InsertCaption("example", "\ttest-1", null, wdCaptionPositionAbove, false)
}
```

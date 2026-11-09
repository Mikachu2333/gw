# Selection.InsertCaption

紧靠在指定的所选内容之前或之后插入题注。



## 语法

express.**InsertCaption(Label, Title, TitleAutoText, Position, ExcludeLabel)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Label | 必选 | any | 要插入的题注标签。可以是一个 **String** ，也可以是 **WdCaptionLabelID** 常量之一。如果未定义该标签，则会发生错误。使用 **CaptionLabels** 对象的 **Add** 方法来定义新的题注标签。 |
| Title | 可选 | any | 要紧接在题注标签之后插入的字符串（如果已指定 TitleAutoText，则忽略该参数）。 |
| TitleAutoText | 可选 | any | 要紧接在题注标签之后插入其内容的“自动图文集”词条（将覆盖由 Title 指定的任何文本）。 |
| Position | 可选 | any | 指定题注是插入到所选内容上方还是下方。可以是 **WdCaptionPosition** 常量之一。 |
| ExcludeLabel | 可选 | any | 如果该参数值为 **True** ，则不包括 **Label** 参数中定义的文本标签。如果该参数值为 **False** ，则包括指定的标签。 |

## 返回值

void

## 示例


```JavaScript
/*本示例在插入点插入自定义题注。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    CaptionLabels.Add("Figure")
    Selection.InsertCaption("Figure", ": Sales Results", null, wdCaptionPositionBelow, false)
}
```


```JavaScript
/*本示例在第三个段落的结束位置的下方插入图题注。*/
function test() {
    ActiveDocument.Paragraphs.Item(3).Range.Select()
    Selection.Collapse(wdCollapseEnd)
    Selection.InsertCaption(wdCaptionFigure, null, null, wdCaptionPositionBelow)
}
```

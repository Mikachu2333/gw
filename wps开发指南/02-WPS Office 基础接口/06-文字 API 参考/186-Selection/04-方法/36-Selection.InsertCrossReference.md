# Selection.InsertCrossReference

插入对标题、书签、脚注、尾注或定义了题注标签的项（如公式、图表或表格）的交叉引用。



## 语法

express.**InsertCrossReference(ReferenceType, ReferenceKind, ReferenceItem, InsertAsHyperlink, IncludePosition, SeparateNumbers, SeparatorString)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ReferenceType | 必选 | any | 要插入交叉引用的项目的类型。可以是任意 **WdReferenceType** 或 **WdCaptionLabelID** 常量，也可以是用户定义的题注标签。 |
| ReferenceKind | 必选 | WdReferenceKind | 要包含在交叉引用中的信息。 |
| ReferenceItem | 必选 | any | 如果 ReferenceType 为 **wdRefTypeBookmark** ，则此参数指定一个书签名称。对于所有其他 ReferenceType 值，此参数将指定 **“交叉引用”** 对话框的 **“引用类型”** 框中的项目编号或名称。使用 **GetCrossReferenceItems** 方法可返回能够用于此参数的项目名称的列表。 |
| InsertAsHyperlink | 可选 | any | 如果该参数值为 **True** ，则作为超链接插入交叉引用。 |
| IncludePosition | 可选 | any | 如果该参数值为 **True** ，则根据引用项目相对于交叉引用的位置插入“above”或“below”。 |
| SeparateNumbers | 可选 | any | 如果该参数值为 **True** ，则使用分隔符将数字从关联文本中分离出来。（仅在将 ReferenceType 参数设置为 **wdRefTypeNumberedItem** 并将 ReferenceKind 参数设置为 **wdNumberFullContext** 时才可使用）。 |
| SeparatorString | 可选 | any | 如果 SeparateNumbers 参数设置为 **True** ，则指定字符串用作分隔符。 |

## 返回值

void

## 说明


如果指定 **wdPageNumber** 作为 *ReferenceKind* 的值，则可能需要对文档重新分页才能看到正确的交叉引用信息。



## 示例


```JavaScript
/*本示例插入一个句子，其中包含两个交叉引用：一个引用标题文字，另一个引用标题文字出现的页。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    Selection.InsertBefore("For more information, see ")
    Selection.Collapse(wdCollapseEnd)
    Selection.InsertCrossReference(wdRefTypeHeading, wdContentText, 1)
    Selection.InsertAfter(" on page ")
    Selection.Collapse(wdCollapseEnd)
    Selection.InsertCrossReference(wdRefTypeHeading, wdPageNumber, 1)
    Selection.InsertAfter(".")
}
```


```JavaScript
/*本示例在插入点插入编号项的超链接的交叉引用，并使用分隔符将数字从关联文本中分离。*/
function test() {
    Selection.InsertCrossReference(wdRefTypeNumberedItem, wdNumberFullContext, 1, true, null, true)
}
```

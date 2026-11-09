# Document.GetCrossReferenceItems

返回一个项目数组，根据指定的交叉引用类型可对该数组中的项目进行交叉引用。



## 语法

express.**GetCrossReferenceItems(ReferenceType)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ReferenceType | 必选 | any | 要在其中插入交叉引用的项目类型。可以是任何 **[WdReferenceType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdReferenceType)** 常量。 |

## 返回值

any

## 说明


该方法返回的数组与 **“交叉引用”** 对话框的 **“引用哪一个编号项”** 框中所列的项目相对应。该方法返回的值可以用作 **Range** 或 **Selection** 对象的 **InsertCrossReference** 方法的 *ReferenceWhich* 参数的值。



## 示例


```JavaScript
/*本示例显示活动文档中第一个可以进行交叉引用的书签名称。*/
function test() {
    if (ActiveDocument.Bookmarks.Count >= 1) {
        let bookmarks = ActiveDocument.GetCrossReferenceItems(wdRefTypeBookmark)
        alert(bookmarks[0])
    }
}
```


```JavaScript
/*本示例首先用 GetCrossReferenceItems 方法检索可以进行交叉引用的标题的列表，然后在包含标题“Introduction”页中插入一条交叉引用。*/
function test() {
    let headings = ActiveDocument.GetCrossReferenceItems(wdRefTypeHeading)
    for (let i = 0; i < headings.length; i++) {
        if (headings[i].toLowerCase().indexOf("introduction") != -1) {
            Selection.InsertCrossReference(wdRefTypeHeading, wdPageNumber, i + 1)
            Selection.InsertParagraphAfter()
        }
    }
}
```

# ListFormat.CanContinuePreviousList

返回一个 **WdContinue** 常量（ **wdContinueDisabled** 、 **wdResetList** 或 **wdContinueList** ），该常量表明是否接续上一列表格式。



## 语法

express.**CanContinuePreviousList(ListTemplate)**

express   一个代表 **ListFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ListTemplate | 必选 | ListTemplate | 一个应用于文档中先前段落的列表模板。 |

## 返回值

WdContinue

## 说明


本方法返回指定列表格式的 **“继续前一列表”** 和 **“重新开始编号”** 选项状态，这些选项位于 **“项目符号和编号”** 对话框中。设置 **ApplyListTemplate** 方法的 _ContinuePreviousList_ 参数可更改这些选项的设置。



## 示例


```JavaScript
/*本示例判断如果所选内容前面的列表的编号有效，则应用当前的列表模板，其编号接续先前列表的编号。所选内容必须位于第二个列表中，否则导致出错。*/
function test() {
    let listFormat = Selection.Range.ListFormat
    let intContinue = listFormat.CanContinuePreviousList(listFormat.ListTemplate)
    if (intContinue != wdContinueDisabled) {
        listFormat.ApplyListTemplate(listFormat.ListTemplate, true)
    }
}
```


```JavaScript
/*此示例判断活动文档上第三个段落是否可以继续使用上一列表中的格式，并通知用户。*/
function test() {
    let listFormat = ActiveDocument.Paragraphs.Item(3).Range.ListFormat
    let intContinue = listFormat.CanContinuePreviousList(listFormat.ListTemplate)
    switch (intContinue) {
        case wdContinueDisabled:
            alert("不能继续使用上一列表中的格式")
            break
        case wdContinueList:
            alert("可以继续使用上一列表中的格式")
            break
        case wdResetList:
            alert("可以重新开始编号。")
            break
    }
}
```

# Selection.GoToPrevious

返回一个 **Range** 对象，该对象引用上一项目或者由参数 *What* 指定的位置的起始位置。如果对 **Selection** 对象采用此方法， **GoToPrevious** 将选定内容移动到所指定的项目处。



## 语法

express.**GoToPrevious(What)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| What | 必选 | WdGoToItem | 指定的区域或选定内容将被移动到的项。 |

## 返回值

Range

## 示例


```JavaScript
/*本示例将光标移动到所选内容的页面的起始位置。*/
function test() {
    Selection.GoToPrevious(wdGoToPage)
}
```


```JavaScript
/*本示例使光标移动到所选内容的标题的起始位置，并在插入点插入文本。*/
function test() {
    let range = Selection.GoToPrevious(wdGoToHeading)
    range.Text = "range"
}
```

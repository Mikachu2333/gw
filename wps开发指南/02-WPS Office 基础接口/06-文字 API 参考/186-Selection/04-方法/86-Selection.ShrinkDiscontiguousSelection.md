# Selection.ShrinkDiscontiguousSelection

当所选内容包括多个不连续的所选内容时，取消全部选择，只保留最近选择的文本。



## 语法

express.**ShrinkDiscontiguousSelection()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例取消全部选择，只保留最近选择的文本，并对所选内容中剩下的文本应用加粗和小写格式。假定文档中有多处所选内容。*/
function test() {
    Selection.ShrinkDiscontiguousSelection()
    Selection.Font.Bold = msoTrue
    Selection.Font.SmallCaps = msoTrue
}
```


```JavaScript
/*本示例取消第一个窗口的全部选择，只保留最近选择的文本，并判断如果所选内容中含有文本“WPS”，则对所选内容应用倾斜格式。*/
function test() {
    let text = "WPS"
    let selection = Windows.Item(1).Selection
    selection.ShrinkDiscontiguousSelection()
    if (selection.Range.Text.match(text)) {
        selection.Font.Italic = msoTrue
    }
}
```

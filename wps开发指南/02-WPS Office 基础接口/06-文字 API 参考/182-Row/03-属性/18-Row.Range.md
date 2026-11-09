# Row.Range

返回一个 **Range** 对象，该对象代表指定表格行内包含的文档部分



## 语法

express.**Range**

express   一个代表 **Row** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例复制活动文档的第一个表格的第一行的内容。*/
function test() {
    if (ActiveDocument.Tables.Count >= 1) {
        ActiveDocument.Tables.Item(1).Rows.Item(1).Range.Copy()
    }
}
```


```JavaScript
/*本示例显示选中表格的第一行的内容。*/
function test() {
    alert(Selection.Rows.Item(1).Range.Text)
}
```

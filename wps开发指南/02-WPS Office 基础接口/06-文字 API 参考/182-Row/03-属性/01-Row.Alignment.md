# Row.Alignment

返回或设置一个 **WdRowAlignment** 常量，该常量代表指定行的对齐方式。可读写。



## 语法

express.**Alignment**

express   一个代表 **Row** 对象的变量。

## 类型

WdRowAlignment

## 示例


```JavaScript
/*本示例使活动文档的第一个表格中第一行的所有单元格居中。*/
function test() {
    ActiveDocument.Tables.Item(1).Rows.Item(1).Alignment = wdAlignRowCenter
}
```


```JavaScript
/*本示例显示所选内容中第一行的对齐方式。*/
function test() {
    switch (Selection.Rows.Item(1).Alignment){
        case wdAlignRowLeft:
            alert("对齐方式为左对齐。")
            break
        case wdAlignRowCenter:
            alert("对齐方式为居中。")
            break
        case wdAlignRowRight:
            alert("对齐方式为右对齐。")
            break
    }
}
```

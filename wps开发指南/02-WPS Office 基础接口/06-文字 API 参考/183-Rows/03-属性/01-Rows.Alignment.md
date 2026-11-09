# Rows.Alignment

返回或设置一个 **WdRowAlignment** 常量，该常量代表指定行的对齐方式。可读写。



## 语法

express.**Alignment**

express   一个代表 **Rows** 对象的变量。

## 类型

WdRowAlignment

## 示例


```JavaScript
/*本示例将活动文档中第一张表格的所有行都设置为居中对齐。*/
function test() {
    ActiveDocument.Tables.Item(1).Rows.Alignment = wdAlignRowCenter
}
```


```JavaScript
/*本示例显示所选内容所有表格行的对齐方式。*/
function test() {
    switch (Selection.Rows.Alignment) {
        case wdAlignRowLeft:
            alert("左对齐")
            break
        case wdAlignRowCenter:
            alert("居中")
            break
        case wdAlignRowRight:
            alert("右对齐")
            break
    }
}
```

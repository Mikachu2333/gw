# Table.AutoFitBehavior

确定 WPS 如何使用自动调整功能来调整表格的大小。



## 语法

express.**AutoFitBehavior(Behavior)**

express   一个代表 **Table** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Behavior | 必选 | WdAutoFitBehavior | 指定 WPS 如何使用“自动调整”功能重新调整指定表格的大小。 |

## 返回值

void

## 说明


WPS 可以根据表格单元格的内容或文档窗口的宽度重新调整表格的大小。也可使用本方法来关闭“自动调整”功能。这样，表格的大小是固定值，而不随单元格内容或窗口宽度而改变。

将 **AutoFitBehavior** 属性设置为 **wdAutoFitContent** 或 **wdAutoFitWindow** 会将 **AllowAutoFit** 属性设置为 **True** （如果该属性当前为 **False** ）。同样，将 **AutoFitBehavior** 属性设置为 **wdAutoFitFixed** 会将 **AllowAutoFit** 属性设置为 **False** （如果该属性当前为 **True** ）。



## 示例


```JavaScript
/*本示例设定活动文档中第一张表格的“自动调整”操作，使其可根据文档窗口的宽度自动调整大小。*/
function test() {
    ActiveDocument.Tables.Item(1).AutoFitBehavior(wdAutoFitWindow)
}
```


```JavaScript
/*本示例关闭选中的第一张表格的“自动调整”功能，使其大小是固定值，不随单元格内容或窗口宽度而改变。*/
function test() {
    Selection.Tables.Item(1).AutoFitBehavior(wdAutoFitFixed)
}
```

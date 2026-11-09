# Rows.Height

返回或设置表格中指定的行的高度。Single 类型，可读写。



## 语法

express.**Height**

express   一个代表 **Rows** 对象的变量。

## 类型

number（float 精度）

## 说明


如果指定行的 **HeightRule** 属性为 **wdRowHeightAuto** ，则 **Height** 返回 **wdUndefined** ；设置 **Height** 属性会将 **HeightRule** 设置为 **wdRowHeightAtLeast** 。



## 示例


```JavaScript
/*本示例将活动文档第一张表格每行的高度设置为 20 磅。*/
function test() {
    ActiveDocument.Tables.Item(1).Rows.Height = 20
}
```


```JavaScript
/*本示例显示活动文档第一张表格每行的高度。*/
function test() {
    alert(ActiveDocument.Tables.Item(1).Rows.Height)
}
```

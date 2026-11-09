# Row.NestingLevel

返回指定表格行的嵌套层。只读 **Long** 类型。



## 语法

express.**NestingLevel**

express   一个代表 **Row** 对象的变量。

## 类型

number（int4 精度）

## 说明


最外围表格的嵌套层为 1。每一个相连嵌套表格的嵌套层比其前面表格的嵌套层高 1。



## 示例


```JavaScript
/*本示例显示活动文档第一个表格的第一行的嵌套层。*/
function test() {
    alert(ActiveDocument.Tables.Item(1).Rows.Item(1).NestingLevel)
}
```


```JavaScript
/*本示例显示所选表格的第一行的嵌套层。*/
function test() {
    alert(Selection.Rows.Item(1).NestingLevel)
}
```

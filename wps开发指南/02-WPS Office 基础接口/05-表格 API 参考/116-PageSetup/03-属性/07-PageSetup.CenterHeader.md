# PageSetup.CenterHeader

居中对齐 **PageSetup** 对象中的页眉信息。可读/写 **String** 类型。



## 语法

express.**CenterHeader**

express   一个代表 **PageSetup** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置工作表 Sheet2 居中对齐的页眉信息为“第2页”。*/
function test() {
    Application.Worksheets.Item("Sheet2").PageSetup.CenterHeader = "第2页"
}
```


```JavaScript
/*此示例显示当前工作表居中对齐的页眉信息。*/
function test() {
    alert(ActiveSheet.PageSetup.CenterHeader)
}
```

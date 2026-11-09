# PageSetup.LeftHeader

返回或设置工作簿或节的左页眉上的文本信息。



## 语法

express.**LeftHeader**

express   一个代表 **PageSetup** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置工作表 Sheet3 左页眉信息为“第1页”。*/
function test() {
    Application.Worksheets.Item("Sheet3").PageSetup.LeftHeader = "第1页"
}
```


```JavaScript
/*此示例显示当前工作表左页眉上的信息。*/
function test() {
    alert(ActiveSheet.PageSetup.LeftHeader)
}
```

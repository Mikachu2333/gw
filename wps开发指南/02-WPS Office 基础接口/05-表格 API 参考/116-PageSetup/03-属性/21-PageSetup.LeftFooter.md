# PageSetup.LeftFooter

返回或设置工作簿或节的左页脚上的文本信息。



## 语法

express.**LeftFooter**

express   一个代表 **PageSetup** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置工作表 Sheet2 左页脚信息为“第3页”。*/
function test() {
    Application.Worksheets.Item("Sheet2").PageSetup.LeftFooter = "第3页"
}
```


```JavaScript
/*此示例显示当前工作表左页脚上的信息。*/
function test() {
    alert(ActiveSheet.PageSetup.LeftFooter)
}
```

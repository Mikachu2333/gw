# PageSetup.RightFooter

返回或设置页脚的右边部分内容。可读/写 **String** 类型。



## 语法

express.**RightFooter**

express   一个代表 **PageSetup** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置工作表 Sheet3 右页脚信息为“第3页”。*/
function test() {
    Application.Worksheets.Item("Sheet3").PageSetup.RightFooter = "第3页"
}
```


```JavaScript
/*此示例显示当前工作表右页脚上的信息。*/
function test() {
    alert(ActiveSheet.PageSetup.RightFooter)
}
```

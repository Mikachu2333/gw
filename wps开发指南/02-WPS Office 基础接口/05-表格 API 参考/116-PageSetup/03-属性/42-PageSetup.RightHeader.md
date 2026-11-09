# PageSetup.RightHeader

返回或设置页眉的右边部分内容。可读/写 **String** 类型。



## 语法

express.**RightHeader**

express   一个代表 **PageSetup** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例在每页的右上角打印文件名。*/
function test() {
    Application.Worksheets.Item("Sheet1").PageSetup.RightHeader = "&F"
}
```


```JavaScript
/*此示例显示当前工作表右页眉上的信息。*/
function test() {
    alert(ActiveSheet.PageSetup.RightHeader)
}
```

# PageSetup.CenterVertically

如果在页面的垂直居中位置打印指定工作表，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**CenterVertically**

express   一个代表 **PageSetup** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将工作表 Sheet1 设为垂直居中打印。*/
function test() {
    Application.Worksheets.Item("Sheet1").PageSetup.CenterVertically = true
}
```


```JavaScript
/*此示例判断是否在页面的垂直居中位置打印活动工作表，并将结果通知用户。*/
function test() {
    if (ActiveSheet.PageSetup.CenterVertically) {
        alert("在页面的垂直居中位置打印活动工作表")
    } else {
        alert("不在页面的垂直居中位置打印活动工作表")
    }
}
```

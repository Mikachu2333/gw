# PageSetup.Draft

如果打印工作表时不打印其中的图形，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**Draft**

express   一个代表 **PageSetup** 对象的变量。

## 类型

boolean

## 说明


将该属性设置为 **True** 可加快打印速度（但是不打印其中的图形）。



## 示例


```JavaScript
/*本示例关闭对 Sheet1 中图形的打印。*/
function test() {
    Application.Worksheets.Item("Sheet1").PageSetup.Draft = true
}
```


```JavaScript
/*此示例判断是否关闭对活动工作表中图形的打印，并将结果通知用户。*/
function test() {
    if (ActiveSheet.PageSetup.Draft) {
        alert("关闭对工作表中图形的打印")
    } else {
        alert("开启对工作表中图形的打印")
    }
}
```

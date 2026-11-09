# PageSetup.BlackAndWhite

如果指定文档中的元素以黑白方式打印，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**BlackAndWhite**

express   一个代表 **PageSetup** 对象的变量。

## 类型

boolean

## 说明


该属性仅适用于工作表页面。



## 示例


```JavaScript
/*本示例设置工作表 Sheet1 以黑白方式打印。*/
function test() {
    Application.Worksheets.Item("Sheet1").PageSetup.BlackAndWhite = true
}
```


```JavaScript
/*此示例判断活动工作表中的元素是否以黑白方式打印，并将结果通知用户。*/
function test() {
    if (ActiveSheet.PageSetup.BlackAndWhite) {
        alert("以黑白方式打印")
    } else {
        alert("不以黑白方式打印")
    }
}
```

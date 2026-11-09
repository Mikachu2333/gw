# PageSetup.FirstPageNumber

返回或设置打印指定工作表时第一页的页号。如果设为 **xlAutomatic** ，则 ET 采用第一页的页号。默认值为 **xlAutomatic** 。 **Long** 类型，可读写。



## 语法

express.**FirstPageNumber**

express   一个代表 **PageSetup** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将 Sheet1 打印时的第一页的页号设置为 100。*/
function test() {
    Application.Worksheets.Item("Sheet1").PageSetup.FirstPageNumber = 100
}
```


```JavaScript
/*本示例显示活动工作表打印时的第一页的页号。*/
function test() {
    alert(ActiveSheet.PageSetup.FirstPageNumber)
}
```

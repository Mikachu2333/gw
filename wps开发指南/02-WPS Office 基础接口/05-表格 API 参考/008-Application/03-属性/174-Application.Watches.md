# Application.Watches

返回一个 **[Watches](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Watches/obj)** 对象，该对象表示在重新计算工作表时跟踪的区域。



## 语法

express.**Watches**

express   一个代表 **Application** 对象的变量。

## 类型

Watches

## 示例


```JavaScript
/*本示例在单元格 A3 中创建一个求和公式，然后将该单元格添加到“监视窗口”中。*/
function test() {
    Application.Range("A1").Formula = 1
    Application.Range("A2").Formula = 2
    Application.Range("A3").Formula = "=Sum(A1:A2)"
    Application.Range("A3").Select()
    Application.Watches.Add(ActiveCell)
}
```


```JavaScript
/*本示例显示“监视”窗口中单元格的数量。*/
function test() {
    alert(Application.Watches.Count)
}
```

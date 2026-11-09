# Range.Activate

激活单个单元格，该单元格必须处于当前选定区域内。要选择单元格区域，请使用 **[Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Select)** 方法。



## 语法

express.**Activate()**

express   一个代表 **Range** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例选定工作表 Sheet1 上的单元格区域 A1:C3，并激活单元格 B2。*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    Application.Range("A1:C3").Select()
    Application.Range("B2").Activate()
}
```


```JavaScript
/*本示例激活单元格 C1，并显示活动单元格的值*/
function test() {
    Application.Range("C1").Activate()
    alert(ActiveCell.Value2)
}
```

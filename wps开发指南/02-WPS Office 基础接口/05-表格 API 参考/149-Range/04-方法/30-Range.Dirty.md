# Range.Dirty

下一次重新计算发生时指定要重新计算的区域。



## 语法

express.**Dirty()**

express   一个代表 **Range** 对象的变量。

## 返回值

void

## 说明


对于 ET 知道需要进行重新计算的单元格， **[Calculate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Calculate)** 方法强制重新计算指定的区域。

如果应用程序处于手动计算模式，请使用 **Dirty** 方法使 ET 识别要重新计算的单元格。如果应用程序处于自动计算模式，请使用 **Dirty** 方法使 ET 执行重新计算。



## 示例


```JavaScript
/*本示例在单元格 A3 中输入一个公式，保存更改，并重新计算单元格 A3。*/
function test() {
    MsgBox("Two values and a formula will be entered.")
    Range("A1").Value(undefined, 1)
    Range("A2").Value(undefined, 2)
    Range("A3").Formula = "=A1+A2"
    // Save the changes made to the worksheet.
    Application.DisplayAlerts = false
    Application.Save()
    MsgBox("Changes saved.")
    // Force a recalculation of range A3.
    Application.Range("A3").Dirty()
    MsgBox("Try to close the file without saving and a dialog box will appear.")
}
```


```JavaScript
/*本示例重新计算 A1:C3 单元格*/
function test() {
    Range("A1:C3").Dirty()
}
```

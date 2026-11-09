# PrintOptions.ActivePrinter

返回当前打印机的名称。只读。



## 语法

express.**ActivePrinter**

express   一个代表 **PrintOptions** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动演示文稿当前打印机的名称。*/
function test() {
    let printOptions = ActivePresentation.PrintOptions
    alert(`The name of the active printer is ${printOptions.ActivePrinter}`)
}
```


```JavaScript
/*本示例判断如果第一篇演示文稿的打印机的名称为“导出为WPS PDF”，则打印该演示文稿。*/
function test() {
    let presentation = Presentations.Item(1)
    let printOptions = presentation.PrintOptions
    if (printOptions.ActivePrinter == "导出为WPS PDF") {
        presentation.PrintOut()
    }
}
```

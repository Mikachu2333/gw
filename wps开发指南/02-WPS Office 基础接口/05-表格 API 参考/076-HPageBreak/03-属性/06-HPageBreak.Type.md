# HPageBreak.Type

返回或设置一个 **XlPageBreak** 值，它代表分页符类型。



## 语法

express.**Type**

express   一个代表 **HPageBreak** 对象的变量。

## 类型

XlPageBreak

## 示例


```JavaScript
/*本示例显示第一个工作表的第二个水平分页符是否为自动添加分页符。*/
function test() {
    let hPageBreak = Application.Worksheets.Item(1).HPageBreaks.Item(2)
    alert(hPageBreak.Type  == xlPageBreakAutomatic)
}
```


```JavaScript
/*本示例判断如果工作表Sheet1的第三个水平分页符是手动插入分页符，则删除该水平分页符。*/
function test() {
    let hPageBreak = Application.Worksheets.Item("Sheet1").HPageBreaks.Item(3)
    if (hPageBreak.Type == xlPageBreakManual) {
        hPageBreak.Delete()
        alert("已删除该手动插入的水平分页符")
    } else {
        alert("不是手动插入的水平分页符")
    }
}
```

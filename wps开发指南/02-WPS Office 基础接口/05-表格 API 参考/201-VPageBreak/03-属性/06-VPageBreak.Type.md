# VPageBreak.Type

返回或设置表示分页符类型的 **[XlPageBreak](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPageBreak)** 值。



## 语法

express.**Type**

express   一个代表 **VPageBreak** 对象的变量。

## 类型

XlPageBreak

## 示例


```JavaScript
/*本示例显示第一个工作表的第一个垂直分页符是否为手动插入分页符。*/
function test() {
    let type = Application.Worksheets.Item(1).VPageBreaks.Item(1).Type
    alert(type  == xlPageBreakManual)
}
```


```JavaScript
/*本示例显示活动工作表中自动插入的垂直分页符的数量。*/
function test() {
    let count = 0
    let vPageBreaks = ActiveSheet.VPageBreaks
    for (let i = 1; i <= vPageBreaks.Count; i++) {
        if (vPageBreaks.Item(i).Type == xlPageBreakAutomatic) {
            count++
        }
    }
    alert(`自动插入的垂直分页符的数量是 ${count}`)
}
```

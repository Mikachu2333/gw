# VPageBreak.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **VPageBreak** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除第一个工作表中第二个垂直分页符。*/
function test() {
    let vPageBreak = Application.Worksheets.Item(1).VPageBreaks.Item(2)
    vPageBreak.Delete()
}
```


```JavaScript
/*本示例删除活动工作表的所有垂直分页符*/
function test() {
    let vPagebreaks = ActiveSheet.VPageBreaks
    for (let i = 1; i <= vPagebreaks.Count; i++) {
        vPagebreaks.Item(i).Delete()
    }
}
```

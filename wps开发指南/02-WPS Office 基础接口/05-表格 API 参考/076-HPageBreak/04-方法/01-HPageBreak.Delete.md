# HPageBreak.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **HPageBreak** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除第一个工作表的第一个水平分页符*/
function test() {
    Application.Worksheets.Item(1).HPageBreaks.Item(1).Delete()
}
```


```JavaScript
/*本示例删除第一个工作表的所有水平分页符*/
function test() {
    let hbreaks = Application.Worksheets.Item(1).HPageBreaks
    for (let i = 1; i <= hbreaks.Count; i++) {
        hbreaks.Item(i).Delete()
    }
}
```

# Hyperlink.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **Hyperlink** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例取消单元格A1中的第一项超链接*/
function test() {
    let hl = Range("A1").Hyperlinks.Item(1)
    hl.Delete()
}
```


```JavaScript
/*本示例取消工作表Sheet1中的第二项超链接*/
function test() {
    let hl = Application.Worksheets.Item("Sheet1").Hyperlinks.Item(2)
    hl.Delete()
}
```

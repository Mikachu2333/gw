# Hyperlinks.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **Hyperlinks** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例取消A1:C10区域的所有超链接*/
function test() {
    Range("A1:C10").Hyperlinks.Delete()
}
```


```JavaScript
/*本示例取消工作表Sheet1中所有超链接。*/
function test() {
    Application.Worksheets.Item("Sheet1").Hyperlinks.Delete()
}
```

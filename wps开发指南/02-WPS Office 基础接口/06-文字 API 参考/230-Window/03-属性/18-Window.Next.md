# Window.Next

返回打开的文档窗口集合中的下一个文档窗口。只读。



## 语法

express.**Next**

express   一个代表 **Window** 对象的变量。

## 类型

Window

## 示例


```JavaScript
/*本示例激活下一个窗口。*/
function test() {
    if (Windows.Count > 1) {
        ActiveDocument.ActiveWindow.Next.Activate()
    }
}
```


```JavaScript
/*本示例显示下一个窗口的标题。*/
function test() {
    if (Windows.Count > 1) {
        alert(ActiveWindow.Next.Caption)
    }
}
```

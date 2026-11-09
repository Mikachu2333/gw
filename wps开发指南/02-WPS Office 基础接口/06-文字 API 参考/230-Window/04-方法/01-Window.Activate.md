# Window.Activate

激活指定窗口。



## 语法

express.**Activate()**

express   一个代表 **Window** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例激活 Windows 集合中的下一个窗口。*/
function test() {
    //Two or more documents must be open for this statement to execute.
    ActiveDocument.ActiveWindow.Next.Activate()
}
```


```JavaScript
/*本示例激活 Windows 集合中的第三个窗口。*/
function test() {
    Windows.Item(3).Activate()
}
```

# DocumentWindow.Activate

激活指定的对象



## 语法

express.**Activate()**

express   一个代表 **DocumentWindow** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将激活第一个文档窗口。*/
function test() {
    Application.Windows.Item(1).Activate()
}
```


```JavaScript
/*本示例激活活动演示文稿上第一个窗口并显示标题。*/
function test() {
    ActivePresentation.Windows.Item(1).Activate()
    alert(ActiveWindow.Caption)
}
```

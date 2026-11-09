# Application.Activate

激活指定的对象。



## 语法

express.**Activate()**

express   一个代表 **Application** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例会激活 WPP 程序当前窗口。*/
function test() {
    Application.Activate()
}
```


```JavaScript
/*本示例激活 WPP 程序当前窗口并显示第一个窗口的标题。*/
function test() {
    Application.Activate()
    alert(Application.Windows.Item(1).Caption)
}
```

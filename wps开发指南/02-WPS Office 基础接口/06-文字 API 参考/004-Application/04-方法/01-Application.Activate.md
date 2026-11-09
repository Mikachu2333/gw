# Application.Activate

激活指定的对象。



## 语法

express.**Activate()**

express   一个代表 **Application** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例激活 WPS 应用程序窗口。*/
function test() {
    Application.Activate()
}
```


```JavaScript
/*本示例激活 WPS 应用程序窗口，并显示活动文档的名称。*/
function test() {
    Application.Activate()
    alert(ActiveDocument.Name)
}
```

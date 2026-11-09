# DocumentWindow.Left

返回或设置 **Single** 值，表示文档窗口的左边缘到应用程序窗口的工作区左边缘的距离，以磅为单位。读/写。



## 语法

express.**Left**

express   一个代表 **DocumentWindow** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将第二文档窗口的左边距设置为第一文档窗口的左边距的一半。*/
function test() {
    Application.Windows.Item(2).Left = Application.Windows.Item(1).Left / 2
}
```


```JavaScript
/*本示例显示活动窗口距离应用程序窗口的工作区左边缘的距离。*/
function test() {
    alert(Application.ActiveWindow.Left + " 磅")
}
```

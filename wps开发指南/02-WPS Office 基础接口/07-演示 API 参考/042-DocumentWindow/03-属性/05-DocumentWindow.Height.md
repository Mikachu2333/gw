# DocumentWindow.Height

返回或设置指定对象的高度（以磅为单位）。读/写。



## 语法

express.**Height**

express   一个代表 **DocumentWindow** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*以下示例将第二文档窗口的高度设置为应用程序窗口高度的一半。*/
function test() {
    Application.Windows.Item(2).Height = Application.Height / 2
}
```


```JavaScript
/*本示例显示活动窗口的高度。*/
function test() {
    alert(ActiveWindow.Height + " 磅")
}
```

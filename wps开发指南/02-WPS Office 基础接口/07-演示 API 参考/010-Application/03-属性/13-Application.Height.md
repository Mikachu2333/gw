# Application.Height

返回或设置指定对象的高度（以磅为单位）。可读写。



## 语法

express.**Height**

express   一个代表 **Application** 对象的变量。

## 类型

number（float 精度）

## 说明


 **Shape** 对象的 **Height** 属性返回或设置指定形状的正面表面的高度。此度量不包括阴影或 3D 效果。



## 示例


```JavaScript
/*本示例将第二个文档窗口的高度设置为应用程序窗口高度的一半。*/
function test() {
    Application.Windows.Item(2).Height = Application.Height / 2
}
```


```JavaScript
/*本示例显示应用程序窗口的高度。*/
function test() {
    alert(Application.Height + " 磅")
}
```

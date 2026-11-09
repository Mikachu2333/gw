# Application.DisplayGuides

获取或设置是否在应用程序中显示绘图参考线。



## 语法

express.**DisplayGuides**

express   一个代表 **Application** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例设置在应用程序中显示绘图参考线。*/
function test() {
    Application.DisplayGuides = msoTrue
}
```


```JavaScript
/*本示例判断应用程序是否显示绘图参考线，并通知用户。*/
function test() {
    if (Application.DisplayGuides == msoTrue) {
        alert("当前应用程序显示绘图参考线。")
    } else {
        alert("当前应用程序不显示绘图参考线。")
    }
}
```

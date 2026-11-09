# Application.DisplayGridLines

决定是否显示 WPP 中的网格线。可读/写。



## 语法

express.**DisplayGridLines**

express   一个代表 **Application** 对象的变量。

## 类型

MsoTriState

## 说明


 **DisplayGridLines** 可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| ---------------- | ------------------ |
| **msoFalse** | 不显示网格线 |
| **msoTrue** | 显示网格线 |



## 示例


```JavaScript
/*本示例切换 WPP 中网格线的显示状态。*/
function test() {
    if (Application.DisplayGridLines == msoTrue) {
        Application.DisplayGridLines = msoFalse
    } else {
        Application.DisplayGridLines = msoTrue
    }
}
```


```JavaScript
/*本示例显示应用程序窗口网格线状态。*/
function test() {
    switch (Application.DisplayGridLines) {
        case msoFalse:
            alert("当前不显示网格线")
            break
        case msoTrue:
            alert("当前显示网格线")
            break
    }
}
```

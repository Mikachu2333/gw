# Application.Move

设置应用程序窗口的位置。



## 语法

express.**Move(Left, Top)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Left | 必选 | number（int4 精度） | 指定窗口的水平屏幕位置。 |
| Top | 必选 | number（int4 精度） | 指定窗口的垂直屏幕位置。 |

## 返回值

void

## 示例


```JavaScript
/*本示例使用 Move 方法重新调整应用程序窗口的位置。*/
function test() {
    Application.WindowState = wdWindowStateNormal
    Application.Move(50, 50)
}
```


```JavaScript
/*本示例判断如果应用程序窗口为正常状态，则设置应用程序窗口的位置。*/
function test() {
    if (Application.WindowState == wdWindowStateNormal) {
        Application.Move(150, 150)
    }
}
```

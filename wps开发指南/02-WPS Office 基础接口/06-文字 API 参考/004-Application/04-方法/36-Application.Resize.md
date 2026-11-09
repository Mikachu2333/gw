# Application.Resize

调整 WPS 应用程序或某一任务的窗口大小。



## 语法

express.**Resize(Width, Height)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Width | 必选 | number（int4 精度） | 窗口的宽度，以磅值为单位。 |
| Height | 必选 | number（int4 精度） | 窗口的高度，以磅值为单位。 |

## 返回值

void

## 说明


如果该窗口被最大化或最小化，将出现错误。使用 **Width** 或 **Height** 属性为窗口单独设置宽度和高度。



## 示例


```JavaScript
/*本示例将 WPS 应用程序窗口调整为 6 英寸宽、4 英寸高。*/
function test() {
    Application.WindowState = wdWindowStateNormal
    Application.Resize(Application.InchesToPoints(6), Application.InchesToPoints(4))
}
```


```JavaScript
/*本示例将 WPS 应用程序窗口调整为 7 英寸宽、6 英寸高。*/
function test() {
    Application.WindowState = wdWindowStateNormal
    Application.Resize(InchesToPoints(7), InchesToPoints(6))
}
```

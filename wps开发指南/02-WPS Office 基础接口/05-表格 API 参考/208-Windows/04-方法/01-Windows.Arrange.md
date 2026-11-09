# Windows.Arrange

对屏幕上的窗口进行排列。



## 语法

express.**Arrange(ArrangeStyle, ActiveWorkbook, SyncHorizontal, SyncVertical)**

express   一个代表 **Windows** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ArrangeStyle | 可选 | XlArrangeStyle | **XlArrangeStyle** 常量之一，指定窗口排列方式。 |
| ActiveWorkbook | 可选 | any | 如果为 **True** ，则只排列活动工作簿的可见窗口。如果为 **False** ，则排列所有窗口。默认值为 **False** 。 |
| SyncHorizontal | 可选 | any | 如果 _ActiveWorkbook_ 为 **False** 或省略，则忽略此参数。如果为 **True** ，则在水平滚动时同步活动工作簿的窗口。如果为 **False** ，则不同步窗口。默认值为 **False** 。 |
| SyncVertical | 可选 | any | 如果 _ActiveWorkbook_ 为 **False** 或省略，则忽略此参数。如果为 **True** ，则在垂直滚动时同步活动工作簿的窗口。如果为 **False** ，则不同步窗口。默认值为 **False** 。 |

## 返回值

Variant

## 说明


| **XlArrangeStyle** 可为以下 **XlArrangeStyle** 常量之一。 |
| ------------------------------------------------ |
| **xlArrangeStyleCascade** 对窗口进行层叠。               |
| **xlArrangeStyleTiled** 默认值 平铺窗口。                |
| **xlArrangeStyleHorizontal** 。水平排列所有窗口。           |
| **xlArrangeStyleVertical** 垂直排列所有窗口。             |



## 示例


```JavaScript
/*本示例平铺应用程序中的所有窗口。*/
function test() {
    Application.Windows.Arrange(xlArrangeStyleTiled)
}
```


```JavaScript
/*本示例水平排列应用程序中的可见窗口。*/
function test() {
    Application.Windows.Arrange(xlArrangeStyleHorizontal, true)
}
```

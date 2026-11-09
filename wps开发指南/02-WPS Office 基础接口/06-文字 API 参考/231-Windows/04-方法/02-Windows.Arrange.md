# Windows.Arrange

在应用程序工作区排列所有打开的文档窗口。



## 语法

express.**Arrange(ArrangeStyle)**

express   一个代表 **Windows** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ArrangeStyle | 可选 | any | 窗口排列方式。可以是下列 WdArrangeStyle 常量之一：wdIcons 或者 wdTiled。 |

## 返回值

void

## 说明


WPS 使用的是单个文档界面（SDI），本方法不会产生任何效果。



## 示例


```JavaScript
/*本示例排列所有打开的窗口，使其不相互重叠。*/
function test() {
    Windows.Arrange(wdTiled)
}
```


```JavaScript
/*本示例将所有打开的窗口最小化，然后排列这些窗口。*/
function test() {
    for (let i = 1; i <= Windows.Count; i++) {
        Windows.Item(i).Activate()
        Windows.Item(i).WindowState = wdWindowStateMinimize
    }
    Windows.Arrange(wdIcons)
}
```

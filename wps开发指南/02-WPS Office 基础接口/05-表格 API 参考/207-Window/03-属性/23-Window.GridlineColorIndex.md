# Window.GridlineColorIndex

返回或设置网格线颜色，其值为当前调色板中的索引，或为下列 **[XlColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlColorIndex)** 常量。



## 语法

express.**GridlineColorIndex**

express   一个代表 **Window** 对象的变量。

## 类型

XlColorIndex

## 说明


| **XlColorIndex** 可为以下 **XlColorIndex** 常量。 |
| ------------------------------------------ |
| **xlColorIndexAutomatic**                  |

将该属性设置为 **xlColorIndexAutomatic** 可指定颜色为自动。



## 示例


```JavaScript
/*本示例将活动窗口中的网格线颜色设为蓝色。*/
function test() {
    ActiveWindow.GridlineColorIndex = 5
}
```


```JavaScript
/*本示例演示将第一个窗口的网格线颜色设为绿色，再将第一个窗口的网格线颜色设置为自动配色。*/
function test() {
    alert("第一个窗口的网格线颜色即将设为绿色")
    Windows.Item(1).GridlineColorIndex =  4
    alert("第一个窗口的网格线颜色即将设为自动配色")
    Windows.Item(1).GridlineColorIndex =  xlColorIndexAutomatic
}
```

# ErrorCheckingOptions.IndicatorColorIndex

返回或设置错误检查选项的指示器的颜色。 **XlColorIndex** 类型，可读写。



## 语法

express.**IndicatorColorIndex**

express   一个代表 **ErrorCheckingOptions** 对象的变量。

## 类型

XlColorIndex

## 说明


| **XlColorIndex** 可以是下列 **XlColorIndex** 常量之一。 |
| --------------------------------------------- |
| **xlColorIndexAutomatic** 为默认系统颜色。             |
| **xlColorIndexNone** 为无颜色。                |

通过输入相应的索引值可为指示器指定特殊的颜色。可用 **Colors** 属性返回当前的调色板。



## 示例


```JavaScript
/*在本示例中，ET 将查看错误检查的指示器颜色是否设置为默认系统颜色，并通知给用户。*/
function test() {
    if (Application.ErrorCheckingOptions.IndicatorColorIndex == xlColorIndexAutomatic) {
        alert("Your indicator color for error checking is set to the default system color.")
    } else {
        alert("Your indicator color for error checking is not set to the default system color.")
    }
}
```


```JavaScript
/*在本示例中，将 ET 查看错误检查的指示器颜色设置为无颜色。*/
function test() {
    Application.ErrorCheckingOptions.IndicatorColorIndex = xlColorIndexNone
}
```

# Application.MoveAfterReturnDirection

返回或设置当用户按 Enter 时，活动单元格的移动方向。 **[XlDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlDirection)** 类型，可读写。



## 语法

express.**MoveAfterReturnDirection**

express   一个代表 **Application** 对象的变量。

## 类型

XlDirection

## 说明


| **XlDirection** 可为以下 **XlDirection** 常量之一。 |
| ------------------------------------------ |
| **xlDown**                                 |
| **xlToLeft**                               |
| **xlToRight**                              |
| **xlUp**                                   |

如果 **[MoveAfterReturn](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/MoveAfterReturn)** 属性为 **False** ，则不论怎样设置 **MoveAfterReturnDirection** 属性，所选单元格都不会移动。



## 示例


```JavaScript
/*本示例使活动单元格在用户按 Enter 时向右移动。*/
function test() {
    Application.MoveAfterReturn = true
    Application.MoveAfterReturnDirection = xlToRight
}
```


```JavaScript
/*本示例演示活动单元格在用户按 Enter 时向上移动，并显示MoveAfterReturnDirection属性的枚举值。*/
function test() {
    Application.MoveAfterReturn = true
    Application.MoveAfterReturnDirection = xlUp
    if (Application.MoveAfterReturnDirection == xlUp) {
        alert("MoveAfterReturnDirection属性的枚举值为：xlUp")
    }
}
```

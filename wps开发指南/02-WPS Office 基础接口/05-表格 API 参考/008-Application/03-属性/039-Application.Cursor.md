# Application.Cursor

返回或设置 ET 中鼠标指针的外观。 **[XlMousePointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlMousePointer)** 类型，可读写。



## 语法

express.**Cursor**

express   一个代表 **Application** 对象的变量。

## 类型

XlMousePointer

## 说明


| **XlMousePointer** 可为以下 **XlMousePointer** 常量之一。 |
| ------------------------------------------------ |
| **xlDefault** 。默认指针。                              |
| **xlIBeam** I 形指针。                               |
| **xlNorthwestArrow** 西北向箭头指针。                    |
| **xlWait** 沙漏型指针。                                |

当宏停止运行时， **Cursor** 属性不会自动重设。在宏停止运行前，应将指针重设为 **xlDefault** 。



## 示例


```JavaScript
/*本示例将鼠标指针形状更改为 I 形，稍停片刻，然后将其重新变为默认指针形状。*/
function test() {
    Application.Cursor = xlIBeam
    for (let x = 1; x <= 1000; x++) {
        for (let y = 1; y <= 1000; y++) {
            x + y
        }
    }
    Application.Cursor = xlDefault
}
```


```JavaScript
/*本示例演示将鼠标指针设置为沙漏型，判断如果为沙漏型指针，在通知用户后将其改为默认指针。*/
function test() {
    Application.Cursor = xlWait
    if (Application.Cursor == xlWait) {
        alert("鼠标指针即将设置为：默认指针。")
        Application.Cursor = xlDefault
    }
}
```

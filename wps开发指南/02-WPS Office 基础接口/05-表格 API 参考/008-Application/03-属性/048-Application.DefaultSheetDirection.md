# Application.DefaultSheetDirection

返回或设置 ET 显示新窗口和工作表时的默认方向。可为以下常量之一： **xlRTL** （从右到左）或 **xlLTR** （从左到右）。 **Long** 类型，可读写。



## 语法

express.**DefaultSheetDirection**

express   一个代表 **Application** 对象的变量。

## 类型

number（int4 精度）

## 说明


由于所选择或安装的语言支持（例如美国英语）不同，有些常量可能不可用。



## 示例


```JavaScript
/*本示例将默认方向设置为从右到左。*/
function test() {
    Application.DefaultSheetDirection = xlRTL
}
```


```JavaScript
/*本示例判断如果DefaultSheetDirection属性的值为xlRTL，则设置其为xlLTR，并通知用户。*/
function test() {
    if (Application.DefaultSheetDirection == xlRTL) {
        Application.DefaultSheetDirection = xlLTR
        alert("已完成设置。")
    }
}
```

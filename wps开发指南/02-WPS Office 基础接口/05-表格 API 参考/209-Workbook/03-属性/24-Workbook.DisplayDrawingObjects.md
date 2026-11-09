# Workbook.DisplayDrawingObjects

返回或设置形状的显示方式。 **Long** 类型，可读写。



## 语法

express.**DisplayDrawingObjects**

express   一个代表 **Workbook** 对象的变量。

## 类型

XlDisplayDrawingObjects

## 说明


| 常量                  | 说明      |
| ------------------- | ------- |
| **xlDisplayShapes** | 显示所有形状。 |
| **xlPlaceholders**  | 仅显示占位符。 |
| **xlHide**          | 隐藏所有形状。 |



## 示例


```JavaScript
/*本示例隐藏活动工作簿中的所有形状。*/
function test() {
    ActiveWorkbook.DisplayDrawingObjects = xlHide
}
```


```JavaScript
/*本示例演示判断活动工作簿的DisplayDrawingObjects属性是否为xlDisplayShapes，如果是将其重新设置为xlPlaceholders，并通知用户。*/
function test() {
    if (ActiveWorkbook.DisplayDrawingObjects == xlDisplayShapes) {
        ActiveWorkbook.DisplayDrawingObjects = xlPlaceholders
        alert("已将活动工作簿形状的显示方式改为：xlPlaceholders")
    }
}
```

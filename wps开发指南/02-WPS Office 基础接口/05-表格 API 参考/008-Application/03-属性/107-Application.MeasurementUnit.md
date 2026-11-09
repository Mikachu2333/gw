# Application.MeasurementUnit

指定应用程序中使用的度量单位。可读/写 **xlMeasurementUnit** 类型。



## 语法

express.**MeasurementUnit**

express   一个代表 **Application** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*在以下示例中，应用程序的度量单位被设置为英寸。*/
function test() {
    Application.MeasurementUnit = xlInches
}
```


```JavaScript
/*本示例演示将MeasurementUnit属性的度量单位设置为厘米，并显示该属性的度量单位。*/
function test() {
    Application.MeasurementUnit = xlCentimeters
    if (Application.MeasurementUnit == xlCentimeters) {
        alert("MeasurementUnit属性的度量单位为：xlCentimeters")
    }
}
```

# Options.MeasurementUnit

设置或者返回 WPS 的标准度量单位。 **WdMeasurementUnits** 类型，可读写。



## 语法

express.**MeasurementUnit**

express   一个代表 **Options** 对象的变量。

## 类型

WdMeasurementUnits

## 示例


```JavaScript
/*本示例将 WPS 的标准度量单位设置为磅。*/
function test() {
    Options.MeasurementUnit = wdPoints
}
```


```JavaScript
/*本示例显示“选项”对话框中“常规与保存”选项卡上“常规选项”下“度量单位”选项的当前状态是否为厘米。*/
function test() {
    alert(Options.MeasurementUnit == wdCentimeters)
}
```

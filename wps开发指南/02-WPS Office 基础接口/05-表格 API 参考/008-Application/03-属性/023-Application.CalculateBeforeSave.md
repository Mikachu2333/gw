# Application.CalculateBeforeSave

如果在将工作簿保存到磁盘之前计算工作簿（如果 **[Calculation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Calculation)** 属性设置为 **xlManual** ），则该属性值为 **True** 。如果更改 **Calculation** 属性则保留该属性。 **Boolean** 类型，可读写。



## 语法

express.**CalculateBeforeSave**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 ET 在将工作簿保存到磁盘之前对工作簿进行计算。*/
function test() {
    Application.Calculation = xlManual
    Application.CalculateBeforeSave = true
}
```


```JavaScript
/*本示例将Calculation属性的值设置为xlCalculationSemiautomatic 再启用工作簿保存到磁盘之前计算工作簿。*/
function test() {
    Application.Calculation = xlCalculationSemiautomatic
    Application.CalculateBeforeSave = true
}
```

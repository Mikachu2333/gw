# Application.Calculation

返回或设置一个 **[XlCalculation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlCalculation)** 值，它代表计算模式。



## 语法

express.**Calculation**

express   一个代表 **Application** 对象的变量。

## 类型

XlCalculation

## 说明


对于 OLAP （OLAP：为查询和报表（而不是处理事务）而进行了优化的数据库技术。OLAP 数据是按分级结构组织的，它存储在多维数据集而不是表中。）数据源，此属性仅能返回或被设置为 **xlNormal** 。



## 示例


```JavaScript
/*本示例设置 ET 在将工作簿保存到磁盘之前对工作簿进行计算。*/
function test() {
    Application.Calculation = xlCalculationManual
    Application.CalculateBeforeSave = true
}
```


```JavaScript
/*本示例判断如果Calculation属性的值为xlCalculationSemiautomatic，则将Calculation属性的值设置为xlCalculationAutomatic。*/
function test() {
    if (Application.Calculation == xlCalculationSemiautomatic) {
        Application.Calculation = xlCalculationAutomatic
    }
}
```

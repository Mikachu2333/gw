# Workbook.CalculationVersion

返回有关工作簿最近一次完全重新计算所使用的 ET 的版本信息。 **Long** 型，只读。



## 语法

express.**CalculationVersion**

express   一个代表 **Workbook** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果工作簿是用早期版本 ET 保存的，且该工作簿并未进行完全重新计算，则此属性返回 0。



## 示例


```JavaScript
/*本示例演示有关工作簿最近一次完全重新计算所使用的 ET 的版本信息*/
function test() {
    alert(ActiveWorkbook.CalculationVersion)
}
```


```JavaScript
/*本示例演示CalculationVersion属性的数据类型。*/
function test() {
    alert(typeof ActiveWorkbook.CalculationVersion)
}
```

# Application.CheckAbort

停止 ET 应用程序中的重新计算。



## 语法

express.**CheckAbort(KeepAbort)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| KeepAbort | 可选 | any | 允许对区域执行重新计算。 |

## 返回值

void

## 示例


```JavaScript
/*本示例中，ET 将停止应用程序中的重新计算（不包括单元格 A10）。为查看本示例的结果，假定应用程序中还存在其他计算，这将允许用户查看被指定继续进行重新计算的单元格和其他单元格区域之间的不同。*/
function test() {
    let rngSubtotal = Application.Range("A10")
    //Stop recalculation except for designated cell.
    Application.CheckAbort(rngSubtotal)
}
```


```JavaScript
/*本示例判断如果有正在执行的计算，ET将停止应用程序中的重新计算（不包括A1:C1区域）。*/
function test() {
    if (Application.CalculationState != xlDone) {
        Application.CheckAbort(Application.Range("A1:C1"))
    }
}
```

# Workbook.ForceFullCalculation

返回指定的工作簿是否处于强制计算模式，或者将其设置为强制计算模式。可读/写。



## 语法

express.**ForceFullCalculation**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 说明


如果工作簿处于强制计算模式，则忽略相关性，并且将所有工作表标记为在每次触发计算时完全计算。此设置将保持有效，直至 ET 重新启动。

将 **ForceFullCalculation** 属性设置为 **True** 将增加数据表的计算时间，其长短与数据表的大小成比例。 假设有一个 NxM 的数据表，计算时间的增加将约为_基本时间_ x (_N_x_M_)，因此如果此属性设置为 **True** ，3x4 的数据表可能需要约 12 倍的计算时间。



## 示例


```JavaScript
/*下面的示例将活动工作簿设置为强制计算模式。*/
function test() {
    ActiveWorkbook.ForceFullCalculation = true
}
```


```JavaScript
/*本示例演示如果第一个工作簿为强制计算模式，设置取消强制计算模式，并告知用户。*/
function test() {
    if (Workbooks.Item(1).ForceFullCalculation) {
        Workbooks.Item(1).ForceFullCalculation = false
    }
    alert("第一个工作簿是否为强制计算模式：" + Workbooks.Item(1).ForceFullCalculation)
}
```

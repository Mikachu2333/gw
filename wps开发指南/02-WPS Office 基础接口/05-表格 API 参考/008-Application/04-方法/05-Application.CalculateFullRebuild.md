# Application.CalculateFullRebuild

对于所有打开的工作簿，强制数据的完整计算并重建从属关系。



## 语法

express.**CalculateFullRebuild()**

express   一个代表 **Application** 对象的变量。

## 返回值

void

## 说明


从属关系是取决于其他单元格的公式。例如，公式“=A1”取决于单元格 A1。 **CalculateFullRebuild** 方法类似于重新输入所有公式。



## 示例


```JavaScript
/*本示例将当前 ET 的版本与上次计算该工作簿的 ET 版本进行比较。如果两个版本不同，则对所有打开工作簿中的数据进行一次完整计算并重建从属关系。*/
function test() {
    if (Application.CalculationVersion !=  Workbooks.Item(1).CalculationVersion) {
        Application.CalculateFullRebuild()
    }
}
```


```JavaScript
/*本示例中，检查 ET 是否已计算完成。如果已完成，则对所有打开工作簿中的数据进行一次完整计算并重建从属关系。*/
function test() {
    if (Application.CalculationState == xlDone) {
        Application.CalculateFullRebuild()
    }
}
```

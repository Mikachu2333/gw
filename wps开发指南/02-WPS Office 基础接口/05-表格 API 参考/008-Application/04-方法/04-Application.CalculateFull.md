# Application.CalculateFull

强制对所有打开工作簿中的数据进行完整计算。



## 语法

express.**CalculateFull()**

express   一个代表 **Application** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将当前 ET 的版本与上次计算该工作簿的 ET 版本进行比较。如果两个版本不同，则对所有打开工作簿中的数据进行一次完整计算。*/
function test() {
    if (Application.CalculationVersion != Workbooks.Item(1).CalculationVersion) {
        Application.CalculateFull()
    }
}
```


```JavaScript
/*本示例判断如果存在会触发计算的更改，且还未执行重新计算，则对所有打开工作簿中的数据进行一次完整计算。*/
function test() {
    if (Application.CalculationState == xlPending) {
        Application.CalculateFull()
    }
}
```

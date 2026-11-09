# Application.CalculationVersion

返回一个数字，其最右侧两位表示计算引擎的次要版本号，而左侧的其他位表示 ET 组件的主要版本号。 **Long** 型，只读。



## 语法

express.**CalculationVersion**

express   一个代表 **Application** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果工作簿是用早期版本 ET 保存的，且该工作簿并未进行完全重新计算，则此属性返回 0。



## 示例


```JavaScript
/*此示例将当前 ET 的版本与上次计算工作簿的 ET 的版本进行比较。如果两个版本号不同，则此示例将 blnFullCalc 变量设置为true。*/
function test() {
    let blnFullCalc = false
    if (Application.CalculationVersion != Workbooks.Item(1).CalculationVersion) {
        blnFullCalc = true
    }
}
```


```JavaScript
/*此示例演示 CalculationVersion 属性的值。*/
function test() {
    alert("CalculationVersion属性的值为：" + Application.CalculationVersion)
}
```

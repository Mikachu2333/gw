# Application.CalculationInterruptKey

设置或返回一个 **[XlCalculationInterruptKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlCalculationInterruptKey)** 常量，该常量指定在执行计算时可中断 ET 的键。可读写。



## 语法

express.**CalculationInterruptKey**

express   一个代表 **Application** 对象的变量。

## 类型

XlCalculationInterruptKey

## 示例


```JavaScript
/*在本示例中，ET 确定对中断计算的键的设置，并通知用户。*/
function test() {
    //Determine the calculation interrupt key and notify the user.
    switch (Application.CalculationInterruptKey) {
        case xlAnyKey:
            MsgBox("The calculation interrupt key is set to any key.")
            break
        case xlEscKey:
            MsgBox("The calculation interrupt key is set to 'Escape'")
            break
        case xlNoKey:
            MsgBox("The calculation interrupt key is set to no key.")
            break
    }
}
```


```JavaScript
/*本示例设置按 Esc 键中断计算，并通知用户。*/
function test() {
    Application.CalculationInterruptKey = xlEscKey
    if (Application.CalculationInterruptKey == xlEscKey) {
        alert("已设置CalculationInterruptKey属性的值为：xlEscKey")
    }
}
```

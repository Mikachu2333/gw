# Options.EnvelopeFeederInstalled

如果当前的打印机为信封指定了送纸器，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**EnvelopeFeederInstalled**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例判断如果已安装了信封送纸器，则以信封方式打印活动文档。*/
function test() {
    if (Options.EnvelopeFeederInstalled) {
        ActiveDocument.Envelope.PrintOut(null, null, null, null, null, null, null, null, null, null, null, null, InchesToPoints(3), InchesToPoints(1.5))
    } else {
        alert("No envelope feeder available.")
    }
}
```


```JavaScript
/*本示例显示当前的打印机是否为信封指定了送纸器。*/
function test() {
    alert(Options.EnvelopeFeederInstalled)
}
```

# Application.ThisCell

返回一个单元格，用户定义的函数将作为 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象从这里调用。



## 语法

express.**ThisCell**

express   一个代表 **Application** 对象的变量。

## 类型

Range

## 说明


在用户定义的函数中，用户不能访问 **Range** 对象上的属性或方法。当完成了重新计算后，用户可以为今后的使用和执行附加操作而存储 **Range** 对象。



## 示例


```JavaScript
/*本示例名为 test 的函数包含用于通知用户单元格地址的 ThisCell 属性。*/
function test() {
    console.log("The cell address is: " + Application.ThisCell.Address())
    return 1
}
```


```JavaScript
/*本示例名为 test 的函数包含 ThisCell 属性，用于判断用户单元格地址是否为“$A$1”。*/
function test() {
    if (Application.ThisCell.Address() == "$A$1") {
        return 1
    } else {
        return 2
    }
}
```

# Application.EnableCancelKey

返回或设置 WPS 处理 Ctrl+Break 用户中断的方式。 **WdEnableCancelKey** 类型，可读写。



## 语法

express.**EnableCancelKey**

express   一个代表 **Application** 对象的变量。

## 类型

WdEnableCancelKey

## 说明


使用此属性时应非常小心。如果使用 **wdCancelDisabled** ，则无法中断失控的循环或其他非自我中断的代码。另外，当代码停止运行时，除非明确地重新设置其值，否则 **EnableCancelKey** 属性不会重新设置为 **wdCancelInterrupt** ，该属性在 WPS 会话期间内仍为 **wdCancelDisabled** 。



## 示例


```JavaScript
/*本示例使 Ctrl+Break 不能中断计数器循环。*/
function test() {
    Application.EnableCancelKey = wdCancelDisabled
    for (let i = 1; i <= 10000; i++) {
        console.log(i)
    }
    Application.EnableCancelKey = wdCancelInterrupt
}
```


```JavaScript
/*本示例显示 WPS 处理 Ctrl+Break 用户中断的方式是否为wdCancelInterrupt。*/
function test() {
    alert(Application.EnableCancelKey == wdCancelInterrupt)
}
```

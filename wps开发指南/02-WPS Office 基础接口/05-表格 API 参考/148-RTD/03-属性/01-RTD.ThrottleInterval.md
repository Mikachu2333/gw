# RTD.ThrottleInterval

返回或设置一个 **Long** 类型的数值，该数值表示更新的时间间隔。可读写。



## 语法

express.**ThrottleInterval**

express   一个代表 **RTD** 对象的变量。

## 类型

number（int4 精度）

## 说明


默认值为 2000 毫秒。如果更改了该值，则重新启动 ET 后将使用新值。



## 示例


```JavaScript
/*本示例显示实时数据更新的时间间隔。*/
function test() {
    alert(Application.RTD.ThrottleInterval)
}
```


```JavaScript
/*本示例设置实时数据更新的时间间隔。*/
function test() {
    Application.RTD.ThrottleInterval = 3000
}
```

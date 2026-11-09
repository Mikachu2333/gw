# RTD.RefreshData

请求对实时数据服务器中的实时数据进行更新。



## 语法

express.**RefreshData()**

express   一个代表 **RTD** 对象的变量。

## 返回值

void

## 说明


在用户定义的函数中，要避免使用 **RefreshData** 方法，因为在重新计算过程中调用此方法将失败。



## 示例


```JavaScript
/*本示例请求对实时数据服务器中的实时数据进行更新。*/
function test() {
    Application.RTD.RefreshData()
}
```


```JavaScript
/*本示例判断如果实时数据更新的时间间隔大于 2000 毫秒，则请求对实时数据服务器中的实时数据进行更新。*/
function test() {
    if (Application.RTD.ThrottleInterval > 2000) {
        Application.RTD.RefreshData()
    }
}
```

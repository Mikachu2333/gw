# RTD.RestartServers

与实时数据服务器 (RTD) 重新连接。



## 语法

express.**RestartServers()**

express   一个代表 **RTD** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例重新连接实时数据服务器。*/
function test() {
    Application.RTD.RestartServers()
}
```


```JavaScript
/*本示例判断如果实时数据更新的时间间隔大于 2000 毫秒，则重新连接实时数据服务器。*/
function test() {
    if (Application.RTD.ThrottleInterval > 2000) {
        Application.RTD.RestartServers()
    }
}
```

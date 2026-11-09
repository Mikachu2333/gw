# Application.UseClusterConnector

返回或设置 ET 是否允许 XLL 加载项中的用户定义函数在计算机群集上运行。可读/写。



## 语法

express.**UseClusterConnector**

express   一个代表 **Application** 对象的变量。

## 类型

**Boolean** 

## 说明


如果 ET 允许 XLL 加载项中的用户定义函数在计算机群集上运行，则为 **True** ；否则为 **False** 。

若要启用 **UseClusterConnector** 属性，必须安装高性能计算 (HPC) 群集连接器。群集连接器可用来在 HPC 群集上远程运行群集安全的 XLL 函数，以提高性能。

设置 **UseClusterConnector** 属性后，使用 **[ClusterConnector](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ClusterConnector)** 属性可指定要使用的 HPC 群集连接器。



## 示例


```JavaScript
/*本示例显示ET是否允许 XLL 加载项中的用户定义函数在计算机群集上运行。*/
function test() {
    alert(Application.UseClusterConnector)
}
```


```JavaScript
/*本示例将ET设置为允许 XLL 加载项中的用户定义函数在计算机群集上运行。*/
function test() {
    Application.UseClusterConnector = true
}
```

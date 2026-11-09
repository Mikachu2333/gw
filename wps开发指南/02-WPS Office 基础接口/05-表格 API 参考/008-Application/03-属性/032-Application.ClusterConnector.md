# Application.ClusterConnector

返回或设置用来运行 XLL 加载项中的用户定义函数的高性能计算 (HPC) 群集连接器的名称。可读/写。



## 语法

express.**ClusterConnector**

express   一个代表 **Application** 对象的变量。

## 类型

**String** 

## 说明


若要指定 **ClusterConnector** 属性，必须安装高性能计算 (HPC) 群集连接器。群集连接器可用来在 HPC 群集上远程运行群集安全的 XLL 函数，以提高性能。

必须先使用 **[UseClusterConnector](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/UseClusterConnector)** 属性允许 ET 运行 XLL 加载项中的用户定义函数，然后才能指定 **ClusterConnector** 属性。



## 示例


```JavaScript
/*本示例显示高性能计算 (HPC) 群集连接器的名称。*/
function test() {
    alert(`连接器的名称：${Application.ClusterConnector}`)
}
```


```JavaScript
/*本示例设置ET允许XLL加载项中的用户定义函数在计算机群集上运行，并设置高性能计算 (HPC) 群集连接器的名称。*/
function test() {
    Application.UseClusterConnector = true
    Application.ClusterConnector = "example"
}
```

# Application.RegisterXLL

加载 XLL 代码源，并自动注册该代码源中包含的函数和命令。



## 语法

express.**RegisterXLL(Filename)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Filename | 必选 | string | 指定要加载的 XLL 的名称。 |

## 返回值

Boolean

## 说明


如果代码源加载成功，则该方法返回 **True** ；否则返回 **False** 。



## 示例


```JavaScript
/*本示例加载一个 XLL 文件并注册该文件中的函数和命令。*/
function test() {
    Application.RegisterXLL("D:\\我的数据源\\ANALYS32.XLL")
}
```


```JavaScript
/*本示例判断是否成功加载一个 XLL 文件并注册该文件中的函数和命令，并通知用户。*/
function test() {
    if (Application.RegisterXLL("D:\\我的数据源\\ANALYS32.XLL")) {
        alert("代码源加载成功")
    } else {
        alert("代码源加载失败")
    }
}
```

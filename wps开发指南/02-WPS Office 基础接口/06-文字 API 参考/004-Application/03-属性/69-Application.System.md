# Application.System

返回一个 **[System](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/System/obj)** 对象，该对象可用于返回与系统相关的信息，并执行与系统相关的任务。



## 语法

express.**System**

express   一个代表 **Application** 对象的变量。

## 类型

System

## 示例


```JavaScript
/*本示例显示处理器的类型和操作系统名称。*/
function test() {
    let processorType = Application.System.ProcessorType
    let operatingSystem = Application.System.OperatingSystem
    alert(`处理器的类型为：${processorType}\n操作系统为：${operatingSystem}`)
}
```


```JavaScript
/*本示例在光标处插入操作系统的版本号。*/
function test() {
    Selection.TypeText(Application.System.Version)
}
```

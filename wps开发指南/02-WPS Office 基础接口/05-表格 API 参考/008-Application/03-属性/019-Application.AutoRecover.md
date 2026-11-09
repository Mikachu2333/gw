# Application.AutoRecover

返回一个 **[AutoRecover](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AutoRecover/obj)** 对象，该对象在规定的时间间隔内对所有的文件格式进行备份。



## 语法

express.**AutoRecover**

express   一个代表 **Application** 对象的变量。

## 类型

AutoRecover

## 说明


有效的时间间隔为从 1 到 120 的所有数值。



## 示例


```JavaScript
/*本示例演示，使用AutoRecover属性的Time属性设置 ET 备份时间间隔为 5 分钟。*/
function test() {
    Application.AutoRecover.Time = 5
    MsgBox(`The time that will elapse between each automatic save has been set to ${Application.AutoRecover.Time}  minutes.`)
}
```


```JavaScript
/*本示例设置启用备份对象，并通知用户备份文件的路径。*/
function test() {
    Application.AutoRecover.Enabled = true
    alert(Application.AutoRecover.Path)
}
```

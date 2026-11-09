# Application.CommandBars

返回一个 **[CommandBars]** 对象，它代表 ET 命令栏。只读。



## 语法

express.**CommandBars**

express   一个代表 **Application** 对象的变量。

## 类型

CommandBars

## 说明


在与 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象一起使用时，此属性返回对该应用程序有效的内置及自定义命令栏。

当一个工作簿嵌入在另一个应用程序中并且用户通过双击它将其激活时，此属性与 **[Workbook](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/obj)** 对象一起使用会返回可在其他应用程序中使用的 ET 命令栏集。在所有其他情况下，此属性与 **Workbook** 对象一起使用会返回 **null** 。

没有编程的方法可用来返回附属于工作簿的命令栏集。



## 示例


```JavaScript
/*本示例删除所有未在屏幕上显示的自定义命令栏。*/
function test() {
    for (let i = 1; i <=  Application.CommandBars.Count; i++) {
        let bar = Application.CommandBars.Item(i)
        if (!bar.BuiltIn && !bar.Visible) {
            bar.Delete();
        }
    }
}
```


```JavaScript
/*此示例演示获取一个 ActiveMenuBar名称。*/
function test() {
    alert("ActiveMenuBar名称为：" + Application.CommandBars.ActiveMenuBar.Name)
}
```

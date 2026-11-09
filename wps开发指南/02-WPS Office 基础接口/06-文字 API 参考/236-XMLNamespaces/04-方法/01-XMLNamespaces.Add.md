# XMLNamespaces.Add

返回一个 **XMLNamespace** 对象，该对象代表添加到架构库中并在 WPS 中对用户可用的架构。



## 语法

express.**Add(Path, NamespaceURI, Alias, InstallForAllUsers)**

express   一个代表 **XMLNamespaces** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Path | 必选 | string | 架构的路径和文件名。可以为本地文件路径、网络路径或 Internet 地址。 |
| NamespaceURI | 可选 | any | 架构中指定的命名空间“统一资源标识符”。NamespaceURI 参数区分大小写，因此必须严格按照架构中所指定的那样进行拼写。 |
| Alias | 可选 | any | 在“模板和加载项”对话框中的“架构”选项卡上显示的架构名称。 |
| InstallForAllUsers | 可选 | boolean | 如果登录到计算机上的所有用户都能访问和使用新架构，则为 True。默认值为 False。 |

## 返回值

XMLNamespace

## 示例


```JavaScript
/*本示例将指定的架构添加到架构库，然后将其附加到活动文档中。本示例假设在指定的路径中已有一个名为 test.xml 的架构。*/
function test() {
    let xmlNamespace = Application.XMLNamespaces.Add("D:\\示例\\test.xml", "D:\\示例\\test.xml", "example_3", false)
    xmlNamespace.AttachToDocument(ActiveDocument)
}
```


```JavaScript
/*本示例将指定的架构添加到架构库，并显示架构库中架构的数量。本示例假设在指定的路径中已有一个名为 test.xml 的架构。*/
function test() {
    Application.XMLNamespaces.Add("D:\\示例\\test.xml", "D:\\示例\\test.xml", "example_4", true)
    alert(Application.XMLNamespaces.Count)
}
```

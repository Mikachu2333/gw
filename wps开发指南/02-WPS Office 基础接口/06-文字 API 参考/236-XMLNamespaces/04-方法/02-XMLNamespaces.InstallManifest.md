# XMLNamespaces.InstallManifest

将指定的 XML 扩展包安装在用户计算机上，令一个或更多用户能够使用 XML 智能文档解决方案。



## 语法

express.**InstallManifest(Path, InstallForAllUsers)**

express   一个代表 **XMLNamespaces** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Path | 必选 | string | XML 扩展包的路径和文件名。 |
| InstallForAllUsers | 可选 | boolean | 如果为 **True** ，则安装 XML 扩展包并允许该计算机上的所有用户使用。如果为 **False** ，则 XML 扩展包仅限于当前用户使用。默认值为 **False** 。 |

## 返回值

void

## 说明


出于安全目的，不能安装未签名的指令清单。

SimpleSample 架构包含在 Smart Document Software Development Kit (SDK) 中。有关详细信息，请参阅 Smart Document SDK。



## 示例


```JavaScript
/*本示例将 SimpleSample 智能文档解决方案安装在用户计算机上并使其仅用于当前用户。*/
function test() {
    Application.XMLNamespaces.InstallManifest("https://smartdocuments/simplesample/manifest.xml")
}
```


```JavaScript
/*本示例将 SimpleSample 智能文档解决方案安装在用户计算机上并使其仅用于当前用户，然后显示架构库中架构的数量。*/
function test() {
    Application.XMLNamespaces.InstallManifest("D:/示例/SimpleSample/Manifest.xml")
    alert(Application.XMLNamespaces.Count)
}
```

# AddIns.Add

将新加载宏文件添加到加载宏列表中。返回 **[AddIn](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AddIn/obj)** 对象。



## 语法

express.**Add(Filename, CopyFile)**

express   一个代表 **AddIns** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Filename | 必选 | string | 包含要添加到加载项管理器列表中的自动化加载项的 ProgID 的文件的名称。 |
| CopyFile | 可选 | any | 如果加载宏文件在硬盘上，则省略此参数。在加载宏处于可移动介质（软盘或光盘）上时，如果为 **True** ，就将该加载宏复制到硬盘上；如果为 **False** ，则将该加载宏保留在可移动介质上。如果省略此参数，ET 将显示对话框，提示您选择。 |

## 返回值

一个代表新加载宏的 **AddIn** 对象。

## 说明


该方法不安装新的加载宏。必须设置 **[Installed](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AddIn/member/Installed)** 才能安装加载宏。



## 示例


```JavaScript
/*此示例从 D 驱动器中添加加载宏 ANALYS32.XLL。运行此示例后，ET 会将文件 D:\\Analysis\\ANALYS32.XLL 复制到硬盘上的 Library 文件夹中，并将该加载宏的标题添加到“加载宏”对话框的列表中。*/
function test() {
    let addin = Application.AddIns.Add("D:\\Analysis\\ANALYS32.XLL", true)
    alert(`${addin.Title} has been added to the list`)
}
```


```JavaScript
/*本示例将新加载宏文件添加到加载宏列表中并安装。*/
function test() {
    Application.AddIns.Add("D:\\Analysis\\ANALYS32.XLL").Installed = true
}
```

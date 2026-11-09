# AddIns2.Add

将新加载项添加到加载项列表。



## 语法

express.**Add(Filename, CopyFile)**

express   一个代表 **AddIns2** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Filename | 必选 | string | 文件名，该文件包含要添加到 **“加载项”** 对话框中的列表的加载项。 |
| CopyFile | 可选 | any | 如果加载项文件位于可移动媒体上，指定是否要将该加载项复制到本地硬盘。指定 **True** 将加载项复制到硬盘。指定 **False** 将加载项保留在可移动媒体上。如果省略此参数，ET 将显示一个对话框，并要求用户选择是否要复制加载项文件。如果该加载项文件已位于硬盘上，那么将忽略此参数。 |

## 返回值

AddIn

## 示例


```JavaScript
/*本示例将新加载宏文件添加到加载宏列表中。*/
function test() {
    Application.AddIns2.Add("D:\\ANALYS32.XLL", true)
}
```


```JavaScript
/*本示例将新加载宏文件添加到加载宏列表中并安装。*/
function test() {
    Application.AddIns2.Add("D:\\ANALYS32.XLL").Installed = true
}
```

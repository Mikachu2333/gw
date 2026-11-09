# AddIns.Add

返回一个 **AddIn** 对象，该对象表示一个添加到可用加载项列表中的加载项。



## 语法

express.**Add(FileName, Install)**

express   一个代表 **AddIns** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 模板或 WLL 的路径。 |
| Install | 可选 | any | 如果为 **True** ，则安装加载项；如果为 **False** ，则将加载项添加到加载项列表中，但不进行安装。默认值为 **True** 。 |

## 返回值

AddIn

## 说明


可以使用加载项的 **Installed** 属性查看该项是否已经安装。



## 示例


```JavaScript
/*本示例安装名为 example.dot 的模板并将其添加至“模板和加载项”对话框中的加载项列表中。*/
function test() {
    // For this example to work correctly, verify that the path is correct and the file exists.
    Application.AddIns.Add("D:\\示例2\\example.dot", true)
}
```


```JavaScript
/*此示例安装名为“FindAll.wll”的加载项，并显示加载项数量。*/
function test() {
    Application.AddIns.Add("D:\\Templates\\FindAll.wll")
    alert(Application.AddIns.Count)
}
```

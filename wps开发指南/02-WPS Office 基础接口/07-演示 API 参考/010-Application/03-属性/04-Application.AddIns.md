# Application.AddIns

返回特定于程序的 **AddIns** 集合，该值代表 **“加载项”** 对话框（依次单击 **“工具”选项卡** 、 **“加载项”** ）中列出的所有加载项。只读。



## 语法

express.**AddIns**

express   一个代表 **Application** 对象的变量。

## 类型

AddIns

## 说明


WPP 特定加载项由 .ppa 或 .ppam 文件扩展名标识。组件对象模型（COM）加载项可普遍用于 Kingsoft 编程产品并具有 .dll 或 .exe 文件扩展名。



## 示例


```JavaScript
/*此示例向“加载项”对话框中的列表添加名为“AddInsTest.ppa”的加载项，并且自动加载加载项。*/
function test() {
    let addIns = Application.AddIns.Add("D:\\AddInsTest.ppa")
    addIns.Loaded = msoTrue
    alert(addIns.Name + " has been added to the list")
}
```


```JavaScript
/*本示例移除名称为“AddInsTest”的加载项。*/
function test() {
    Application.AddIns.Remove("AddInsTest")
}
```

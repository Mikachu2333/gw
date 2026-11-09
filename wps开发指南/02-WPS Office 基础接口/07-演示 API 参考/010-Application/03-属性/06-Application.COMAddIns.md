# Application.COMAddIns

返回对 WPP 中当前加载的组件对象模型（COM）加载宏的引用。在 **“工具”** 选项卡的 **“COM 加载项”** 对话框中列出了这些加载项。只读。



## 语法

express.**COMAddIns**

express   一个代表 **Application** 对象的变量。

## 类型

COMAddIns

## 示例


```JavaScript
/*本示例显示应用程序第一个 COM 加载项的说明文本。*/
function test() {
    alert(Application.COMAddIns.Item(1).Description)
}
```


```JavaScript
/*本示例从 Windows 注册表中存储的加载项列表中更新 COMAddIns 集合的内容。*/
function test() {
    Application.COMAddIns.Update()
}
```

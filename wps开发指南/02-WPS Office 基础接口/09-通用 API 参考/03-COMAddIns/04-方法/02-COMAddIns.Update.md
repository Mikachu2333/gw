# COMAddIns.Update

根据保存在 Windows 注册表中的加载项列表更新 COMAddIns 集合的内容。



## 语法

express.**Update()**

express   一个代表 **COMAddIns** 对象的变量。

## 返回值

void

## 说明


在 WPS Office 应用程序中使用特定 COM 加载项之前，必须先用相应的组件类别 ID 在 Windows 注册表中将该加载项注册为 COM 组件。通常，COM 加载项的安装程序会向注册表中添加必要的项。



## 示例


```JavaScript
/*本示例运行于各组件，将根据保存在 Windows 注册表中的加载项列表更新 COMAddIns 集合的内容。*/
function test() {
    Application.COMAddIns.Update()
}
```


```JavaScript
/*本示例运行于各组件，判断如果 COM 加载项的数量大于等于1，则根据保存在 Windows 注册表中的加载项列表更新 COMAddIns 集合的内容。*/
function test() {
    if (Application.COMAddIns.Count >= 1) {
        Application.COMAddIns.Update()
    }
}
```

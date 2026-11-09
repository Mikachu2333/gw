# Application.COMAddIns

返回对 **COMAddIns** 集合的引用，该集合代表 WPS 中当前加载的所有组件对象模型（COM）加载项（COM 加载项：通过添加自定义命令和指定的功能来扩展 WPS Office 程序的功能的补充程序。COM 加载项可在一个或多个 Office 程序中运行。COM 加载项使用文件扩展名 .dll 或 .exe。）。



## 语法

express.**COMAddIns**

express   一个代表 **Application** 对象的变量。

## 类型

COMAddIns

## 说明


COM 加载项在 **“COM 加载项”** 对话框中列出。



## 示例


```JavaScript
/*本示例显示 WPS 应用程序中第一个 COM 加载项的说明文本。*/
function test() {
    let comAddin = Application.COMAddIns.Item(1)
    alert(comAddin.Description)
}
```


```JavaScript
/*本示例显示所有 COM 加载项的类标识符（CLSID）和编程标识符（ProgID）。*/
function test() {
    for (let i = 1; i <= Application.COMAddIns.Count; i++) {
        let comAddin = Application.COMAddIns.Item(i)
        alert(`类标识符（CLSID）为：${comAddin.Guid}\n编程标识符（ProgID）为：${comAddin.ProgId}`)
    }
}
```

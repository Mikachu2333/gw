# Application.COMAddIns

返回 ET 的 **COMAddIns** 集合，该集合表示当前所安装的 COM 加载宏。只读。



## 语法

express.**COMAddIns**

express   一个代表 **Application** 对象的变量。

## 类型

COMAddIns

## 示例


```JavaScript
/*本示例显示当前已安装的 COM 加载宏的数目。*/
function test() {
    let objAI = Application.COMAddIns
    MsgBox(`Number of COM add-ins available: ${objAI.Count}`)
}
```


```JavaScript
/*以下示例从 Windows 注册表中存储的加载项列表中更新 COMAddIns 集合的内容。*/
function test() {
    Application.COMAddIns.Update()
}
```

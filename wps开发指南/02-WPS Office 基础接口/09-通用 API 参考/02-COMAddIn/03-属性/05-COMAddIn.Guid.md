# COMAddIn.Guid

获取指定 **COMAddIn** 对象的类标识符（CLSID）。只读。



## 语法

express.**Guid**

express   一个代表 **COMAddIn** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例运行于各组件，显示 COMAddIns 集合中第一个 COM 加载项的 ProgID 和 CLSID。*/
function test() {
    let comAddin = Application.COMAddIns.Item(1)
    alert(`My ProgID is ${comAddin.ProgId} and my CLSID is ${comAddin.Guid}`)
}
```


```JavaScript
/*本示例运行于各组件，显示所有 COM 加载项的类标识符（CLSID）。*/
function test() {
    let str = ""
    for (let i = 1; i <= Application.COMAddIns.Count; i++) {
        str += Application.COMAddIns.Item(i).Guid + "\n"
    }
    alert(str)
}
```

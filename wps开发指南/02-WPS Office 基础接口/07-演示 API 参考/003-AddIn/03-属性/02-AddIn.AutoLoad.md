# AddIn.AutoLoad

决定指定的加载宏是否在每次启动 WPP 时自动加载。可读/写。



## 语法

express.**AutoLoad**

express   一个代表 **AddIn** 对象的变量。

## 类型

MsoTriState

## 说明


如果将该属性设置为 **msoTrue** ，则自动将 **[Registered](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AddIn/member/Registered)** 属性设置为 **msoTrue** 。

 **AutoLoad** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| ----- | ---- |
| **msoFalse** | 每次启动WPP 时，不会自动加载指定的加载宏。 |
| **msoTrue** | 每次启动WPP 时，自动加载指定的加载宏。 |



## 示例


```JavaScript
/*本示例显示每次启动 WPP 时自动加载的每个加载宏的名称。*/
function test() {
    let bln = false
    for (let i = 1; i <= Application.AddIns.Count; i++) {
        if (Application.AddIns.Item(i).AutoLoad) {
            alert(Application.AddIns.Item(i).Name)
            bln = true
        }
    }
    if (bln == false) {
        alert("No add-ins were loaded automatically.")
    }
}
```


```JavaScript
/*本示例指定名为"AddInsTest"的加载宏在每次启动 WPP 时自动加载。*/
function test() {
    Application.AddIns.Item("AddInsTest").AutoLoad = msoTrue
}
```

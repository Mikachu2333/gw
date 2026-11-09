# AddIn.Compiled

如果为 **True** ，则指定的加载项是一个 WPS 加载项库（WLL）。如果为 **False** ，则加载项为一个模板。只读， **Boolean** 类型。



## 语法

express.**Compiled**

express   一个代表 **AddIn** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例判断当前加载的 WLL 的数目。*/
function test() {
    let count = 0
    for (let i = 1; i <= Application.AddIns.Count; i++) {
        let addIn = Application.AddIns.Item(i)
        if (addIn.Compiled && addIn.Installed) {
            count++
        }
    }
    alert(count + " WLL's are loaded")
}
```


```JavaScript
/*本示例判断如果第一个加载项是模板，则卸载该模板并打开它。*/
function test() {
    let addIn = Application.AddIns.Item(1)
    if (!addIn.Compiled) {
        addIn.Installed = false
        Documents.Open(addIn.Path + Application.PathSeparator + addIn.Name)
    }
}
```

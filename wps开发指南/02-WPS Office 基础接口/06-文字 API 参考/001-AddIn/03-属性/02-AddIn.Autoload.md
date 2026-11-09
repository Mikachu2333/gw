# AddIn.Autoload

如果该属性为 **True** ，则在 WPS 启动时，自动加载指定的加载项。位于 WPS 程序文件夹的 Startup 子文件夹中的加载项可以自动加载。 **Boolean** 类型，只读。



## 语法

express.**Autoload**

express   一个代表 **AddIn** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例显示 WPS 启动时自动加载的每一加载项的名称。*/
function test() {
    let blnFound = false
    for (let i = 1; i <= Application.AddIns.Count; i++) {
        let addIn = Application.AddIns.Item(i)
        if (addIn.Autoload) {
            alert(addIn.Name)
            blnFound = true
        }
    }
    if (!blnFound) {
        alert("No add-ins were loaded automatically.")
    }
}
```


```JavaScript
/*此示例判断名为“Gallery.dot”的加载项是否自动加载。*/
function test() {
    for (let i = 1; i <= Application.AddIns.Count; i++) {
        let addIn = Application.AddIns.Item(i)
        if (addIn.Name.toLowerCase().includes("gallery.dot")) {
            if (addinLoop.Autoload) {
                alert("Autoload")
            }
        }
    }
}
```

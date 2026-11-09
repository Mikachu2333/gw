# Application.DefaultLegalBlackline

如果为 **True** ，则 WPS 使用 **“比较并合并文档”** 对话框中的 **“精确比较”** 选项比较和合并文档。 **Boolean** 类型，可读写。



## 语法

express.**DefaultLegalBlackline**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例启用 WPS 的“精确比较”选项比较和合并文档。*/
function test() {
    Application.DefaultLegalBlackline = true
}
```


```JavaScript
/*本示例判断是否启用 WPS 的“精确比较”选项比较和合并文档，并通知用户。*/
function test() {
    if (Application.DefaultLegalBlackline) {
        alert("已启用 WPS 的“精确比较”选项比较和合并文档")
    } else {
        alert("未启用 WPS 的“精确比较”选项比较和合并文档")
    }
}
```

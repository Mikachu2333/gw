# Documents.CanCheckOut

如果该属性值为 **True** ，则 WPS 可将指定的文档从服务器签出。可读/写 **Boolean** 类型。



## 语法

express.**CanCheckOut(FileName)**

express   一个代表 **Documents** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 文档的服务器路径和文件名。 |

## 返回值

Boolean

## 说明


要利用 WPS 中内置的协作功能，文档必须存储在 SharePoint Portal Server 上。



## 示例


```JavaScript
/*本示例判断如果指定的文档可以从服务器签出，则将文档复制到本地计算机进行编辑。*/
function test() {
    let urlStr = "https://www.wps.cn/"
    if (Documents.CanCheckOut(urlStr)) {
        Documents.CheckOut(urlStr)
    } else {
        alert("You are unable to check out this document at this time.")
    }
}
```


```JavaScript
/*本示例显示指定的文档是否可以从服务器签出。*/
function test() {
    alert(Documents.CanCheckOut("https://www.wps.cn/"))
}
```

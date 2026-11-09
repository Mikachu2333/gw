# DefaultWebOptions.SaveNewWebPagesAsWebArchives

如果新的网页能够保存为 Web 档案，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**SaveNewWebPagesAsWebArchives**

express   一个代表 **DefaultWebOptions** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*在本示例中，ET 确定将新网页存为 Web 档案的设置，并通知用户*/
function test() {
    //Determine settings and notify user.
    if (Application.DefaultWebOptions.SaveNewWebPagesAsWebArchives) {
        alert("New Web pages will be saved as Web archives.")
    } else {
        alert("New Web pages will not be saved as Web archives.")
    }
}
```


```JavaScript
/*此示例设置新的网页能够保存为 Web 档案。*/
function test() {
    Application.DefaultWebOptions.SaveNewWebPagesAsWebArchives = true
}
```

# DefaultWebOptions.UpdateLinksOnSave

如果该属性值为 **True** ，则将文档保存为网页之前，自动更新超链接和所有指向支持文件的路径，以确保文档保存时包含最新的链接。如果该属性值为 **False** ，则不更新链接。默认值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**UpdateLinksOnSave**

express   一个代表 **DefaultWebOptions** 对象的变量。

## 类型

boolean

## 说明


如果文档保存的位置与其最终在 Web 服务器上的位置不同，且支持文件在第一个位置不可用，则应将该属性设为 **False** 。



## 示例


```JavaScript
/*本示例指定（Web全局选项）在保存文档前不更新链接。*/
function test() {
    Application.DefaultWebOptions.UpdateLinksOnSave = false
}
```


```JavaScript
/*本示例显示（Web全局选项）在保存文档前是否更新链接。*/
function test() {
    alert(Application.DefaultWebOptions.UpdateLinksOnSave)
}
```

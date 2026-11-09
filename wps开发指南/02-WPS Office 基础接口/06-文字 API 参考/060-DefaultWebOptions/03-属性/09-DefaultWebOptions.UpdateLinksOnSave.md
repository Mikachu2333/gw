# DefaultWebOptions.UpdateLinksOnSave

如果在将文档另存为网页时，所有支持文件的超链接和路径都会自动更新，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**UpdateLinksOnSave**

express   一个代表 **DefaultWebOptions** 对象的变量。

## 类型

boolean

## 说明


 **UpdateLinksOnSave** 属性可确保在保存文档保持最新的链接。 **UpdateLinksOnSave** 属性的默认值为 **True** 。

如果为 **False** ，则表明不更新链接。如果文档保存的位置与其在 Web 服务器上的最终位置不同，且无法在第一个位置上使用支持文件，则应将该属性设为 **False** 。



## 示例


```JavaScript
/*本示例指定（Web全局选项）在保存文档前不更新链接。*/
function test() {
    Application.DefaultWebOptions().UpdateLinksOnSave = false
}
```


```JavaScript
/*本示例显示（Web全局选项）在保存文档前是否更新链接。*/
function test() {
    alert(Application.DefaultWebOptions().UpdateLinksOnSave)
}
```

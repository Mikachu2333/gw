# Document.HasVBProject

返回一个 **Boolean** 类型的值，该值代表文档是否具有附加的 VBA 项目。只读。



## 语法

express.**HasVBProject**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 说明


此属性在以编程方式确定文档是否需要保存为启用宏的文件格式时最为有用。如果以其他格式保存，文档中包含的宏和代码项目可能会丢失。



## 示例


```JavaScript
/*本示例显示活动文档是否具有附加的 VBA 项目。*/
function test() {
    alert(ActiveDocument.HasVBProject)
}
```


```JavaScript
/*本示例判断第一个文档是否具有附加的 VBA 项目，并通知用户。*/
function test() {
    if (Documents.Item(1).HasVBProject) {
        alert("第一个文档具有附加的 VBA 项目")
    } else {
        alert("第一个文档未附加 VBA 项目")
    }
}
```

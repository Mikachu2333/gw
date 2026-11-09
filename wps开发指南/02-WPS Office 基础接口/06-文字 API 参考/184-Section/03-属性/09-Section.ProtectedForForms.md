# Section.ProtectedForForms

如果保护指定节中的窗体，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ProtectedForForms**

express   一个代表 **Section** 对象的变量。

## 类型

boolean

## 说明


如果保护节中的窗体，则只能选择和修改窗体域中的文本。要保护整个文档，请使用 **Document** 对象的 **Protect** 方法。



## 示例


```JavaScript
/*本示例打开活动文档中第二节的窗体保护。*/
function test() {
    if (ActiveDocument.Sections.Count >= 2) {
        ActiveDocument.Sections.Item(2).ProtectedForForms = true
    }
}
```


```JavaScript
/*本示例取消对选定内容中第一节的保护。*/
function test() {
    Selection.Sections.Item(1).ProtectedForForms = false
}
```


```JavaScript
/*本示例切换对选定内容中第一节的保护状态。*/
function test() {
    Selection.Sections.Item(1).ProtectedForForms = !(Selection.Sections.Item(1).ProtectedForForms)
}
```

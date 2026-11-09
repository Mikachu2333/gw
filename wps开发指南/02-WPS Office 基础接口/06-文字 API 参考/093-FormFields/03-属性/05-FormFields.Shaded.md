# FormFields.Shaded

如果将底纹应用于窗体域，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**Shaded**

express   一个代表 **FormFields** 对象的变量。

## 类型

boolean

## 说明


使用底纹便于在文档中查找窗体域，且不影响打印输出。



## 示例


```JavaScript
/*本示例清除第一个文档上窗体域的底纹。*/
function test() {
    Application.Documents.Item(1).FormFields.Shaded = false
}
```


```JavaScript
/*本示例向活动文档的窗体域添加底纹，并且保护文档中的窗体域。*/
function test() {
    ActiveDocument.FormFields.Shaded = true
    ActiveDocument.Protect(wdAllowOnlyFormFields, true)
}
```

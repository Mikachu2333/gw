# Document.DoNotEmbedSystemFonts

如果为 **True** ，则 WPS 不嵌入常规系统字体。 **Boolean** 类型，可读写。



## 语法

express.**DoNotEmbedSystemFonts**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 说明


如果用户使用中文系统创建文档，并希望该文档对于那些系统中没有该语言字体的用户也可读，可将 **DoNotEmbedSystemFonts** 属性设为 **False** 。例如，日语系统的用户可以选择在文档中嵌入字体，使日文文档在所有系统中可读。



## 示例


```JavaScript
/*本示例在当前文档中嵌入所有字体。*/
function test() {
    if (!ActiveDocument.EmbedTrueTypeFonts) {
        ActiveDocument.EmbedTrueTypeFonts = true
        ActiveDocument.DoNotEmbedSystemFonts = false
    } else {
        ActiveDocument.DoNotEmbedSystemFonts = false
    }
}
```


```JavaScript
/*本示例显示第一个文档是否嵌入常规系统字体。*/
function test() {
    alert(!Documents.Item(1).DoNotEmbedSystemFonts)
}
```

# Font.DisableCharacterSpaceGrid

如果 WPS 忽略相应 **Font** 对象的每行字符数，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**DisableCharacterSpaceGrid**

express   一个代表 **Font** 对象的变量。

## 类型

boolean

## 说明


如果只将某些指定文字的 **DisableCharacterSpaceGrid** 属性设为 **True** ，则该属性会返回 **wdUndefined** 。



## 示例


```JavaScript
/*本示例设置 WPS 忽略选定文本每行中的字符数。*/
function test() {
    Selection.Font.DisableCharacterSpaceGrid = true
}
```


```JavaScript
/*本示例显示 WPS 是否忽略活动文档的主文档文章的文本每行中的字符数。*/
function test() {
    let font = ActiveDocument.Content.Font
    alert(font.DisableCharacterSpaceGrid)
}
```

# Range.DisableCharacterSpaceGrid

如果 WPS 忽略相应 **Range** 对象的每行字符数，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**DisableCharacterSpaceGrid**

express   一个代表 **Range** 对象的变量。

## 类型

boolean

## 说明


如果仅将部分指定字体或区域的 **DisableCharacterSpaceGrid** 属性设置为 **True** ，则返回 **wdUndefined** 。



## 示例


```JavaScript
/*本示例显示 WPS 是否忽略活动文档的主文档文章的每行字符数。*/
function test() {
    alert(ActiveDocument.Content.DisableCharacterSpaceGrid)
}
```


```JavaScript
/*本示例设置 WPS 忽略新建文档的每行字符数。*/
function test() {
    Documents.Add().Range().DisableCharacterSpaceGrid = true
}
```

# Options.SavePropertiesPrompt

如果 WPS 在保存新的文档时，提示该文档的属性信息，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**SavePropertiesPrompt**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将 WPS 设置为在保存新文档时，提示该文档的属性信息。*/
function test() {
    Options.SavePropertiesPrompt = true
}
```


```JavaScript
/*本示例显示 WPS 在保存新文档时，是否提示该文档的属性信息。*/
function test() {
    alert(Options.SavePropertiesPrompt)
}
```

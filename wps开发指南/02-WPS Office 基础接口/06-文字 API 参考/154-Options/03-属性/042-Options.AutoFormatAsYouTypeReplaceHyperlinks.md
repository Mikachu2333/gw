# Options.AutoFormatAsYouTypeReplaceHyperlinks

如果本属性值为 **True** ，则 WPS 会在键入时自动将电子邮件地址、服务器和共享名称（即 UNC 路径）和 Internet 地址（即 URL）改为超链接。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatAsYouTypeReplaceHyperlinks**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


WPS 将任何看起来像电子邮件地址、UNC 或 URL 的文字更改为超链接。 WPS 并不检查超链接是否有效。



## 示例


```JavaScript
/*本示例使 WPS 自动将键入的任何 Internet 或者网络路径替换为超链接。*/
function test() {
    Options.AutoFormatAsYouTypeReplaceHyperlinks = true
}
```


```JavaScript
/*本示例显示 WPS 是否自动将键入的任何 Internet 或者网络路径替换为超链接。*/
function test() {
    alert(Options.AutoFormatAsYouTypeReplaceHyperlinks)
}
```

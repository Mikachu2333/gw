# Options.AutoFormatReplaceHyperlinks

如果为 **True** ，则 WPS 在对某一文档或范围自动套用格式时，将对其中的电子邮件地址、服务器和共享名称（即 UNC 路径）和 Internet 地址（即 URL）自动进行格式设置。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatReplaceHyperlinks**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


WPS 将任何看起来像电子邮件地址、UNC 或 URL 的文字更改为超链接。WPS 并不检查超链接是否有效。



## 示例


```JavaScript
/*本示例使 WPS 能自动将任何 Internet 或网络路径替换为超链接。*/
function test() {
    Options.AutoFormatReplaceHyperlinks = true
}
```


```JavaScript
/*本示例显示 WPS 是否能自动将任何 Internet 或网络路径替换为超链接。*/
function test() {
    alert(Options.AutoFormatReplaceHyperlinks)
}
```

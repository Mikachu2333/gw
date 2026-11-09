# Template.KerningByAlgorithm

如果 WPS 调整指定文档中的半角西文字符与标点符号的字距，则该属性值为 **True** 。可读写 **Boolean** 类型。



## 语法

express.**KerningByAlgorithm**

express   一个代表 **Template** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置允许 WPS 调整 Normal 模板中的半角西文字符与标点符号的字距。*/
function test() {
    NormalTemplate.KerningByAlgorithm = true
}
```


```JavaScript
/*本示例显示是否允许 WPS 调整活动文档附加模板的半角西文字符与标点符号的字距。*/
function test() {
    alert(ActiveDocument.AttachedTemplate.KerningByAlgorithm)
}
```

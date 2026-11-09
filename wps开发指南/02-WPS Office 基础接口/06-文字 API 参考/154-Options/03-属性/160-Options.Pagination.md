# Options.Pagination

如果 WPS 在后台重新为文档分页，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**Pagination**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 在后台重新分页。*/
function test() {
    Options.Pagination = true
}
```


```JavaScript
/*本示显示 WPS 是否在后台重新为文档分页。*/
function test() {
    alert(Options.Pagination)
}
```

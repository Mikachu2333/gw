# Selection.Hyperlinks

返回一个 **Hyperlinks** 集合，该集合代表指定选定内容中的所有超链接。只读。



## 语法

express.**Hyperlinks**

express   一个代表 **Selection** 对象的变量。

## 类型

Hyperlinks

## 示例


```JavaScript
/*本示例判断如果选定内容的超链接的数量大于等于1，则显示第一个超链接的地址。*/
function test() {
    if (Selection.Hyperlinks.Count >= 1) {
        alert(Selection.Hyperlinks.Item(1).Address)
    }
}
```


```JavaScript
/*本示例显示选中内容中超链接总数。*/
function test() {
    alert(Application.Selection.Hyperlinks.Count)
}
```

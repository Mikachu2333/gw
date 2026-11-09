# Comment.Visible

返回或设置一个 **Boolean** 值，它确定对象是否可见。可读写。



## 语法

express.**Visible**

express   一个代表 **Comment** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例隐藏单元格 A2 中的批注。*/
function test() {
    Application.Range("A2").Comment.Visible = false
}
```


```JavaScript
/*本示例显示 A4 单元格的批注是否可见。*/
function test() {
    alert(Application.Range("A4").Comment.Visible)
}
```

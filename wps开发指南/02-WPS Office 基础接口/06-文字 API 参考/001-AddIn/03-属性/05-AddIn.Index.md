# AddIn.Index

返回一个 **Long** 类型的值，该值代表项在集合中的位置。只读。



## 语法

express.**Index**

express   一个代表 **AddIn** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示第一个加载项的索引。*/
function test() {
    alert(Application.AddIns.Item(1).Index)
}
```


```JavaScript
/*本示例显示名为“Building Blocks.dotx”的加载项的索引。*/
function test() {
    let addIn = Application.AddIns.Item("Building Blocks.dotx")
    alert(addIn.Index)
}
```

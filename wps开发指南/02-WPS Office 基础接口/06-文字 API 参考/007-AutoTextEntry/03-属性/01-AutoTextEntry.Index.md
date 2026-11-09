# AutoTextEntry.Index

返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。



## 语法

express.**Index**

express   一个代表 **AutoTextEntry** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示 Normal 模板中第一个“自动图文集”条目的索引。*/
function test() {
    alert(Application.NormalTemplate.AutoTextEntries.Item(1).Index)
}
```


```JavaScript
/*本示例将所选内容替换成 Normal 模板中第二个“自动图文集”条目的索引。*/
function test() {
    Selection.Range.Text = Application.NormalTemplate.AutoTextEntries.Item(2).Index
}
```

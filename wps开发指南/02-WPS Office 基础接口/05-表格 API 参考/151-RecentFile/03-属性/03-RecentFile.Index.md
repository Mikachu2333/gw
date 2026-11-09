# RecentFile.Index

返回 **Long** 值，它代表对象在其同类对象所组成的集合内的索引号。



## 语法

express.**Index**

express   一个代表 **RecentFile** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示最近使用的文件列表中的第一个文件的索引。*/
function test() {
    alert(Application.RecentFiles.Item(1).Index)
}
```


```JavaScript
/*本示例显示最近使用的文件列表中的最后一个文件的索引。*/
function test() {
    alert(Application.RecentFiles.Item(Application.RecentFiles.Count).Index)
}
```

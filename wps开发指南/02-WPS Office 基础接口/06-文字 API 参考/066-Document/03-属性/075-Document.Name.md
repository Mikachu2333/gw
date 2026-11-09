# Document.Name

返回指定文档的名称。 **String** 类型，只读。



## 语法

express.**Name**

express   一个代表 **Document** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动文档的名称。*/
function test() {
    alert(ActiveDocument.Name)
}
```


```JavaScript
/*本示例在光标处插入所有已打开的文档的名称。*/
function test() {
    for (let i = 1; i <= Documents.Count; i++) {
        Selection.TypeText(Documents.Item(i).Name + "\n")
    }
}
```

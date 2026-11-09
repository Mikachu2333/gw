# Variable.Name

返回指定对象的名称。 **String** 类型，只读。



## 语法

express.**Name**

express   一个代表 **Variable** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例在光标处插入活动文档上所有文档变量的名称。*/
function test() {
    let variables = ActiveDocument.Variables
    for (let i = 1; i <= variables.Count; i++) {
        Selection.TypeText(variables.Item(i).Name + "\n")
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个文档变量的名称。*/
function test() {
    alert(Documents.Item(1).Variables.Item(1).Name)
}
```

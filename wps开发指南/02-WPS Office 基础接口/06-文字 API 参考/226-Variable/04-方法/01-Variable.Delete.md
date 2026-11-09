# Variable.Delete

删除指定的变量。



## 语法

express.**Delete()**

express   一个代表 **Variable** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档上第一个文档变量。*/
function test() {
    ActiveDocument.Variables.Item(1).Delete()
}
```


```JavaScript
/*本示例删除活动文档上所有文档变量。*/
function test() {
    let variables = ActiveDocument.Variables
    for (let i = variables.Count; i >= 1; i--) {
        variables.Item(i).Delete()
    }
}
```

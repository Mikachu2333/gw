# Field.Unlink

将指定域替换为其最新结果。



## 语法

express.**Unlink()**

express   一个代表 **Field** 对象的变量。

## 返回值

void

## 说明


如果断开一个域的链接，则当前结果会转换为文字或图形，并且无法再自动更新。注意，某些域（例如，XE（索引项）域和 SEQ（序列）域）不能断开链接。



## 示例


```JavaScript
/*本示例断开第一个文档中的第一个域的链接。*/
function test() {
    Documents.Item(1).Fields.Item(1).Unlink()
}
```


```JavaScript
/*本示例断开活动文档中所有域的链接。*/
function test() {
    for (let i = ActiveDocument.Fields.Count; i >= 1; i--) {
        ActiveDocument.Fields.Item(i).Unlink()
    }
}
```

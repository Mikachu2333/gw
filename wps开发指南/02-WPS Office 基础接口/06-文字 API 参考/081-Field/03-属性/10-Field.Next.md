# Field.Next

返回集合中的下一个对象。只读。



## 语法

express.**Next**

express   一个代表 **Field** 对象的变量。

## 类型

Field

## 示例


```JavaScript
/*本示例判断如果活动文档上第一节中的域的类型不为wdFieldFillIn，则更新该域。*/
function test() {
    if (ActiveDocument.Sections.Item(1).Range.Fields.Count >= 1) {
        let field = ActiveDocument.Fields.Item(1)
        while (field != null) {
            if (field.Type !== wdFieldFillIn) {
                field.Update()
            }
            field = field.Next
        }
    }
}
```


```JavaScript
/*本示例显示活动文档上第二个域的域代码的文本。*/
function test() {
    let field = ActiveDocument.Fields.Item(1).Next
    alert(field.Code.Text)
}
```

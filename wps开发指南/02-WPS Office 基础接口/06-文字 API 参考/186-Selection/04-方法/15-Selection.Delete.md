# Selection.Delete

删除指定数量的字符或单词。



## 语法

express.**Delete(Unit, Count)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Unit | 可选 | any | 删除折叠选定内容时基于的单位。可以是 **WdUnits** 常量之一。 |
| Count | 可选 | any | 要删除的单位数。要删除选定内容后的单位，折叠选定内容并使用一个正值。要删除选定内容前的单位，折叠选定内容并使用一个负值。 |

## 返回值

Long

## 说明


该方法返回一个代表删除的项目数的 **Long** 类型值。或者，如果删除不成功，则返回 0（零）。



## 示例


```JavaScript
/*本示例选择并删除活动文档中的内容。*/
function test() {
    let intResponse = MsgBox("Are you sure you want to delete the contents of the document?", jsYesNo)
    if (intResponse == jsResultYes) {
        ActiveDocument.Content.Select()
        Selection.Delete()
    }
}
```


```JavaScript
/*本示例设置删除折叠选定内容时基于的单位为字符，并删除选定内容前的 5 个字符。*/
function test() {
    Application.Selection.Delete(wdCharacter, -5)
}
```

# Range.Delete

删除指定数量的字符或单词。



## 语法

express.**Delete(Unit, Count)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Unit | 可选 | any | 删除折叠区域时所基于的单位。可以是 **WdUnits** 常量之一。 |
| Count | 可选 | any | 要删除的单位数。要删除该区域后的单位，请折叠该区域并使用一个正值。要删除该区域前的单位，请折叠该区域并使用一个负值。 |

## 返回值

Long

## 说明


此方法返回一个 **Long** 类型的值，该值表示已删除的项目数，如果删除操作不成功，则返回 0（零） 。



## 示例


```JavaScript
/*本示例选择并删除活动文档中的内容。*/
function test() {
    let response = MsgBox("Are you sure you want to delete the contents of the document?", jsYesNo)
    if (response == jsResultYes) {
        ActiveDocument.Content.Select()
        Selection.Range.Delete()
    }
}
```


```JavaScript
/*本示例删除所选内容中前两个单词。*/
function test() {
    Selection.Range.Delete(wdWord, 2)
}
```

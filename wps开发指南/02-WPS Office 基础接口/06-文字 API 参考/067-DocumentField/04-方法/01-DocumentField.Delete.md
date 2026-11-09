# DocumentField.Delete

删除指定的公文域。



## 语法

express.**Delete(DeleteWithContent)**

express   一个代表 **DocumentField** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| DeleteWithContent | 可选 | boolean | 是否删除该域中的内容，默认为 **False** 。 |

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档上第一个公文域。*/
function test() {
    Application.ActiveDocument.DocumentFields.Item(1).Delete()
}
```


```JavaScript
/*本示例删除所选内容中所有公文域及域中的内容。*/
function test() {
    let documentFields = Selection.DocumentFields
    for (let i = documentFields.Count; i >= 1; i--) {
        documentFields.Item(i).Delete(true)
    }
}
```

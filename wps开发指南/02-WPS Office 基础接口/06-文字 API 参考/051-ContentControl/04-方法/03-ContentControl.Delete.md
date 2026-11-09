# ContentControl.Delete

删除指定的内容控件以及内容控件中的内容。



## 语法

express.**Delete(DeleteContents)**

express   一个代表 **ContentControl** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| DeleteContents | 可选 | boolean | 指定是否删除内容控件的内容。如果值为 **True** ，将同时删除内容控件及其内容。如果值为 **False** ，将删除内容控件，但将其内容保留在活动文档中。默认值为 **False** 。 |

## 返回值

void

## 示例


```JavaScript
/*本示例从活动文档中删除所有内容控件及其内容。*/
function test() {
    while (ActiveDocument.ContentControls.Count > 0) {
        let controls = ActiveDocument.ContentControls
        for (let i = controls.Count; i >= 1; i--) {
            controls.Item(i).Delete(true)
        }
    }
}
```


```JavaScript
/*本示例删除活动文档上第一个内容控件，但将其内容保留在活动文档中。*/
function test() {
    let control = ActiveDocument.ContentControls.Item(1)
    control.Delete()
}
```

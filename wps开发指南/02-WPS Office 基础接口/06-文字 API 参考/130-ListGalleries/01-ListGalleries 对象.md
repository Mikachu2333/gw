# ListGalleries 对象

 **ListGallery** 对象的集合，这些对象代表 **“项目符号和编号”** 对话框中的三个选项卡。

## 说明


使用 **ListGalleries** 属性返回 **ListGalleries** 集合。


## 示例


```JavaScript
/*本示例将数组 arr 中所有列表库中七个模板（格式）重新设置成内置列表模板格式*/
function test() {
    let arr = [wdBulletGallery, wdNumberGallery, wdOutlineNumberGallery]
    for (let i = 0; i < arr.length; i++) {
        let listGallery = Application.ListGalleries.Item(arr[i])
        for (let j = 1; j <= 7; j++) {
            listGallery.Reset(j)
        }
    }
}
```
使用 **ListGalleries** (索引)，其中索引是 **wdBulletGallery** 、 **wdNumberGallery** 或 **wdOutlineNumberGallery** ，可返回一个 **ListGallery** 对象。



```JavaScript
/*本示例为所选内容应用“项目符号和编号”对话框中“项目符号”选项卡上的第三种列表格式（不包括“无”）。*/
function test() {
    let listTemplate = Application.ListGalleries.Item(wdBulletGallery).ListTemplates.Item(3)
    Selection.Range.ListFormat.ApplyListTemplate(listTemplate)
}
```
若要查看指定的列表模板是否包含 WPS 内置的格式设置，使用 **ListGallery** 对象中的 **Modified** 属性。若要重置为原始列表格式的格式，请使用 **ListGallery** 对象的 **Reset** 方法。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListGalleries/member/Item) | 返回集合中的单个 **ListGallery** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListGalleries/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中列表库的数目。只读。 |
# Application.ListGalleries

返回一个 **[ListGalleries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListGalleries/obj)** 集合，该集合代表三个列表模板库。



## 语法

express.**ListGalleries**

express   一个代表 **Application** 对象的变量。

## 类型

ListGalleries

## 说明


每个模板库（项目符号、编号和多级符号）都对应于 **“项目符号和编号”** 对话框上的一个选项卡。



## 示例


```JavaScript
/*本示例将变量 listTemplate 设置为“项目符号和编号”对话框的“多级符号”选项卡中的第二种列表模板，然后将此模板应用到活动文档中的第一个列表。*/
function test() {
    let listTemplate = Application.ListGalleries.Item(wdOutlineNumberGallery).ListTemplates.Item(2)
    ActiveDocument.Lists.Item(1).ApplyListTemplate(listTemplate)
}
```


```JavaScript
/*本示例将数组 arr 里所有列表库中七个模板（格式）重新设置成内置列表模板格式*/
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

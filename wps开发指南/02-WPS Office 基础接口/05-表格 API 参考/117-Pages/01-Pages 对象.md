# Pages 对象

文档页面的集合。使用 **Pages** 集合及相关对象和属性可通过编程方式定义工作簿的页面布局。

## 说明


使用 **Pages** 属性可返回 **Pages** 集合。


## 示例


```JavaScript
/*本示例显示 Sheet1 页面数量。*/
function test() {
    let objPage = Application.Worksheets.Item("Sheet1").PageSetup.Pages
    alert(`Sheet1页面数量为 ${objPage.Count}`)
}
```
使用 **Item** 方法可访问代表工作表中单个页面的单个 **Page** 对象。



```JavaScript
/*本示例设置活动工作表页面页脚左对齐的文本内容为“第1页”。*/
function test() {
    let objPage = ActiveSheet.PageSetup.Pages.Item(1)
    objPage.LeftFooter.Text = "第1页"
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Pages/member/Item) | 返回一个 **Page** 对象，该对象代表工作簿中的页的集合。只读。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Pages/member/Count) | 返回集合中对象的数目。只读 **Long** 类型。 |
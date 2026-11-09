# FontNames 对象

代表一个所有有效字体名称的列表。

## 说明


使用 **FontNames** 、 **LandscapeFontNames** 或 **PortraitFontNames** 属性都可返回 **FontNames** 对象。


## 示例


```JavaScript
/*本示例显示有效纵排字体的数量。*/
function test() {
    alert(Application.PortraitFontNames.Count + " fonts available")
}
```


```JavaScript
/*本示例在活动文档的末尾列出 FontNames 对象中的所有字体名称。*/
function test() {
    for (let i = 1; i <= Application.FontNames.Count; i++) {
        ActiveDocument.Range().InsertAfter(Application.FontNames.Item(i) + "\n")
    }
}
```
使用 **FontNames** (_Index_) 可返回一个字体名称，其中 _Index_ 是索引号。



```JavaScript
/*本示例显示 FontNames 集合中第一个字体名称。*/
function test() {
    alert(Application.FontNames.Item(1))
}
```
不能在有效字体列表中添加或删除名称。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FontNames/member/Item) | 返回一个 **String** 类型值，该值代表字体名称。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FontNames/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中字体名称的数量。 **Long** 类型，只读。 |
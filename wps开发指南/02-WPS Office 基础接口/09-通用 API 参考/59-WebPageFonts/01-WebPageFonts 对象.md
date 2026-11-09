# WebPageFonts 对象

 **[WebPageFont](#TODO)** 对象的集合，这些对象描述了在将文档另存为网页时所使用的非等宽字体、非等宽字体大小、等宽字体和等宽字体大小。可以为每个可用的字符集指定一组不同的网页字体属性。

## 说明


 **WebPageFonts** 集合为每个字符集包含一个 **WebPageFont** 对象。


## 示例


```JavaScript
/*本示例运行于表格组件，显示在 ET 中打开网页时使用的字符集的数量。*/
function test() {
    alert(Application.DefaultWebOptions.Fonts.Count)
}
```


```JavaScript
/*本示例运行于表格组件，显示 WebPageFonts 对象的实际类型。*/
function test() {
    alert(Application.DefaultWebOptions.Fonts.constructor.name)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/WebPageFonts/member/Count) | 获取一个 **Long** 类型的值，指示 **WebPageFonts** 对象中的项数。只读。 |
# DataRange 对象

代表容器应用程序的一个数据区域对象。

## 说明

DataRange为类似表格Range概念，对应于表格中的一个区域，用于存储缓存数据，如果注册进DataSource，表格中的对应区域数据修改，将会触发事件。

{#objmember}

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Address](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/DataRange/member/Address) | 代表DataRange对象的地址。形如“sheet1!$a$1”表示sheet1中A1单元格。只读。 |
| [TextInJSON](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/DataRange/member/TextInJSON) | json格式表示区域的格式化后的值。只读。 |
| [ValueInJSON](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/DataRange/member/ValueInJSON) | json格式表示区域的值。只读。 |
# DataSource.GetDataRange

返回已注册的对应DataRange。

## 语法

express.GetDataRange(Index)

express   一个代表 DataSource 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | Variant | 对象的索引 |

## 返回值

Object

## 说明

目前Index仅支持字符串，代表DataRange对象的键。当输入的Index为数字时，不会有类型检查报错，但是也不会有对象返回。

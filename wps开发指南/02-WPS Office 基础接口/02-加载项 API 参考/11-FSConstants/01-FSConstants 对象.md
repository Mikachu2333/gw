# FSConstants 对象

文件系统常量对象，通过 [FileSystem.constants](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/constants) 访问。

## 说明

提供两组常量：复制标志常量（COPYFILE_*）用于 [FileSystem.copyFileSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/copyFileSync) 的 `flags` 参数，文件访问权限常量（F_OK/R_OK/W_OK/X_OK）对应 POSIX `access()` 系统调用。所有常量均为只读整数属性。

复制标志常量直接映射 libuv 的 `UV_FS_COPYFILE_*` 值，它们是位标志（bit flags），可以通过按位或（`|`）组合——例如 `COPYFILE_EXCL | COPYFILE_FICLONE` 表示"不覆盖 + 尝试 CoW 克隆"。访问权限常量映射 POSIX `<unistd.h>` 中的 `F_OK`/`R_OK`/`W_OK`/`X_OK` 值，同样可通过按位或组合。

注意：WPS 当前未提供 `accessSync` 方法，因此 `F_OK`/`R_OK`/`W_OK`/`X_OK` 四个常量目前无法实际使用——它们被暴露以保持与 Node.js `fs.constants` 的一致性。检查文件是否存在可使用 [FileSystem.existsSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/existsSync) 替代。

对应 Node.js 的 `fs.constants` 对象。

## 示例

```javascript
/* 使用复制标志防止覆盖 */
var ok = FileSystem.copyFileSync(
  "C:\\source\\data.txt",
  "C:\\dest\\data.txt",
  FileSystem.constants.COPYFILE_EXCL
)
if (!ok) {
  Console.log("复制失败——目标文件可能已存在")
}
```

```javascript
/* 组合多个标志 */
var flags = FileSystem.constants.COPYFILE_EXCL | FileSystem.constants.COPYFILE_FICLONE
var ok = FileSystem.copyFileSync(src, dest, flags)
```

{#objmember}

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [COPYFILE_EXCL](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSConstants/member/COPYFILE_EXCL) | 复制标志：如果目标文件已存在，复制操作将失败。 **number** 类型，只读。 |
| [COPYFILE_FICLONE](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSConstants/member/COPYFILE_FICLONE) | 复制标志：尝试使用 Copy-on-Write（CoW）克隆复制文件，不支持时退回普通复制。 **number** 类型，只读。 |
| [COPYFILE_FICLONE_FORCE](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSConstants/member/COPYFILE_FICLONE_FORCE) | 复制标志：强制使用 Copy-on-Write（CoW）克隆复制文件，不支持时操作失败。 **number** 类型，只读。 |
| [F_OK](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSConstants/member/F_OK) | 文件访问常量：测试文件是否存在。 **number** 类型，只读。 |
| [R_OK](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSConstants/member/R_OK) | 文件访问常量：测试文件是否有读权限。 **number** 类型，只读。 |
| [W_OK](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSConstants/member/W_OK) | 文件访问常量：测试文件是否有写权限。 **number** 类型，只读。 |
| [X_OK](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSConstants/member/X_OK) | 文件访问常量：测试文件是否有执行权限。 **number** 类型，只读。 |

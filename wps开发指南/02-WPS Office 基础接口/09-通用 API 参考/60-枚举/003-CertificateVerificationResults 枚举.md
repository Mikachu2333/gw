# CertificateVerificationResults 枚举

提供验证数字证书的结果。

| 名称                       | 值 | 说明          |
| ------------------------ | - | ----------- |
| **certverresError**      | 0 | 验证导致了错误。    |
| **certverresExpired**    | 5 | 证书已过期。      |
| **certverresInvalid**    | 4 | 证书无效。       |
| **certverresRevoked**    | 6 | 证书已吊销。      |
| **certverresUntrusted**  | 7 | 证书来自不受信任的源。 |
| **certverresUnverified** | 2 | 证书当前未经验证。   |
| **certverresValid**      | 3 | 证书有效。       |
| **certverresVerifying**  | 1 | 证书当前正在验证。   |

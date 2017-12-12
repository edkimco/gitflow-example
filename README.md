# Gitflow

## Getting Started

1. Git merge ours driver 설정

```sh
git config --global merge.ours.driver true
```

2. 브랜치 별로 고유한 설정 파일, 여기서는 `config.client.js`를 `.gitattributes`에 추가

```sh
config.client.js merge=ours
```

3. `config.server.js`는 브랜치로 관리하지 않고 OS 환경변수로 관리한다.

```javascript
const env = process.env.NODE_ENV || 'development'
```

## 브랜치 관리

1. `commit`은 `develop`으로만, `merge`는 무조건(`hotfix` 예외) `develop` -> `master`, 단방향으로만 이루어진다.

2. 운영 상에서 급하게 버그 수정이 필요한 경우 `master`에서 `hotfix` 브랜치를 새로 만들어 버그를 수정한 뒤 각각 `hostfix` -> `master`, `hotfix` -> `develop` 브랜치로 `merge`
: 유일하게 반대방향으로 이루어지는 `merge`
# 📚 DApp List Viewer

React 기반으로 제작된 DApp 리스트 필터링 & 렌더링 프로젝트입니다.  
`언어`, `플랫폼`, `환경` 조건에 따라 리스트를 필터링하여 사용자에게 보여줍니다.

---

## 🧩 프로젝트 개요

홈화면에서 상단배너, 즐겨찾기 목록, 서비스 목록을 확인 할 수 있습니다.

✅ **주요 기술 스택**: React, TypeScript, Zustand, React Query, ShadcnUI, Tailwind CSS

---

## ⚙️ 실행 방법 및 환경 설정

```bash
# 1. 저장소 클론
git clone https://github.com/hyeon-chae/IoTrust-project.git

# 2. 의존성 설치
cd IoTrust-project
npm install

# 3. 환경 변수 설정
cp .env.local

# 4. 개발 서버 실행
npm run dev
```

---

## 📂 주요 코드 설명

# DApp 리스트 필터링 로직 구현

- 각 DApp 아이템에 설정된 conditions 조건(lang, platform, env)에 따라 리스트 필터링
- 조건이 없거나 비어 있으면 전체 표시

# React Query를 통한 데이터 Fetching

- getDAppList, getFavoriteList, getBannerList API 연동

# 컴포넌트 구조화 및 역할 분리

- MVP 패턴을 사용하여 로직과 UI 분리
- 재사용 가능한 훅과 상태 관리 로직 정리
- shadcn으로 atomic ui 활용

# 다국어(i18n) 지원

- localization에 따른 다국어 처리

# Zustand를 통한 글로벌 상태 관리

- 즐겨찾기(FavoriteList) 상태를 zustand store로 관리

---

## ⛔ 제한 시간 내 구현하지 못한 부분 & 보완하고 싶은 점

- api error시 새로고침 구현
- 다국어 변경 토글 또는 셀렉트 박스 구현
- 배너 타이틀 html로 받아서 처리
- locale은 페이지 단위와 common으로 쪼개기

# DemoQA UI and API Automation

Автоматизированный тестовый фреймворк для сайта [DemoQA](https://demoqa.com).

Проект реализован как расширение контрольной работы №2.

## Технологии

- Node.js 20+
- Playwright
- JavaScript
- Page Object Model
- ESLint
- Prettier
- GitHub Actions

## Покрытие

- 30 автоматизированных тестов.
- 25 UI end-to-end тестов.
- 5 API-тестов.
- Более 10 функциональностей.
- Smoke-набор с тегом `@smoke`.
- API-набор с тегом `@api`.
- Связанный UI + API сценарий Book Store.

## Установка

```bash
git clone <repository-url>
cd demoqa-ui-automation
npm install
npx playwright install --with-deps
```

## Переменные окружения

Создать `.env` на основе `.env.example`.

```env
BASE_URL=https://demoqa.com
API_BASE_URL=https://demoqa.com
```

## Запуск тестов

### Все тесты

```bash
npm test
```

### UI-тесты

```bash
npm run test:ui
```

### API-тесты

```bash
npm run test:api
```

### Smoke-набор

```bash
npm run test:smoke
```

### Полная регрессия

```bash
npm run test:regression
```

### Запуск в headed-режиме

```bash
npm run test:headed
```

### Только Chromium

```bash
npm run test:ui:chromium
```

## Проверка качества кода

```bash
npm run lint
npm run format:check
npm run format
```

## Отчёт

После запуска тестов:

```bash
npm run report
```

## Теги

| Тег         | Назначение                 |
| ----------- | -------------------------- |
| `@smoke`    | Критичные быстрые сценарии |
| `@api`      | API-тесты                  |
| `@negative` | Негативные сценарии        |

## GitHub Actions

В проекте реализованы три workflow:

- `api-tests.yml` — API-тесты при Pull Request, push в main и вручную.
- `smoke-tests.yml` — smoke-набор в Chromium, Firefox и WebKit.
- `regression-tests.yml` — полная регрессия в Chromium вручную, после push в main и по расписанию.

В CI сохраняются Playwright report, screenshots, videos и traces при падении.

## Известные ограничения

DemoQA — публичный учебный сайт. Иногда возможны проблемы с рекламными блоками, скоростью ответа или временной недоступностью отдельных страниц. Для Web Tables используется обход рекламного блока при нажатии Edit и Delete.
